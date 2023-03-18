import React, { type FC } from 'react'
import { AnalyticFocusCart } from '../../organisms/AnalyticFocusCart'
import { AnalyticPauseTimeCart } from '../../organisms/AnalyticPauseTimeCart'
import { AnalyticStopsCart } from '../../organisms/AnalyticStopsCart'
import style from './style.module.css'

export const AnalyticBottom: FC = () => {
  return (
    <div className={style.wrapper}>
      <AnalyticFocusCart/>
      <AnalyticPauseTimeCart/>
      <AnalyticStopsCart/>
    </div>
  )
}
