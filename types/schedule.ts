import { UUID } from 'crypto'

import { Subject } from './subject'

interface ScheduleProps {
  id: UUID
  day: 1 | 2 | 3 | 4 | 5 | 6
  row: 1 | 2 | 3 | 4 | 5 | 6 | 7
  week_parity: 'EVEN' | 'ODD' | 'BOTH'
  subject: Subject
  created_at: Date
  updated_at: Date
}

export { type ScheduleProps }
