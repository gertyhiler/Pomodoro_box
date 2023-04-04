import { useAudioStore } from '../components/atoms/AudioNotification/store'
import { useTimerTaskStore } from '../components/organisms/TimerTask/store/useTimerTaskStore'
import { useAnalyticStore } from '../store/analytic/useAnalyticStore'
import { useSettingStore } from '../store/setting/useSettingStore'
import { useTasksStore } from '../store/tasks/useTasksStore'
import { createNewTomato } from './createNewAnalyticTomato'

export function startTimer (): void {
  if (typeof useTasksStore.getState().tasks[0] === 'undefined') return // Если нет задач, таймер не запускается
  if (!useTimerTaskStore.getState().isPause && !useTimerTaskStore.getState().isBreak) { // Если таймер работает в режиме задачи, создаем новую запись в аналитику
    createNewTomato()
  }
  if (useTimerTaskStore.getState().isPause) { // Если таймер встал на паузу
    const startPauseTime = useAnalyticStore.getState().pauseStartTime // Получаем время начала паузы из стейта
    if (startPauseTime !== null) { // Если время начала паузы там есть
      useAnalyticStore.getState().increasePauseTime(((new Date()).valueOf() - (startPauseTime).valueOf()) / 1000) // Вычисляем разницу текущего времени и времени начала паузы и прибавляем к значению в стейте
    }
  }

  if (!isNaN(useTimerTaskStore.getState().id)) { // Если в стейте уже есть запись идентификатора таймера
    clearInterval(useTimerTaskStore.getState().id) // Очистить таймер с этим идентификатором
  }

  useTimerTaskStore.getState().setPause(false) // Режим работы - не пауза

  const idTimer = setInterval(() => { // основная функция таймера, отрабатывает раз в секунду
    let sec = useTimerTaskStore.getState().sec // сохраняем секунды из стейта
    let min = useTimerTaskStore.getState().min // сохраняем минуты из стейта

    if (useTimerTaskStore.getState().id !== idTimer) { // Если в стейте есть отличающийся от текущего идентификатор таймера
      useTimerTaskStore.getState().setId(idTimer) // Записать текущий идентификатор в стейт
    }

    useTimerTaskStore.getState().setRun(true) // Режим работы - Время идет

    if (min === 0 && sec === 0) { // Если таймер дошел до нуля
      useAudioStore.getState().setIsPlay() // Проиграть музыку
      if (!useTimerTaskStore.getState().isBreak) { // если таймер считает время задачи
        useTasksStore.getState().setCompletedTask(0) // Засчитать помидорку в задачу
        if (useTasksStore.getState().tasks[0].completedTomato >= useTasksStore.getState().tasks[0].tomatoTimerCount) { // Если учтенные помидорки равны или превышают установленное значение для задачи
          useTasksStore.getState().deleteTask(0) // Удалить эту задачу из списка
        }
        useAnalyticStore.getState().setEndTime(min) // Записать в аналитику минуты окончания задачи
        useAnalyticStore.getState().setCompletedTomato() // Записать в аналитику информацию о выполнении помидорки
        useAnalyticStore.getState().increaseTomatoCount() // Прибавить в аналитике счетчик выполненных сегодня помидорок
      }
      useTimerTaskStore.getState().setBreak(!useTimerTaskStore.getState().isBreak) // Инвертировать значение перерыва
      sec-- // Отнять секунду у таймера
      useTimerTaskStore.getState().setSec(sec) // Обновить значение секунд в стейте

      if (useTimerTaskStore.getState().isBreak) { // Если таймер считает время перерыва
        if (useTimerTaskStore.getState().breakCount === 4) { // Если количество перерывов 4
          useTimerTaskStore.getState().resetBreak() // Обнулить количество перерывов
          min = useSettingStore.getState().timeLongBreak // Установить таймер на время длинного перерыва
          sec = 0
          updateStateTimer(min, sec) // Обновить стейт таймера
        } else { // Если количество перерывов меньше 4
          useTimerTaskStore.getState().increaseBreak() // Увеличить количество перерывов
          min = useSettingStore.getState().timeShortBreak // Установить таймер на время короткого перерыва
          sec = 0
          updateStateTimer(min, sec) // Обновить стейт таймера
          return
        }
      } else { // Если таймер считает время задачи
        if (typeof useTasksStore.getState().tasks[0] === 'undefined') { // Если задачи не существует
          resetTimer() // Сбросить таймер
          return
        }
        min = useSettingStore.getState().timeOneTomato // Обновить таймер значением одной помидорки
        sec = 0
        updateStateTimer(min, sec) // Обновить стейт таймера
        createNewTomato() // Создать новую помидорку в аналитике
        return
      }
    }
    if (sec === 0) { // Если минута подошла к концу
      sec = 60 // Обновить значение секунд
      min-- // Отнять одну минуту
      updateStateTimer(min, sec) // Обновить стейт таймера
      return
    }
    sec--
    useTimerTaskStore.getState().setSec(sec)
  }, 1000)
}

