import React, { useEffect, useState, type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'

import { FocusSvg } from '../../atoms/FocusSvg'
import { FocusCartText } from '../../molecules/FocusCartText'
import { FocusCartTitle } from '../../molecules/FocusCartTitle'
import style from './style.module.css'

export const AnalyticFocusCart: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const [isEmpty, setEmpty] = useState<boolean>(true)
  const [focusValue, setFocusValue] = useState<string>('')
  useEffect(() => {
    if (typeof (useAnalyticStore.getState().state[day]) === 'undefined') {
      setEmpty(true)
      setFocusValue('')
      return
    }
    setEmpty(false)
    setFocusValue((((useAnalyticStore.getState().state[day].tomato.reduce((acc, item) => item.isCompleted ? acc + (item.startTime - item.endTime) : acc + 0, 0)) / ((useAnalyticStore.getState().state[day].tomato.reduce((acc, item) => (acc + (item.startTime - item.endTime)), 0)) + Number(useAnalyticStore.getState().state[day].pauseTime.toFixed()))) * 100).toFixed())
  }, [day])
  return (
    <div className={`${style.focusCart} ${isEmpty ? style.empty : ''}`}>
      <FocusCartTitle/>
      <FocusCartText text={`${isEmpty ? '0' : focusValue}`}/>
      <FocusSvg/>
    </div>
  )
}
