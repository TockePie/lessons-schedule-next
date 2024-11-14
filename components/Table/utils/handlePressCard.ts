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

const transformUrl = (url: string) => {
  const urlPattern = /https:\/\/(\w+)\.zoom\.us\/j\/(\d+)\?pwd=([^&#]+)/
  const match = url.match(urlPattern)

  if (match) {
    const [, , meetingId, password] = match
    return `https://app.zoom.us/wc/${meetingId}/join?pwd=${password}&fromPWA=1`
  } else {
    console.error('Invalid Zoom URL:', url)
    return url
  }
}

const handlePress = (
  lesson: Lesson,
  setModalData: (data: {
    textInDialog: string
    password: string
    url: string
  }) => void,
  onOpen: () => void
) => {
  let urlToUse

  if (localStorage.getItem('enabledPwaZoom') === 'true') {
    if (typeof lesson.url === 'string') {
      urlToUse = transformUrl(lesson.url)
    } else if (lesson.url && typeof lesson.url === 'object') {
      urlToUse = {
        ...lesson.url,
        url: transformUrl(lesson.url.url)
      }
    }
  } else {
    urlToUse = lesson.url
  }

  const openingData = { ...lesson, url: urlToUse ?? '' }
  const opening = openLesson(openingData)

  if (opening) {
    setModalData(opening)
    onOpen()
  }
}

export default handlePress
