import { create } from 'zustand'
import { type IUseCurrentTaskState } from './IUseCurrentTaskState'
import { type Task } from '../../../../store/tasks/Task'

export const useCurrentTaskState = create<IUseCurrentTaskState>((set) => ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  currentTask: {} as Task,
  setCurrentTask: (task) => { set(() => ({ currentTask: task })) }
}))
