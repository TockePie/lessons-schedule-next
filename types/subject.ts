import { URL } from 'url'

interface Subject {
  title: string
  teacher: string
  type: 'LECTURE' | 'PRACTICE' | 'LAB'
  url: URL
  is_selective: boolean
}

export { type Subject }
