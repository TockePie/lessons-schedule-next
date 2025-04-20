import { ScheduleProps } from '@/types/schedule'

const getLessonColor = (lessonType: ScheduleProps['type']) => {
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
