import { useTimerTaskStore } from '../components/organisms/TimerTask/store/useTimerTaskStore'
import { useAnalyticStore } from '../store/analytic/useAnalyticStore'

export function createNewTomato (): void {
  useAnalyticStore.getState().addTomato(
    {
      startTime: useTimerTaskStore.getState().min * 60,
      endTime: useTimerTaskStore.getState().min * 60,
      isCompleted: false
    }
  )
}
