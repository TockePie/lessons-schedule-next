// import { selectives } from './selectives'

// const selective = JSON.parse(localStorage.getItem('selectedValue'))

const emptyLesson = {
  lessonName: null,
  lessonType: null,
  teacher: null,
  url: null
}

const groupData = {
  group: 'ІО-32',
  id: 'a7e6',
  allowSelectives: true,
  lessons: {
    evenLessons: {
      firstLessonsRow: [
        {
          dayOfWeek: 'mon',
          // ...(selective === 'religion'
          //   ? selectives.religion.lecture
          //   : selective === 'cities'
          //   ? selectives.cities.lecture
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          // ...(selective === 'psychology'
          //   ? selectives.psychology.lecture
          //   : selective === 'psychologyConflict'
          //   ? selectives.psychologyConflict.practice
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Філософія',
          lessonType: 'lecture',
          teacher: 'Руденко Т.',
          url: 'https://zoom.us/j/9358038101?pwd=d0pwUHRDY0dxbngrU09PYll6UXpNZz09',
        },
        {
          dayOfWeek: 'thu',
          lessonName: 'Іноземна мова',
          lessonType: 'practice',
          teacher: 'Гаєва П.',
          url: 'https://us04web.zoom.us/j/2114671234?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09',
        },
        {
          dayOfWeek: 'fri',
          lessonName: "Комп'ютерна електроніка",
          lessonType: 'lecture',
          teacher: 'Шимкович В.',
          url: 'https://us04web.zoom.us/j/3428560060?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09',
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      secondLessonsRow: [
        {
          dayOfWeek: 'mon',
          // ...(selective === 'psychologyMent'
          //   ? selectives.psychologyMent.lecture
          //   : selective === 'digitalTransformation'
          //   ? selectives.digitalTransformation.lecture
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Вища математика',
          lessonType: 'practice',
          teacher: 'Поліщук А.',
          url: 'https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09',
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Інженерія ПЗ',
          lessonType: 'lecture',
          teacher: 'Васильєва М.',
          url: 'https://meet.google.com/fsn-gdmj-auu',
        },
        {
          dayOfWeek: 'thu',
          lessonName: "Комп'ютерна електроніка",
          lessonType: 'lab',
          teacher: 'Шимкович В.',
          url: 'https://us04web.zoom.us/j/3428560060?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09',
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Linux',
          lessonType: 'lecture',
          teacher: 'Роковий О.',
          url: 'https://bbb.comsys.kpi.ua/rooms/fjc-gl5-nzk-dfy',
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      thirdLessonsRow: [
        {
          dayOfWeek: 'mon',
          // ...(selective === 'citizensResponsibility'
          //   ? selectives.citizensResponsibility.lecture
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Теорія електрокіл',
          lessonType: 'practice',
          teacher: 'Лободзинський В.',
          url: 'https://meet.google.com/pou-dnak-dnb',
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Теорія електрокіл',
          lessonType: 'lecture',
          teacher: 'Лободзинський В.',
          url: 'https://meet.google.com/pou-dnak-dnb',
        },
        {
          dayOfWeek: 'thu',
          lessonName: 'Інженерія ПЗ',
          lessonType: 'practice',
          teacher: 'Васильєва М.',
          url: 'https://meet.google.com/fsn-gdmj-auu',
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Вища математика',
          lessonType: 'lecture',
          teacher: 'Голіченко І.',
          url: {
            password: 'C2qR3w',
            url: 'https://us02web.zoom.us/j/8067850314',
            needDialog: true,
            textInDialog: 'Після відкриття посилання вставте пароль'
          },
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      fourthLessonsRow: [
        {
          dayOfWeek: 'mon',
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Філософія',
          lessonType: 'practice',
          teacher: 'Руденко Т.',
          url: 'https://zoom.us/j/9358038101?pwd=d0pwUHRDY0dxbngrU09PYll6UXpNZz09',
        },
        {
          dayOfWeek: 'wed',
          ...emptyLesson
        },
        {
          dayOfWeek: 'thu',
          ...emptyLesson
        },
        {
          dayOfWeek: 'fri',
          ...emptyLesson
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ]
    },
    oddLessons: {
      firstLessonsRow: [
        {
          dayOfWeek: 'mon',
          // ...(selective === 'religion'
          //   ? selectives.religion.practice
          //   : selective === 'cities'
          //   ? selectives.cities.practice
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          // ...(selective === 'psychology'
          //   ? selectives.psychology.practice
          //   : selective === 'psychologyConflict'
          //   ? selectives.psychologyConflict.lecture
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Інженерія ПЗ',
          lessonType: 'lecture',
          teacher: 'Васильєва М.',
          url: 'https://meet.google.com/fsn-gdmj-auu',
        },
        {
          dayOfWeek: 'thu',
          lessonName: 'Іноземна мова',
          lessonType: 'practice',
          teacher: 'Гаєва П.',
          url: 'https://us04web.zoom.us/j/2114671234?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09',
        },
        {
          dayOfWeek: 'fri',
          lessonName: "Комп'ютерна електроніка",
          lessonType: 'lecture',
          teacher: 'Шимкович В.',
          url: 'https://us04web.zoom.us/j/3428560060?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09',
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      secondLessonsRow: [
        {
          dayOfWeek: 'mon',
          // ...(selective === 'psychologyMent'
          //   ? selectives.psychologyMent.lecture
          //   : selective === 'digitalTransformation'
          //   ? selectives.digitalTransformation.lecture
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Вища математика',
          lessonType: 'practice',
          teacher: 'Поліщук А.',
          url: 'https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09',
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Інженерія ПЗ',
          lessonType: 'lecture',
          teacher: 'Васильєва М.',
          url: 'https://meet.google.com/fsn-gdmj-auu',
        },
        {
          dayOfWeek: "thu",
          lessonName: "Linux",
          lessonType: "lab",
          teacher: "Алєнін О.",
          url: "https://us04web.zoom.us/j/4122071690?pwd=Qd3m5bDNCT7ywK2qEyLa4bZWPfofyS.1",
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Linux',
          lessonType: 'lecture',
          teacher: 'Роковий О.',
          url: 'https://bbb.comsys.kpi.ua/rooms/fjc-gl5-nzk-dfy',
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      thirdLessonsRow: [
        {
          dayOfWeek: 'mon',
          // ...(selective === 'citizensResponsibility'
          //   ? selectives.citizensResponsibility.practice
          //   : selective === 'psychologyMent'
          //   ? selectives.psychologyMent.practice
          //   : emptyLesson)
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Теорія електрокіл',
          lessonType: 'lab',
          teacher: 'Лободзинський В.',
          url: 'https://meet.google.com/pou-dnak-dnb',
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Теорія електрокіл',
          lessonType: 'lecture',
          teacher: 'Лободзинський В.',
          url: 'https://meet.google.com/pou-dnak-dnb',
        },
        {
          dayOfWeek: 'thu',
          ...emptyLesson
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Вища математика',
          lessonType: 'lecture',
          teacher: 'Голіченко І.',
          url: {
            password: 'C2qR3w',
            url: 'https://us02web.zoom.us/j/8067850314',
            needDialog: true,
            textInDialog: 'Після відкриття посилання вставте пароль'
          },
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      fourthLessonsRow: [
        {
          dayOfWeek: 'mon',
          ...emptyLesson
        },
        {
          dayOfWeek: 'tue',
          ...emptyLesson
        },
        {
          dayOfWeek: 'wed',
          ...emptyLesson
        },
        {
          dayOfWeek: 'thu',
          ...emptyLesson
        },
        {
          dayOfWeek: 'fri',
          ...emptyLesson
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ]
    }
  }
}

export default groupData
