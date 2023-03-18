import React, { useEffect, useState, type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { convertMinutesTomatoToString } from '../../../utils/convertMinutesTomatoToString'
import { AnalyticBigText } from '../../atoms/AnalyticBigText'
import { PauseTimeSvg } from '../../atoms/PauseTimeSvg'
import { PauseTimeTitle } from '../../molecules/PauseTimeTitle'
import style from './style.module.css'

export const AnalyticPauseTimeCart: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const [isEmpty, setEmpty] = useState<boolean>(true)
  const [pauseTime, setPauseTime] = useState<number>(0)
  useEffect(() => {
    if (typeof (useAnalyticStore.getState().state[day]) === 'undefined') {
      setEmpty(true)
      setPauseTime(0)
      return
    }
    setEmpty(false)
    setPauseTime(useAnalyticStore.getState().state[day].pauseTime)
  }, [day])
  const text = convertMinutesTomatoToString(Number((pauseTime / 60).toFixed()))
  return (
    <div className={`${style.pauseTimeCart} ${isEmpty ? style.empty : ''}`}>
      <PauseTimeTitle/>
      <AnalyticBigText text={`${isEmpty ? '0' : text}`}/>
      <PauseTimeSvg/>
    </div>
  )
}
