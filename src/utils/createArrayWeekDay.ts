export function createArrayWeekDay (weekModify: number = 0): string[] {
  const currentDate = new Date()
  const weekDay = currentDate.getDay()
  const startWeekDay = (currentDate.getDate() + (1 - weekDay)) - weekModify // 23-2-14
  const result: string[] = [] as string[]
  for (let i = 0; i < 7; i++) {
    result.push(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${startWeekDay + i}`)
  }
  return result
}
