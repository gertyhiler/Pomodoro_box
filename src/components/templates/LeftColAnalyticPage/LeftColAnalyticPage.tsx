import React, { type FC } from 'react'
import { AnalyticCartTomatoCounter } from '../../organisms/AnalyticCartTomatoCounter'
import { AnalyticCartWeekAndTime } from '../../organisms/AnalyticCartWeekAndTime'
import style from './style.module.css'

export const LeftColAnalyticPage: FC = () => {
  return (
    <div className={style.wrapper}>
      <AnalyticCartWeekAndTime/>
      <AnalyticCartTomatoCounter/>
    </div>
  )
}
