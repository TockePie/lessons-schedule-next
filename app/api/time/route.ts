import { getISOWeek } from 'date-fns'
import { NextResponse } from 'next/server'

export function GET() {
  const date = new Date()

  const currentWeek = getISOWeek(date)
  const weekParity = currentWeek % 2 === 0 ? 'even' : 'odd'

  return NextResponse.json({
    serverTime: new Date().toISOString(),
    weekParity
  })
}
