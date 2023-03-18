export function createArrayWeekDay (weekModify: number = 0): string[] {
  const currentDate = new Date()
  const weekDay = currentDate.getDay()
  const startWeekDay = (currentDate.getDate() + (1 - weekDay)) - weekModify // 23-2-14
  return [
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay}`,
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + 1}`,
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + 2}`,
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + 3}`,
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + 4}`,
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + 5}`,
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + 6}`
  ]
}
