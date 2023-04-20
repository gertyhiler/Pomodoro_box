export function convertMinutesTomatoToString (minutes: number): string {
  if (minutes >= 0.60) {
    minutes *= 100; minutes /= 60
    const hours = (minutes / 60) ^ 0
    let result: string

    if (hours !== 0) {
      let m: number | string = minutes % 60
      if (m < 10) m = `0${m}`
      result = `${hours}ч ${m} м`
    } else {
      result = `${minutes.toFixed()} мин`
      return result
    }
  } else {
    return `${(minutes * 100).toFixed()} сек`
  }
  return `${minutes * 100} сек`
}
