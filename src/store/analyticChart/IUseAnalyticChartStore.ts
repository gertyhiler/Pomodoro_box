export interface IUseAnalyticChartStore {
  weekDays: string[]
  currentWeekDay: string
  setLastWeekDays: () => void
  setTwoLastWeekDays: () => void
  setCurrentWeek: () => void
  setCurrentWeekDay: (index: number) => void
}
