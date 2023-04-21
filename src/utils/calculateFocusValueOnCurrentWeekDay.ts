import { useAnalyticStore } from '../store/analytic/useAnalyticStore'
import { calculateSumSecondsOnCurrentWeekDayAllTomato } from './calculateSumSecondsOnCurrentWeekDay'

export function calculateFocusValueOnCurrentWeekDay (day: string): string {
  return (((useAnalyticStore.getState().state[day].tomato.reduce((acc, item) => item.isCompleted ? acc + (item.startTime - item.endTime) : acc + 0, 0)) / ((calculateSumSecondsOnCurrentWeekDayAllTomato(day)) + Number(useAnalyticStore.getState().state[day].pauseTime.toFixed()))) * 100).toFixed()
}
