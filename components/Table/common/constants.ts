type TimeRange = { start: string; end: string }

const rowIndices: [string, TimeRange][] = [
  ['firstLessonsRow', { start: '08:30', end: '10:05' }],
  ['secondLessonsRow', { start: '10:25', end: '12:00' }],
  ['thirdLessonsRow', { start: '12:20', end: '13:55' }],
  ['fourthLessonsRow', { start: '14:10', end: '15:50' }],
  ['fifthLessonsRow', { start: '16:10', end: '17:40' }],
  ['sixthLessonsRow', { start: '18:30', end: '20:00' }],
  ['seventhLessonsRow', { start: '20:20', end: '21:50' }]
]

const rowIndicesMap: { [key: string]: string } = {}
rowIndices.forEach(([rowName, timeRange]: [string, TimeRange]) => {
  const rangeKey = `${timeRange.start}-${timeRange.end}`
  rowIndicesMap[rangeKey] = rowName
})

export type { TimeRange }
export default rowIndices
