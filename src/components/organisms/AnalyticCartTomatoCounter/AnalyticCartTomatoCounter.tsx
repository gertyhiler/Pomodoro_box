import React, { useEffect, useState, type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { TextBold } from '../../atoms/TextBold'
import { TomatoEmptySvg } from '../../atoms/TomatoEmptySvg'
import { AnalyticTomatoCounter } from '../../molecules/AnalyticTomatoCounter'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const AnalyticCartTomatoCounter: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const [isEmpty, setEmpty] = useState<boolean>(true)
  const [completedTomatoCount, setCompletedTomatoCount] = useState<number>(0)
  const isLight = useSwitcherState(state => state.isLight)
  useEffect(() => {
    if (typeof (useAnalyticStore.getState().state[day]) === 'undefined') {
      setEmpty(true)
      setCompletedTomatoCount(0)
      return
    }
    setEmpty(false)
    setCompletedTomatoCount(useAnalyticStore.getState().state[day].completedTomatoCount)
  }, [day])

  return (
    <div className={`${style.wrapper} ${isLight ? '' : style.wrapper_dark}`}>
      <div className={style.tomatoCount}>
        {!isEmpty && <AnalyticTomatoCounter count={completedTomatoCount}/>}
        {isEmpty && <TomatoEmptySvg/>}
      </div>
      {!isEmpty &&
        <div className={style.tomatoCountRow}>
          <TextBold color={isLight ? 'white' : 'black'} text={`${completedTomatoCount} помидора`}/>
        </div>
      }
    </div>
  )
}
