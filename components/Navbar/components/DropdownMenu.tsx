'use client'

import { Key } from 'react'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'

import { groupDataList } from '@/data/groupData'
import useGroup from '@/common/providers/group'
import { NAVBAR_TEXTS } from '@/common/constants/texts'

const handleGroup = async (key: Key) => {
  Cookies.set('groupId', key.toString())
  redirect(`/${key}`)
}

const GroupDropdownMenu = () => {
  const { group, groupId, setGroupId } = useGroup()

  const handleChoose = (key: Key) => {
    setGroupId(key.toString())
    handleGroup(key)
  }

  return (
    <Dropdown closeOnSelect>
      <DropdownTrigger>
        <Button variant="bordered">
          {groupId ? group : NAVBAR_TEXTS.chooseGroup}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" onAction={handleChoose}>
        {groupDataList.map((item) => (
          <DropdownItem key={item.data.id}>{item.group}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default GroupDropdownMenu
