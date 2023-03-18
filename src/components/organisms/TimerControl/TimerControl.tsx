import React, { type FC } from 'react'
import { pauseTimer, startTimer, stopTimer, completedTask } from '../../../utils/timerControls'
import { StopBtn } from '../../atoms/Buttons'
import { TaskStartBtn } from '../../molecules/TaskStartBtn'
import { useTimerTaskStore } from '../TimerTask/store/useTimerTaskStore'
import style from './style.module.css'

export const TimerControl: FC = () => {
  const isRun = useTimerTaskStore(state => state.isRun)
  const isPause = useTimerTaskStore(state => state.isPause)
  const isBreak = useTimerTaskStore(state => state.isBreak)
  return (
    <div className={style.wrapper}>
      <TaskStartBtn text={isRun && !isPause ? 'Пауза' : isRun && isPause ? 'Продолжить' : 'Старт'} onClick={isRun && !isPause ? pauseTimer : startTimer}/>
      <StopBtn isDisable={!isRun} onClick={isRun && isPause && !isBreak ? completedTask : stopTimer } text={`${isRun && !isPause && !isBreak ? 'Стоп' : isRun && isPause && !isBreak ? 'Сделано' : (isRun && !isPause && isBreak) || (isRun && isPause && isBreak) ? 'Пропустить' : 'Стоп'}`}/>
    </div>
  )
}

// TODO: Логика нажатия и взаимодействия со стором
