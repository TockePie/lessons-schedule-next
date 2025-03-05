import { UUID } from 'crypto'
import { Url } from 'url'

interface GroupProps {
  group_id: UUID
  name: string
  photo: Url
  created_at: string
  updated_at: string
}

export { type GroupProps }
