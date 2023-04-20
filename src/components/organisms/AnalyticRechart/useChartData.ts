import { useMemo } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { data } from './data'
export function useChartData (): Array<{ name: string, uv: number }> {
  const weekDays = useAnalyticChart(state => state.weekDays)

  const result = data
  useMemo(() => {
    weekDays.map((day) => {
      return typeof useAnalyticStore.getState().state[day] !== 'undefined'
        ? useAnalyticStore.getState().state[day].tomato.reduce((acc, tomato) => acc + (tomato.startTime - tomato.endTime), 0)
        : 0
    }).forEach((dayValue, index): void => { data[index].uv = dayValue })
  }, [weekDays])

  return result
}
