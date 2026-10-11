import { Schedule } from './schedule'

export interface ProcessedSchedule {
  items: Map<string, Schedule>
  lastRow: number
}
