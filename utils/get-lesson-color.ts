import { Subject } from '@/types/subject'

const getLessonColor = (lessonType: Subject['type']) => {
  switch (lessonType) {
    case 'LECTURE':
      return 'border-indigo-400'
    case 'PRACTICE':
      return 'border-red-400'
    case 'LAB':
      return 'border-lime-400'
  }
}

export default getLessonColor
