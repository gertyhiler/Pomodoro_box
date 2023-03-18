export interface IUseSettingStore {
  timeOneTomato: number
  timeShortBreak: number
  timeLongBreak: number

  setNewTimeOneTomato: (minutes: number) => void
  setNewTimeShortBreak: (minutes: number) => void
  setNewLongBreak: (minutes: number) => void
}
