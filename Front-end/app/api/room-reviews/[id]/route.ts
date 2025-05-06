// @ts-nocheck

import { getRoomReviews } from '../../../components/libs/apis'
import { NextResponse, type NextRequest } from 'next/server'

type Params = {
  params: {
    id: string
  }
}

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  const roomId = params.id

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
