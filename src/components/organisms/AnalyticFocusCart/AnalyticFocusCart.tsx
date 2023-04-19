import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { FocusSvg } from '../../atoms/FocusSvg'
import { FocusCartText } from '../../molecules/FocusCartText'
import { FocusCartTitle } from '../../molecules/FocusCartTitle'
import { calculateFocusValueOnCurrentWeekDay } from '../../../utils/calculateFocusValueOnCurrentWeekDay'
import style from './style.module.css'
import { type IUseAnalyticChartStore } from '../../../store/analyticChart/IUseAnalyticChartStore'

export const AnalyticFocusCart: FC<Pick<IUseAnalyticChartStore, 'currentWeekDay'>> = ({ currentWeekDay }) => {
  const focusValue = typeof (useAnalyticStore.getState().state[currentWeekDay]) === 'undefined'
    ? 0
    : calculateFocusValueOnCurrentWeekDay(currentWeekDay)
  return (
    <div className={`${style.focusCart} ${focusValue === 0 ? style.empty : ''}`}>
      <FocusCartTitle/>
      <FocusCartText text={`${focusValue}`}/>
      <FocusSvg/>
    </div>
  )
}
