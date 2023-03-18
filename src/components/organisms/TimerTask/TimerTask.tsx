import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { PlusBtn } from '../../atoms/Buttons'
import { Timer } from '../../molecules/Timer'
import { useTimerTaskStore } from './store/useTimerTaskStore'
import style from './style.module.css'

export const TimerTask: FC = () => {
  return (
    <div className={style.wrapper}>
      <Timer />
      <PlusBtn onClick={() => {
        useTimerTaskStore.getState().setMin(useTimerTaskStore.getState().min + 1)
        useAnalyticStore.getState().increaseStartTime()
      }}
        />
    </div>
  )
}
