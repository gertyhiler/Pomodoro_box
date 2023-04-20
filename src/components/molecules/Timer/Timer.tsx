import React, { useEffect, type FC } from 'react'
import { convertTimeToString } from '../../../utils/convertTimeToString'
import { ClockSection } from '../../atoms/ClockSection'
import { useTimerTaskStore } from '../../organisms/TimerTask/store/useTimerTaskStore'
// import { type ITimer } from './ITimer'
import style from './style.module.css'
import { useSettingStore } from '../../../store/setting/useSettingStore'

export const Timer: FC = () => {
  const { min, sec, isBreak, isPause, isRun, setMin, setSec } = useTimerTaskStore(state => state)
  const { timeOneTomato } = useSettingStore(state => state)
  useEffect(() => {
    if (isRun) return
    setMin(timeOneTomato)
    setSec(0)
  }, [timeOneTomato])

  return (
    <span className={`${style.clock} ${isRun && !isPause && isBreak ? style.isBreak : isRun && !isPause && !isBreak ? style.isWork : ''}`}>
      <ClockSection figure={convertTimeToString(min)}/> : <ClockSection figure={convertTimeToString(sec)}/>
    </span>
  )
}
