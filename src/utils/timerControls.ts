import { useTimerTaskStore } from '../components/organisms/TimerTask/store/useTimerTaskStore'
import { useAnalyticStore } from '../store/analytic/useAnalyticStore'
import { useSettingStore } from '../store/setting/useSettingStore'
import { useTasksStore } from '../store/tasks/useTasksStore'
import { createNewTomato } from './createNewAnalyticTomato'

export function startTimer (): void {
  if (typeof useTasksStore.getState().tasks[0] === 'undefined') return
  if (!useTimerTaskStore.getState().isPause && !useTimerTaskStore.getState().isBreak) {
    createNewTomato()
  }
  if (useTimerTaskStore.getState().isPause) {
    const startPauseTime = useAnalyticStore.getState().pauseStartTime
    if (startPauseTime !== null) {
      useAnalyticStore.getState().increasePauseTime(((new Date()).valueOf() - (startPauseTime).valueOf()) / 1000)
    }
  }

  if (!isNaN(useTimerTaskStore.getState().id)) {
    clearInterval(useTimerTaskStore.getState().id)
  }

  useTimerTaskStore.getState().setPause(false)

  const idTimer = setInterval(() => {
    let sec = useTimerTaskStore.getState().sec
    let min = useTimerTaskStore.getState().min

    if (useTimerTaskStore.getState().id !== idTimer) {
      useTimerTaskStore.getState().setId(idTimer)
    }

    useTimerTaskStore.getState().setRun(true)

    if (min === 0 && sec === 0) {
      if (!useTimerTaskStore.getState().isBreak) {
        useTasksStore.getState().setCompletedTask(0)
        if (useTasksStore.getState().tasks[0].completedTomato >= useTasksStore.getState().tasks[0].tomatoTimerCount) {
          useTasksStore.getState().deleteTask(0)
        }
        useAnalyticStore.getState().setEndTime(min)
        useAnalyticStore.getState().setCompletedTomato()
        useAnalyticStore.getState().increaseTomatoCount()
      }
      useTimerTaskStore.getState().setBreak(!useTimerTaskStore.getState().isBreak)
      sec--
      useTimerTaskStore.getState().setSec(sec)

      if (useTimerTaskStore.getState().isBreak) {
        switch (useTimerTaskStore.getState().breakCount) {
          case 4:
            useTimerTaskStore.getState().resetBreak()
            min = useSettingStore.getState().timeLongBreak
            sec = 0
            useTimerTaskStore.getState().setMin(min)
            useTimerTaskStore.getState().setSec(sec)
            return
          default:
            useTimerTaskStore.getState().increaseBreak()
            min = useSettingStore.getState().timeShortBreak
            useTimerTaskStore.getState().setMin(min)
            sec = 0
            useTimerTaskStore.getState().setSec(sec)
            return
        }
      } else {
        if (typeof useTasksStore.getState().tasks[0] === 'undefined') {
          clearInterval(useTimerTaskStore.getState().id)
          useTimerTaskStore.getState().setMin(useSettingStore.getState().timeOneTomato)
          useTimerTaskStore.getState().setSec(0)
          useTimerTaskStore.getState().setRun(false)
          useTimerTaskStore.getState().setBreak(false)
          useTimerTaskStore.getState().setPause(false)
          useAnalyticStore.getState().setPauseStartTime(null)
          return
        }
        min = useSettingStore.getState().timeOneTomato
        sec = 0
        useTimerTaskStore.getState().setMin(min)
        useTimerTaskStore.getState().setSec(sec)
        createNewTomato()
        return
      }
    }
    if (sec === 0) {
      sec = 60
      useTimerTaskStore.getState().setSec(60)
      min--
      useTimerTaskStore.getState().setMin(min)
      return
    }
    sec--
    useTimerTaskStore.getState().setSec(sec)
  }, 1000)
}

export function pauseTimer (): void {
  clearInterval(useTimerTaskStore.getState().id)
  useAnalyticStore.getState().setPauseStartTime(new Date())
  useTimerTaskStore.getState().setPause(true)
}

export function stopTimer (): void {
  if (useTimerTaskStore.getState().isBreak && useTimerTaskStore.getState().breakCount < 4) {
    useTimerTaskStore.getState().increaseBreak()
  } else if (useTimerTaskStore.getState().isBreak && useTimerTaskStore.getState().breakCount === 4) {
    useTimerTaskStore.getState().resetBreak()
  }
  if (!useTimerTaskStore.getState().isPause && !useTimerTaskStore.getState().isBreak) {
    useAnalyticStore.getState().setEndTime((useTimerTaskStore.getState().min * 60) + useTimerTaskStore.getState().sec)
    useAnalyticStore.getState().increaseStopCount()
  }
  clearInterval(useTimerTaskStore.getState().id)
  useTimerTaskStore.getState().setMin(useSettingStore.getState().timeOneTomato)
  useTimerTaskStore.getState().setSec(0)
  useTimerTaskStore.getState().setRun(false)
  useTimerTaskStore.getState().setBreak(false)
  useTimerTaskStore.getState().setPause(false)
  useAnalyticStore.getState().setPauseStartTime(null)
}
export function completedTask (): void {
  clearInterval(useTimerTaskStore.getState().id)
  useAnalyticStore.getState().setEndTime((useTimerTaskStore.getState().min * 60) + useTimerTaskStore.getState().sec)
  useAnalyticStore.getState().setCompletedTomato()
  useAnalyticStore.getState().increaseTomatoCount()
  useTimerTaskStore.getState().setMin(useSettingStore.getState().timeOneTomato)
  useTasksStore.getState().setCompletedTask(0)
  if (useTasksStore.getState().tasks[0].completedTomato >= useTasksStore.getState().tasks[0].tomatoTimerCount) {
    useTasksStore.getState().deleteTask(0)
  }
  useTimerTaskStore.getState().setSec(0)
  useTimerTaskStore.getState().setRun(false)
  useTimerTaskStore.getState().setBreak(false)
  useTimerTaskStore.getState().setPause(false)
  useAnalyticStore.getState().setPauseStartTime(null)
}
