import React, { useEffect, useState, type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { StopsSvg } from '../../atoms/StopsSvg'
import { StopsText } from '../../molecules/StopsText'
import { StopsTitle } from '../../molecules/StopsTitle'
import style from './style.module.css'

export const AnalyticStopsCart: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const [isEmpty, setEmpty] = useState<boolean>(true)
  const [stopCount, setStopCount] = useState<number>(0)
  useEffect(() => {
    if (typeof useAnalyticStore.getState().state[day] === 'undefined') {
      setEmpty(true)
      setStopCount(0)
      return
    }
    setEmpty(false)
    setStopCount(useAnalyticStore.getState().state[day].stopCount)
  }, [day])

  return (
    <div className={`${style.stopsCart} ${isEmpty ? style.empty : ''}`}>
      <StopsTitle/>
      <StopsText text={`${isEmpty ? '0' : stopCount}`}/>
      <StopsSvg/>
    </div>
  )
}
