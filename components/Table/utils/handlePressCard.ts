interface Lesson {
  url:
    | string
    | {
        needDialog: boolean
        textInDialog: string
        password: string
        url: string
      }
}

const openLesson = (lesson: Lesson) => {
  const URL = typeof lesson === 'object' ? lesson.url : lesson

  if (URL && typeof URL === 'object' && URL.needDialog == true) {
    return {
      textInDialog: URL.textInDialog,
      password: URL.password,
      url: URL.url
    }
  } else if (typeof URL === 'string') {
    window.open(URL, '_blank')
  } else {
    console.error('Invalid URL:', URL)
    alert('Помилка відкриття заняття')
  }
}

const handlePress = (lesson: Lesson, setModalData, onOpen) => {
  const opening = openLesson(lesson)
  if (opening) {
    setModalData(opening)
    onOpen()
  }
}

export default handlePress
