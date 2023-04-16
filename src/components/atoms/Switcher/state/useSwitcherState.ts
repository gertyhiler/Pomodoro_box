import { create } from 'zustand'
import { type IUseSwitcherState } from './IUseSwitcherState'

export const useSwitcherState = create<IUseSwitcherState>((set) => ({
  isLight: true,
  setIsLight: (isLight) => { set(() => ({ isLight })) }
}))
