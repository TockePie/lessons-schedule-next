import { URL } from 'node:url'

export interface Subject {
  title: string
  teacher: string
  type: 'LECTURE' | 'PRACTICE' | 'LAB'
  url?: URL
  is_selective: boolean
}
