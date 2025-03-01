import { Url } from 'url'

interface GroupProps {
  group_id: string
  name: string
  photo: Url
  created_at: string
  updated_at: string
}

export { type GroupProps }
