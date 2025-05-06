import { getRoomReviews } from '../../../components/libs/apis'
import { NextResponse, type NextRequest } from 'next/server'

interface Params {
  id: string;
}

export async function GET(
  __req__: NextRequest,
  { params }: { params: Params } // Explicitly typing params as { id: string }
) {
  const roomId = params.id as string;

  try {
    const roomReviews = await getRoomReviews(roomId);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: 'Successful',
    });
  } catch (error) {
    console.error('Getting Review Failed', error);
    return new NextResponse('Unable to fetch', { status: 400 });
  }
}
