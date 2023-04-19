export function convertTimeToString (time: number): string {
  if (time < 10 && time >= 0) {
    return `0${time}`
  } else {
    return String(time)
  }
}
