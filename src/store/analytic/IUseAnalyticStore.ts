export interface IUseAnalyticStore {
  state: Record<string, IAnalyticDay>
  pauseStartTime: Date | null

  addTomato: (tomato: ITomato) => void
  increaseStopCount: () => void
  increaseTomatoCount: () => void
  increasePauseTime: (time: number) => void
  setEndTime: (time: number) => void
  increaseStartTime: () => void
  setPauseStartTime: (time: Date | null) => void
  setCompletedTomato: () => void

}

export interface IAnalyticDay {
  tomato: ITomato[]
  pauseTime: number
  stopCount: number
  completedTomatoCount: number
}

export interface ITomato {
  isCompleted: boolean
  startTime: number
  endTime: number
}
