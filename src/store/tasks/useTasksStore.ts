import { create } from 'zustand'
import { type IUseTasksStore } from './IUseTasksStore'
import { type Task } from './Task'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import produce from 'immer'
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
        set(produce<IUseTasksStore>((state) => {
          state.tasks[get().tasks.findIndex(value => value.id === key)].tomatoTimerCount++
        }))
      },
      decreaseTomatoCount: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[get().tasks.findIndex(value => value.id === key)].tomatoTimerCount--
        }))
      },
      setEditTask: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[get().tasks.findIndex(value => value.id === key)].isEditable = !state.tasks[get().tasks.findIndex(value => value.id === key)].isEditable
        }))
      },
      editTask: (key, value) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[get().tasks.findIndex(value => value.id === key)].title = value
        }))
      },
      // deleteTask: (key) => {
      //   set(produce<IUseTasksStore>((state) => {
      //     // const indexDeletingItem = get().tasks.findIndex(value => value.id === key)
      //     for (let i = 0; i < get().tasks.length; i++) {
      //       if (get().tasks[i].order > 1) {
      //         console.log('state.tasks[i].order: ', state.tasks[i].order)
      //         state.tasks[i].order--
      //       }
      //     }
      //     // state.tasks.splice((get().tasks.findIndex(value => value.id === key)), 1)
      //   }))
      // },
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
      setCompletedTask: (key) => {
        set(produce<IUseTasksStore>((state) => {
          state.tasks[get().tasks.findIndex(value => value.id === key)].completedTomato++
        }))
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
