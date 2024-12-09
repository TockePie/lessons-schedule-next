import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Snippet
} from '@nextui-org/react'

import { LessonUrl } from '@/components/Table/types/table'

interface DisclosureProps {
  isOpen: boolean
  onClose: () => void
  data: {
    textInDialog: string
    password: string
    url: string | (() => void) | LessonUrl
  }
}

const ModalDialog = ({ isOpen, onClose, data }: DisclosureProps) => {
  const handleOpen = () => {
    if (typeof data.url === 'string') {
      window.open(data.url, '_blank')
    } else if (typeof data.url === 'object' && 'url' in data.url) {
      window.open(data.url.url, '_blank')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Повідомлення</ModalHeader>
        <ModalBody>
          <p>{data.textInDialog}</p>
          <Snippet symbol="→" variant="bordered">
            {data.password}
          </Snippet>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={handleOpen}>
            Відкрити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalDialog
