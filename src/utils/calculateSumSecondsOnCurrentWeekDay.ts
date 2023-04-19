import { useAnalyticStore } from '../store/analytic/useAnalyticStore'

export function calculateSumSecondsOnCurrentWeekDay (day: string): number {
  return useAnalyticStore.getState().state[day].tomato.reduce((acc, item) => (acc + (item.startTime - item.endTime)), 0)
}
