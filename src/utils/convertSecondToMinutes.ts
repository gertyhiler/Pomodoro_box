export function convertSecondToMinutes (value: number): number {
  if (value > 60) {
    return Number((value / 60).toFixed())
  } else {
    return Number(value.toFixed()) / 100
  }
}
