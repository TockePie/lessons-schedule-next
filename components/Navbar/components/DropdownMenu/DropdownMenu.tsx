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

const chooseGroup = 'Оберіть групу'

const GroupDropdownMenu = () => {
  const { group, setGroup } = useGroup()

  return (
    <Dropdown closeOnSelect>
      <DropdownTrigger>
        <Button variant="bordered">{group ? group : chooseGroup}</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onAction={(key: Key) => {
          localStorage.setItem('group', key.toString())
          setGroup(key.toString())
        }}
      >
        {groupDataList.map((item) => (
          <DropdownItem key={item.group}>{item.group}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default GroupDropdownMenu
