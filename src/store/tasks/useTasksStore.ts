import { create } from 'zustand'
import { type IUseTasksStore } from './IUseTasksStore'
import { type Task } from './Task'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { v4 } from 'uuid'

export const useTasksStore = create(devtools(
  persist<IUseTasksStore>(
    (set, get) => ({
      tasks: [] as Task[],

      addTask: (title) => {
        set((state) => ({
          tasks: [...state.tasks, {
            id: v4(),
            order: get().tasks.length + 1,
            title,
            tomatoTimerCount: 1,
            isEditable: false,
            completedTomato: 0
          }]
        }))
      },
      findTask: (key) => get().tasks[get().tasks.findIndex(value => value.id === key)],

      increaseTomatoCount: (key) => {
        set((state) => {
          return {
            tasks: [...state.tasks].map((task, index) => {
              if (task.id === key) {
                return { ...task, tomatoTimerCount: state.tasks[index].tomatoTimerCount + 1 }
              }
              return task
            })
          }
        })
      },
      decreaseTomatoCount: (key) => {
        set((state) => {
          return {
            tasks: [...state.tasks].map((task, index) => {
              if (task.id === key) {
                return { ...task, tomatoTimerCount: state.tasks[index].tomatoTimerCount - 1 }
              }
              return task
            })
          }
        })
      },
      setEditTask: (key) => {
        set((state) => {
          return {
            tasks: [...state.tasks].map((task, index) => {
              if (task.id === key) {
                return { ...task, isEditable: !state.tasks[index].isEditable }
              }
              return task
            })
          }
        })
      },
      editTask: (key, value) => {
        set((state) => {
          return {
            tasks: [...state.tasks].map((task) => {
              if (task.id === key) {
                return { ...task, title: value }
              }
              return task
            })
          }
        })
      },
      deleteTask: (key) => {
        set((state) => {
          return {
            tasks: [...state.tasks]
              .filter((task) => task.id !== key)
              // .map((task) => {
              //   if (task.order > 1) task.order--
              //   return task
              // })
          }
        })
      },
      // setCompletedTask: (key) => {
      //   set(produce<IUseTasksStore>((state) => {
      //     state.tasks[get().tasks.findIndex(value => value.id === key)].completedTomato++
      //   }))
      // },
      setCompletedTask: (key) => {
        set((state) => {
          return {
            tasks: [...state.tasks].map((task, index) => {
              if (task.id === key) {
                return { ...task, completedTomato: state.tasks[index].completedTomato + 1 }
              }
              return task
            })
          }
        })
      },
      setNewOrder: (key, order) => {
        set((state) => {
          return {
            tasks: [...state.tasks].map((task) => {
              if (task.id === key) {
                return { ...task, order }
              }
              return task
            })
          }
        })
      }
    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => localStorage)
    }
  ))
)
