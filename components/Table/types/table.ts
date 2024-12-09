import { Dispatch, ReactNode, SetStateAction } from 'react'

import { LessonType } from '@/components/Table/utils/getLessonColor'

interface LessonUrl {
  url: string
  password?: string
  needDialog?: boolean
  textInDialog?: string
}

interface ModalData {
  textInDialog: string
  password: string
  url: string | LessonUrl | (() => void)
}

interface Lesson {
  lessonName: string | null
  lessonType: LessonType | null
  teacher: string | null
  url:
    | string
    | {
        needDialog: boolean
        textInDialog: string
        password: string
        url: string
      }
  dayOfWeek: string
}

interface LessonsData {
  [key: string]: Lesson[]
}

interface TableComponentProps {
  modalData: {
    textInDialog: string
    password: string
    url: string | (() => void) | LessonUrl
  }
  emptyContent: ReactNode
  setModalData: Dispatch<
    SetStateAction<{
      textInDialog: string
      password: string
      url: string | LessonUrl | (() => void)
    }>
  >
  onOpen: () => void
  lessonsData: LessonsData
  isOpen: boolean
  onClose: () => void
  pathname: string
}

export type { Lesson, LessonsData, LessonUrl, ModalData, TableComponentProps }
