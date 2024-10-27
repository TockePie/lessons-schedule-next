import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Snippet
} from '@nextui-org/react'

interface ModalDataProps {
  textInDialog: string
  password: string
  url: string
}

interface DisclosureProps {
  isOpen: boolean
  onClose: () => void
  data: ModalDataProps
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
            onPress={() => window.open(data.url, '_blank')}
          >
            Відкрити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalDialog
