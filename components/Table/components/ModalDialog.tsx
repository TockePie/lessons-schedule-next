import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Snippet
} from '@nextui-org/react'

interface LessonUrl {
  url: string
  password?: string
  needDialog?: boolean
  textInDialog?: string
}

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
          <Button
            color="primary"
            onPress={() => {
              if (typeof data.url === 'string') {
                window.open(data.url, '_blank')
              } else if (typeof data.url === 'object' && 'url' in data.url) {
                window.open(data.url.url, '_blank')
              }
            }}
          >
            Відкрити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalDialog
