import GROUP32 from './io-32'
import GROUP35 from './io-35'
import GROUP42 from './io-42'

import LOGO32 from './chat_logo_io-32.jpg'
import LOGO35 from './chat_logo_io-35.jpg'
import LOGO42 from './chat_logo_io-42.jpg'

const groupDataList = [
  {
    group: GROUP32.group,
    data: GROUP32,
    logo: LOGO32
  },
  {
    group: GROUP35.group,
    data: GROUP35,
    logo: LOGO35
  },
  {
    group: GROUP42.group,
    data: GROUP42,
    logo: LOGO42
  }
]

// const examsData = {
//   [GROUP32]: {
//     data: examGROUP32,
//     exams: exams32,
//     allowPwaZoom: true,
//   },
// };

export { groupDataList }
