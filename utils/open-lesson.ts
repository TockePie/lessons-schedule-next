import { URL } from 'url'

const openLesson = (url: URL): void => {
  window.open(url, '_blank')
}

export default openLesson
