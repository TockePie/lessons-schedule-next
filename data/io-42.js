const emptyLesson = {
  lessonName: null,
  lessonType: null,
  teacher: null,
  url: null
}

const groupData = {
  group: 'ІО-42',
  id: 'b541',
  allowSelectives: false,
  lessons: {
    evenLessons: {
      firstLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: 'Історія НіТ',
          lessonType: 'lecture',
          teacher: 'Костилєва С.',
          url: 'https://meet.google.com/dbi-dupj-xxa'
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
          lessonName: 'Програмування',
          lessonType: 'lecture',
          teacher: 'Новотарський М.',
          url: 'https://us02web.zoom.us/j/83534558798?pwd=oQ4rXLhbrij5UApWxuyGeQuPUer5v6.1'
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      secondLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: "Комп'ютерна логіка",
          lessonType: 'lecture',
          teacher: 'Жабін В.',
          url: 'https://bbb.ugrid.org/b/val-yrg-fed-68x'
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Історія НіТ',
          lessonType: 'practice',
          teacher: 'Костилєва С.',
          url: 'https://meet.google.com/dbi-dupj-xxa'
        },
        {
          dayOfWeek: 'wed',
          ...emptyLesson
        },
        {
          dayOfWeek: 'thu',
          lessonName: "Основи здоров'я",
          lessonType: 'practice',
          teacher: 'Парахонько В.',
          url: 'https://us05web.zoom.us/j/7875142930?pwd=N0NwbUNBOXVCZ1YybWtpOEMvampwQT09'
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Структури даних',
          lessonType: 'lecture',
          teacher: 'Сергієнко А.',
          url: 'https://bbb.comsys.kpi.ua/b/ana-gca-2xm'
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      thirdLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: 'Програмування',
          lessonType: 'lecture',
          teacher: 'Новотарський М.',
          url: 'https://us02web.zoom.us/j/83534558798?pwd=oQ4rXLhbrij5UApWxuyGeQuPUer5v6.1'
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Програмування',
          lessonType: 'lab',
          teacher: 'Пономаренко А.',
          url: 'https://us05web.zoom.us/j/7089075754?pwd=TWRlZmxyVlFiTWU1UGlVVU1XcFE0Zz09'
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Вища математика',
          lessonType: 'practice',
          teacher: 'Новікова Ю.',
          url: 'https://meet.google.com/niu-apqw-tma'
        },
        {
          dayOfWeek: 'thu',
          lessonName: "Комп'ютерна логіка",
          lessonType: 'lab',
          teacher: 'Верба О.',
          url: 'https://us04web.zoom.us/j/7382214783?pwd=RnZ3SWgwK1JoVkZtNndnKzdPZjFGdz09'
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Вища математика',
          lessonType: 'lecture',
          teacher: 'Овчар Р.',
          url: 'https://us02web.zoom.us/j/84532519615?pwd=eDFRMWtJTkxKcklpa1JUSjFmZHNyUT09'
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      fourthLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: 'Лінійна алгебра',
          lessonType: 'lecture',
          teacher: 'Пелехата О.',
          url: 'https://us02web.zoom.us/j/84694279262?pwd=PbZPlwOJJd5Eb7Fhqr2IZBeeYcmj39.1'
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
          lessonName: 'Іноземна мова',
          lessonType: 'practice',
          teacher: 'Заворотна О.',
          url: 'https://us04web.zoom.us/j/71989391876?pwd=P2njC0D6jks2SMnHVPbXxOXP92zPox.1'
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Вища математика',
          lessonType: 'lecture',
          teacher: 'Овчар Р.',
          url: 'https://us02web.zoom.us/j/84532519615?pwd=eDFRMWtJTkxKcklpa1JUSjFmZHNyUT09'
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
          lessonName: "Основи здоров'я",
          lessonType: 'lecture',
          teacher: 'Хіміч І.',
          url: 'https://us02web.zoom.us/j/4387354937?pwd=R3R3NkpWU09GY3kvanZBeEcrQWZoUT09'
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
          lessonName: 'Програмування',
          lessonType: 'lecture',
          teacher: 'Новотарський М.',
          url: 'https://us02web.zoom.us/j/83534558798?pwd=oQ4rXLhbrij5UApWxuyGeQuPUer5v6.1'
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      secondLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: "Комп'ютерна логіка",
          lessonType: 'lecture',
          teacher: 'Жабін В.',
          url: 'https://bbb.ugrid.org/b/val-yrg-fed-68x'
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Лінійна алгебра',
          lessonType: 'practice',
          teacher: 'Мокану Я.',
          url: 'https://us05web.zoom.us/j/88696444291?pwd=7TJi1b2HkaqB1kMfy34SdrbH7U5yS4.1'
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
          lessonName: 'Структури даних',
          lessonType: 'lecture',
          teacher: 'Сергієнко А.',
          url: 'https://bbb.comsys.kpi.ua/b/ana-gca-2xm'
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      thirdLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: 'Програмування',
          lessonType: 'lecture',
          teacher: 'Новотарський М.',
          url: 'https://us02web.zoom.us/j/83534558798?pwd=oQ4rXLhbrij5UApWxuyGeQuPUer5v6.1'
        },
        {
          dayOfWeek: 'tue',
          lessonName: 'Програмування',
          lessonType: 'lab',
          teacher: 'Пономаренко А.',
          url: 'https://us05web.zoom.us/j/7089075754?pwd=TWRlZmxyVlFiTWU1UGlVVU1XcFE0Zz09'
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Вища математика',
          lessonType: 'practice',
          teacher: 'Новікова Ю.',
          url: 'https://meet.google.com/niu-apqw-tma'
        },
        {
          dayOfWeek: 'thu',
          lessonName: 'Структури даних',
          lessonType: 'lab',
          teacher: 'Сергієнко А.',
          url: 'https://us02web.zoom.us/j/82436177873?pwd=ccbVEyQKfp0c5sxYwqPceFwKDPleov.1'
        },
        {
          dayOfWeek: 'fri',
          lessonName: 'Вища математика',
          lessonType: 'lecture',
          teacher: 'Овчар Р.',
          url: 'https://us02web.zoom.us/j/84532519615?pwd=eDFRMWtJTkxKcklpa1JUSjFmZHNyUT09'
        },
        {
          dayOfWeek: 'sat',
          ...emptyLesson
        }
      ],
      fourthLessonsRow: [
        {
          dayOfWeek: 'mon',
          lessonName: 'Лінійна алгебра',
          lessonType: 'lecture',
          teacher: 'Пелехата О.',
          url: 'https://us02web.zoom.us/j/84694279262?pwd=PbZPlwOJJd5Eb7Fhqr2IZBeeYcmj39.1'
        },
        {
          dayOfWeek: 'tue',
          ...emptyLesson
        },
        {
          dayOfWeek: 'wed',
          lessonName: 'Вища математика',
          lessonType: 'practice',
          teacher: 'Новікова Ю.',
          url: 'https://meet.google.com/niu-apqw-tma'
        },
        {
          dayOfWeek: 'thu',
          lessonName: 'Іноземна мова',
          lessonType: 'practice',
          teacher: 'Заворотна О.',
          url: 'https://us04web.zoom.us/j/71989391876?pwd=P2njC0D6jks2SMnHVPbXxOXP92zPox.1'
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
