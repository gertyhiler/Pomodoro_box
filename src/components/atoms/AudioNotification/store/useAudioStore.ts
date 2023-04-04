import { create } from 'zustand'
import { type IUseAudioStore } from './IUseAudioStore'

export const useAudioStore = create<IUseAudioStore>((set) => ({
  isPlay: false,

  setIsPlay: () => {
    set((state) => {
      if (!state.isPlay) {
        setTimeout(useAudioStore.getState().setIsPlay, 1300)
      }
      return { isPlay: !state.isPlay }
    })
  }
}))
