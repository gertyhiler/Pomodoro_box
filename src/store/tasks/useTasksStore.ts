import { create } from 'zustand'
import { type IUseTasksStore } from './IUseTasksStore'
import { type Task } from './Task'
import { persist, createJSONStorage } from 'zustand/middleware'
import produce from 'immer'

export const useTasksStore = create(
  persist<IUseTasksStore>(
    (set, get) => ({
      tasks: [] as Task[],

      addTask: (task) => { set((state) => ({ tasks: [...state.tasks, task] })) },
      findTask: (key) => get().tasks[key],
      increaseTomatoCount: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[key].tomatoTimerCount++
        }))
      },
      decreaseTomatoCount: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[key].tomatoTimerCount--
        }))
      },
      setEditTask: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[key].isEditable = !state.tasks[key].isEditable
        }))
      },
      editTask: (key, value) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[key].title = value
        }))
      },
      deleteTask: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks.splice(key, 1)
        }))
      },
      setCompletedTask: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[key].completedTomato++
        }))
      }

    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
