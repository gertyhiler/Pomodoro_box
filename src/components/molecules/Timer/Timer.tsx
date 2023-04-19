import React, { type FC } from 'react'
import { convertTimeToString } from '../../../utils/convertTimeToString'
import { ClockSection } from '../../atoms/ClockSection'
import { useTimerTaskStore } from '../../organisms/TimerTask/store/useTimerTaskStore'
// import { type ITimer } from './ITimer'
import style from './style.module.css'

export const Timer: FC = () => {
  const { min, sec, isBreak, isPause, isRun } = useTimerTaskStore(state => state)
  return (
    <span className={`${style.clock} ${isRun && !isPause && isBreak ? style.isBreak : isRun && !isPause && !isBreak ? style.isWork : ''}`}>
      <ClockSection figure={convertTimeToString(min)}/> : <ClockSection figure={convertTimeToString(sec)}/>
    </span>
  )
}
