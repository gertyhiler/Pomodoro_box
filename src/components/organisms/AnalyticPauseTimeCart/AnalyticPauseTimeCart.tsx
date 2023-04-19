import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { convertMinutesTomatoToString } from '../../../utils/convertMinutesTomatoToString'
import { AnalyticBigText } from '../../atoms/AnalyticBigText'
import { PauseTimeSvg } from '../../atoms/PauseTimeSvg'
import { PauseTimeTitle } from '../../molecules/PauseTimeTitle'
import style from './style.module.css'
import { convertSecondToMinutes } from '../../../utils/convertSecondToMinutes'
import { type IUseAnalyticChartStore } from '../../../store/analyticChart/IUseAnalyticChartStore'

export const AnalyticPauseTimeCart: FC<Pick<IUseAnalyticChartStore, 'currentWeekDay'>> = ({ currentWeekDay }) => {
  const text = typeof (useAnalyticStore.getState().state[currentWeekDay]) === 'undefined'
    ? 0
    : convertMinutesTomatoToString(
      convertSecondToMinutes(
        useAnalyticStore.getState().state[currentWeekDay].pauseTime
      ))
  return (
    <div className={`${style.pauseTimeCart} ${text === 0 ? style.empty : ''}`}>
      <PauseTimeTitle/>
      <AnalyticBigText text={`${text}`}/>
      <PauseTimeSvg/>
    </div>
  )
}
