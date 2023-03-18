export function convertMinutesTomatoToString (minutes: number): string {
  const hours = (minutes / 60) ^ 0
  let result: string

  if (hours !== 0) {
    let m: number | string = minutes % 60
    if (m < 10) m = `0${m}`
    result = `${hours}ч ${m} м`
  } else {
    result = `${minutes} м`
  }

  return result
}
