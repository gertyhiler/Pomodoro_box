import React, { type FC } from 'react'
import { Text } from '../../atoms/Text'
import { useTimerTaskStore } from '../../organisms/TimerTask/store/useTimerTaskStore'
import { type ITrackerHeaderProps } from './ITrackerProps'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const TrackerHeader: FC<ITrackerHeaderProps> = ({ text, trackerCounter }) => {
  const isRun = useTimerTaskStore(store => store.isRun)
  const isBreak = useTimerTaskStore(store => store.isBreak)
  const isLight = useSwitcherState(state => state.isLight)

  return (
    <div
    className=
    {
      `${style.header}
      ${isLight ? '' : style.header_dark}
      ${isRun && !isBreak ? style.isWork : isRun && isBreak ? style.isBreak : ''}`
    }>
      <Text
        color=
        {
          isLight ? 'white' : 'black'
        }
        text={text}
      />
      <Text
        color=
        {
          isLight ? 'white' : 'black'
        }
        text={`Помидор ${trackerCounter}`}
      />
    </div>
  )
}
