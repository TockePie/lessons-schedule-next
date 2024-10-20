import { Key } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'

import { groupDataList } from '@/data/groupData'
import { useGroup } from '@/common/providers/group'
import { useRouter } from 'next/navigation'

const chooseGroup = 'Оберіть групу'

const GroupDropdownMenu = () => {
  const router = useRouter()
  const { group, groupId, setGroupId } = useGroup()

  return (
    <Dropdown closeOnSelect>
      <DropdownTrigger>
        <Button variant="bordered">
          {groupId
            ? group
            : chooseGroup}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onAction={(key: Key) => {
          localStorage.setItem('groupId', key.toString())
          setGroupId(key.toString())
          router.push(`/${key}`)
        }}
      >
        {groupDataList.map((item) => (
          <DropdownItem key={item.data.id}>{item.group}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default GroupDropdownMenu
