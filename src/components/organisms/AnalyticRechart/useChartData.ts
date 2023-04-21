import { useMemo } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { data } from './data'
import { calculateSumSecondsOnCurrentWeekDay } from '../../../utils/calculateSumSecondsOnCurrentWeekDay'
export function useChartData (): Array<{ name: string, uv: number }> {
  const weekDays = useAnalyticChart(state => state.weekDays)

  const result = data
  useMemo(() => {
    weekDays.map((day) => {
      return typeof useAnalyticStore.getState().state[day] !== 'undefined'
        ? calculateSumSecondsOnCurrentWeekDay(day)
        : 0
    }).forEach((dayValue, index): void => { data[index].uv = dayValue })
  }, [weekDays])

  return result
}
