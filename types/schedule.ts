import { UUID } from 'crypto'
import { URL } from 'url'

interface ScheduleProps {
  schedule_id: UUID
  group_id: UUID
  title: string
  teacher: string
  url: URL
  type: 'LECTURE' | 'PRACTICE' | 'LAB'
  is_selective: boolean
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6
  row: 1 | 2 | 3 | 4 | 5 | 6 | 7
  week_parity: 'EVEN' | 'ODD' | 'BOTH'
  created_at: Date
  updated_at: Date
}

export { type ScheduleProps }
