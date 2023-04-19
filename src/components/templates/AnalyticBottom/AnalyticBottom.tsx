import React, { type FC } from 'react'
import { AnalyticFocusCart } from '../../organisms/AnalyticFocusCart'
import { AnalyticPauseTimeCart } from '../../organisms/AnalyticPauseTimeCart'
import { AnalyticStopsCart } from '../../organisms/AnalyticStopsCart'
import style from './style.module.css'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'

export const AnalyticBottom: FC = () => {
  const currentWeekDay = useAnalyticChart(state => state.currentWeekDay)
  return (
    <div className={style.wrapper}>
      <AnalyticFocusCart {...{ currentWeekDay }}/>
      <AnalyticPauseTimeCart {...{ currentWeekDay }}/>
      <AnalyticStopsCart {...{ currentWeekDay }}/>
    </div>
  )
}
