'use client'

import { useEffect, useState } from 'react'
import { isMobileOnly } from 'react-device-detect'
import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Select,
  SelectItem,
  Switch,
  useDisclosure
} from '@nextui-org/react'
import { LifeBuoy, Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'

function DrawerComp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isPwa, setIsPwa] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedValue = localStorage.getItem('isPwa')
    setIsPwa(storedValue === 'true')
  }, [])

  const handlePwa = (checked: boolean): void => {
    setIsPwa(checked)
    localStorage.setItem('enabledPwaZoom', checked.toString())
  }

  return (
    <>
      <Button isIconOnly color="primary" variant="faded" onPress={onOpen}>
        <Menu />
      </Button>
      <Drawer
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="text-2xl font-bold">
                Налаштування
              </DrawerHeader>
              <DrawerBody>
                <Card
                  isPressable
                  onPress={() => {
                    router.push('/help')
                    onClose()
                  }}
                  className="cursor-pointer"
                >
                  <CardBody className="flex flex-row gap-x-3">
                    <LifeBuoy strokeWidth={1.5} />
                    <p className="font-semibold">Допомога</p>
                  </CardBody>
                </Card>

                <Divider className="my-3" />

                <Select
                  isDisabled
                  label="Вибірковий предмет"
                  placeholder="Поки що недоступно"
                >
                  <SelectItem key="math" value="math">
                    Математика
                  </SelectItem>
                </Select>
                {!isMobileOnly && (
                  <Switch isSelected={isPwa} onValueChange={handlePwa}>
                    Відкривати посилання ZOOM у браузері{' '}
                    <Chip size="sm" color="danger">
                      Unstable
                    </Chip>
                  </Switch>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button
                  size="lg"
                  color="primary"
                  variant="faded"
                  onPress={onClose}
                  className="w-full"
                >
                  Закрити
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComp
