'use client'

import { Key } from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'

import { NAVBAR_TEXTS } from '@/common/constants/texts'
import useGroup from '@/common/providers/group'
import { groupDataList } from '@/data/groupData'

const handleGroup = async (key: Key) => {
  Cookies.set('groupId', key.toString())
  redirect(`/${key}`)
}

function GroupDropdownMenu() {
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
