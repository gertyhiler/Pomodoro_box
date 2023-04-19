import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createArrayWeekDay } from '../../utils/createArrayWeekDay'
import { type IUseAnalyticChartStore } from './IUseAnalyticChartStore'

export const useAnalyticChart = create(devtools<IUseAnalyticChartStore>((set) => ({
  weekDays: createArrayWeekDay(),
  currentWeekDay: '',

  setCurrentWeek: () => { set(() => ({ weekDays: createArrayWeekDay(0) })) },
  setLastWeekDays: () => { set(() => ({ weekDays: createArrayWeekDay(7) })) },
  setTwoLastWeekDays: () => { set(() => ({ weekDays: createArrayWeekDay(14) })) },
  setCurrentWeekDay: (index) => {
    set((state) => {
      if (state.currentWeekDay === state.weekDays[index]) return state
      return { currentWeekDay: state.weekDays[index] }
    })
  }
})))
