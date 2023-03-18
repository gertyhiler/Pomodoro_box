export interface IUseTimerTaskStore {
  min: number
  sec: number
  breakCount: number
  isRun: boolean
  isBreak: boolean
  isPause: boolean
  id: any
  increaseBreak: () => void
  resetBreak: () => void
  setMin: (min: number) => void
  setSec: (sec: number) => void
  setId: (id: number) => void
  setRun: (isRun: boolean) => void
  setBreak: (isBreak: boolean) => void
  setPause: (isPause: boolean) => void
}
