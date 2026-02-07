import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { groupId } = await req.json()

  if (!groupId) {
    return NextResponse.json({ error: 'groupId is required' }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('groupId', groupId, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  })

  return response
}
