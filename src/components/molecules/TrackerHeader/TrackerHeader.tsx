import React, { type FC } from 'react'
import { Text } from '../../atoms/Text'
import { useTimerTaskStore } from '../../organisms/TimerTask/store/useTimerTaskStore'
import { type ITrackerHeaderProps } from './ITrackerProps'
import style from './style.module.css'

export const TrackerHeader: FC<ITrackerHeaderProps> = ({ text, trackerCounter }) => {
  const isRun = useTimerTaskStore(store => store.isRun)
  const isBreak = useTimerTaskStore(store => store.isBreak)

  return (
    <div className={`${style.header} ${isRun && !isBreak ? style.isWork : isRun && isBreak ? style.isBreak : ''}`}>
      <Text color='white' text={text}/>
      <Text color='white' text={`Помидор ${trackerCounter}`}/>
    </div>
  )
}
