import { getRoomReviews } from '../../../components/libs/apis'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const roomId = context.params.id

  try {
    const roomReviews = await getRoomReviews(roomId)

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: 'Successful',
    })
  } catch (error) {
    console.error('Getting Review Failed', error)
    return new NextResponse('Unable to fetch', { status: 400 })
  }
}
