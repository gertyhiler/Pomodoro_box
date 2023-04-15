import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStringDate } from '../../utils/createStringDate'
import { type IAnalyticDay, type IUseAnalyticStore } from './IUseAnalyticStore'
import produce from 'immer'

export const useAnalyticStore = create(
  persist<IUseAnalyticStore>(
    (set, get) => ({
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      state: {} as Record<string, IAnalyticDay>,
      pauseStartTime: null,
      addTomato: (tomato) => {
        const day = createStringDate()
        set(produce<IUseAnalyticStore>((store) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (!store.state[day]) {
            store.state[day] = {
              tomato: [],
              pauseTime: 0,
              stopCount: 0,
              completedTomatoCount: 0
            }
          }
          store.state[day].tomato.push(tomato)
        }))
      },
      increaseStopCount: () => {
        const day = createStringDate()
        set(produce<IUseAnalyticStore>((store) => {
          store.state[day].stopCount++
        }))
      },
      increaseTomatoCount: () => {
        const day = createStringDate()
        set(produce<IUseAnalyticStore>((store) => {
          store.state[day].completedTomatoCount++
        }))
      },
      increasePauseTime: (time) => {
        const day = createStringDate()
        const currentTime = isNaN(get().state[day].pauseTime) ? 0 : get().state[day].pauseTime
        set(produce<IUseAnalyticStore>((store) => { store.state[day].pauseTime = currentTime + time }))
      },
      setEndTime: (time) => {
        const day = createStringDate()
        set(produce<IUseAnalyticStore>((store) => {
          store.state[day].tomato[store.state[day].tomato.length - 1].endTime = time
        }))
      },
      increaseStartTime: () => {
        const day = createStringDate()
        set(produce<IUseAnalyticStore>((store) => {
          store.state[day].tomato[store.state[day].tomato.length - 1].startTime += 60
        }))
      },
      setCompletedTomato: () => {
        const day = createStringDate()
        set(produce<IUseAnalyticStore>((store) => {
          store.state[day].tomato[store.state[day].tomato.length - 1].isCompleted = true
        }))
      },
      setPauseStartTime: (time) => {
        set(produce<IUseAnalyticStore>((state) => {
          state.pauseStartTime = time
        }))
      }
    }),
    {
      name: 'analytic-storage',
      storage: createJSONStorage(() => localStorage),
      version: 0
    }
  )
)
