import React, { type FC } from 'react'
import { AnalyticCartTomatoCounter } from '../../organisms/AnalyticCartTomatoCounter'
import { AnalyticCartWeekAndTime } from '../../organisms/AnalyticCartWeekAndTime'
import style from './style.module.css'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'

export const LeftColAnalyticPage: FC = () => {
  const currentWeekDay = useAnalyticChart(state => state.currentWeekDay)
  return (
    <div className={style.wrapper}>
      <AnalyticCartWeekAndTime {...{ currentWeekDay }}/>
      <AnalyticCartTomatoCounter {...{ currentWeekDay }}/>
    </div>
  )
}