export function pauseTimer (): void { // Функция паузы таймера
  clearInterval(useTimerTaskStore.getState().id) // Удалить интервал по идентификатору из стейта таймера
  useAnalyticStore.getState().setPauseStartTime(new Date()) // Записать в аналитику время начала паузы
  useTimerTaskStore.getState().setPause(true) // Установить таймер в режим паузы
}

export function stopTimer (): void { // Остановка таймера
  if (useTimerTaskStore.getState().isBreak && useTimerTaskStore.getState().breakCount < 4) { // Если таймер остановился в перерыве и количество перерывов меньше 4
    useTimerTaskStore.getState().increaseBreak() // Увеличить значение перерывов
  } else if (useTimerTaskStore.getState().isBreak && useTimerTaskStore.getState().breakCount === 4) {
    useTimerTaskStore.getState().resetBreak() // Обнулить перерывы
  }
  if (!useTimerTaskStore.getState().isPause && !useTimerTaskStore.getState().isBreak) { // Если остановка произошла когда таймер считал время задачи
    useAnalyticStore.getState().setEndTime(getTimeStoppedTaskValue()) // Зафиксировать время остановки задачи в аналитике
    useAnalyticStore.getState().increaseStopCount() // Увеличить счетчик остановок таймера
  }
  resetTimer() // Обновить таймер
}
export function completedTask (): void { // Кнопка выполнено
  useAnalyticStore.getState().setEndTime(getTimeStoppedTaskValue()) // Зафиксировать время остановки задачи
  useAnalyticStore.getState().setCompletedTomato() // Отметить помидорку завершенной
  useAnalyticStore.getState().increaseTomatoCount() // Увеличить счетчик завершенных помидорок
  useTasksStore.getState().setCompletedTask(0) // Отметить задачу завершенной
  if (useTasksStore.getState().tasks[0].completedTomato >= useTasksStore.getState().tasks[0].tomatoTimerCount) {
    useTasksStore.getState().deleteTask(0)
  }
  resetTimer()
}

function resetTimer (): void {
  clearInterval(useTimerTaskStore.getState().id)
  useTimerTaskStore.getState().setMin(useSettingStore.getState().timeOneTomato)
  useTimerTaskStore.getState().setSec(0)
  useTimerTaskStore.getState().setRun(false)
  useTimerTaskStore.getState().setBreak(false)
  useTimerTaskStore.getState().setPause(false)
  useAnalyticStore.getState().setPauseStartTime(null)
}

function updateStateTimer (min: number, sec: number): void {
  useTimerTaskStore.getState().setMin(min)
  useTimerTaskStore.getState().setSec(sec)
}

function getTimeStoppedTaskValue (): number {
  return (useTimerTaskStore.getState().min * 60) + useTimerTaskStore.getState().sec
}
