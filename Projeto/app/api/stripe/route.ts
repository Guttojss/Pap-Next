import Stripe from 'stripe';
import { authOptions } from '../../components/libs/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getAssociacaoBySlug } from '../../components/libs/apis';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-03-31.basil',
});

type RequestData = {
  adults: number;
  slug: string;
};

export async function POST(req: Request) {
  // 1️⃣ Lê e valida o body
  const { adults, slug }: RequestData = await req.json();
  if (adults == null || !slug) {
    return new NextResponse('Please fill all fields', { status: 400 });
  }

  // 2️⃣ Origem (para urls de sucesso/erro)
  const origin = req.headers.get('origin') ?? '';

  // 3️⃣ Autenticação
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse('Authentication required', { status: 401 });
  }
  const userId = session.user.id;

  try {
    // 4️⃣ Busca a associação pelo slug
    const associacao = await getAssociacaoBySlug(slug);
    if (!associacao) {
      return new NextResponse('Association not found', { status: 404 });
    }

    // 5️⃣ Calcula preço total e desconto
    const { price, discount, name, images, _id } = associacao;
    const discountedPrice = price - (price * discount) / 100;
    const totalAmountCents = Math.round(discountedPrice * 100);

    // 6️⃣ Cria sessão no Stripe
    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            product_data: {
              name,
              images: images.map(img => img.url),
            },
            unit_amount: totalAmountCents,
          },
        },
      ],
      payment_method_types: ['card'],
      success_url: `${origin}/users/${userId}`,
      cancel_url: `${origin}/Associacoes/${slug}`,
      metadata: {
        adults: adults.toString(),
        associacao: _id,
        user: userId,
        discount: discount.toString(),
        totalPrice: discountedPrice.toString(),
        isAnual: 'false',               // ou 'true' se for anual
      },
    });

    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: 'Payment session created',
    });
  } catch (error: any) {
    console.error('Payment failed:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
