import { toast } from 'sonner'

const openLesson = (url: string | null) => () => {
  if (url) {
    window.open(url, '_blank')
    return
  }

  // toast.error('Заняття не має посилання чи локації', {
  //   action: {
  //     label: 'Додати',
  //     onClick: () => {
  //       // Future "Add URL" logic goes here
  //     }
  //   }
  // })
  toast.error('Заняття не має посилання чи локації')
}

export default openLesson
