import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { type IUseSettingStore } from './IUseSettingStore'

export const useSettingStore = create(persist<IUseSettingStore>((set) => ({
  timeOneTomato: 1,
  timeShortBreak: 2,
  timeLongBreak: 3,

  setNewTimeOneTomato: (minutes) => { set({ timeOneTomato: minutes }) },
  setNewTimeShortBreak: (minutes) => { set({ timeShortBreak: minutes }) },
  setNewLongBreak: (minutes) => { set({ timeLongBreak: minutes }) }
}),
{
  name: 'app-setting',
  storage: createJSONStorage(() => localStorage)
}
))
