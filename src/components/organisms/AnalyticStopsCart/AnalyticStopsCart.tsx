import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { StopsSvg } from '../../atoms/StopsSvg'
import { StopsText } from '../../molecules/StopsText'
import { StopsTitle } from '../../molecules/StopsTitle'
import style from './style.module.css'
import { type IUseAnalyticChartStore } from '../../../store/analyticChart/IUseAnalyticChartStore'

export const AnalyticStopsCart: FC<Pick<IUseAnalyticChartStore, 'currentWeekDay'>> = ({ currentWeekDay }) => {
  const stopCount = typeof useAnalyticStore.getState().state[currentWeekDay] === 'undefined'
    ? 0
    : useAnalyticStore.getState().state[currentWeekDay].stopCount

  return (
    <div className={`${style.stopsCart} ${stopCount === 0 ? style.empty : ''}`}>
      <StopsTitle/>
      <StopsText text={`${stopCount}`}/>
      <StopsSvg/>
    </div>
  )
}
