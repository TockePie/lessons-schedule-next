import { toast } from 'sonner'

const successFn = () => {
  toast.success('Текст помилки скопійовано в буфер обміну')
}

const errorFn = () => {
  toast.error('Не вдалося скопіювати текст помилки')
}

const copyToClipboard = (error: Error) => {
  navigator.clipboard.writeText(error.message).then(successFn, errorFn)
}

export default copyToClipboard
