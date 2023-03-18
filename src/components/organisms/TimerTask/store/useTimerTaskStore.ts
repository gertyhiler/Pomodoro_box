import { create } from 'zustand'
import { useSettingStore } from '../../../../store/setting/useSettingStore'
import { type IUseTimerTaskStore } from './IUseTimerTaskStore'

export const useTimerTaskStore = create<IUseTimerTaskStore>((set) => ({
  min: useSettingStore.getState().timeOneTomato,
  sec: 0,
  breakCount: 0,
  isRun: false,
  isBreak: false,
  isPause: false,
  id: null,
  increaseBreak: () => { set((state) => ({ breakCount: state.breakCount + 1 })) },
  resetBreak: () => { set({ breakCount: 0 }) },
  setMin: (min) => { set(() => ({ min })) },
  setSec: (sec) => { set(() => ({ sec })) },
  setId: (id) => { set(() => ({ id })) },
  setRun: (isRun) => { set(() => ({ isRun })) },
  setBreak: (isBreak) => { set(() => ({ isBreak })) },
  setPause: (isPause) => { set(() => ({ isPause })) }
}))
