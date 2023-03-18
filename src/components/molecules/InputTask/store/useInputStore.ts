import { create } from 'zustand'
import { type IUseInputStore } from './IUseInputStore'

export const useInputStore = create<IUseInputStore>((set) => ({
  value: '',

  setValue: (text) => { set({ value: text }) }
}))
