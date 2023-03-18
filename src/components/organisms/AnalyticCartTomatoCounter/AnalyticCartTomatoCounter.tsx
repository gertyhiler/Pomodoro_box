import React, { useEffect, useState, type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { TextBold } from '../../atoms/TextBold'
import { TomatoEmptySvg } from '../../atoms/TomatoEmptySvg'
import { AnalyticTomatoCounter } from '../../molecules/AnalyticTomatoCounter'
import style from './style.module.css'

export const AnalyticCartTomatoCounter: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const [isEmpty, setEmpty] = useState<boolean>(true)
  const [completedTomatoCount, setCompletedTomatoCount] = useState<number>(0)
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
    <div className={style.wrapper}>
      <div className={style.tomatoCount}>
        {!isEmpty && <AnalyticTomatoCounter count={completedTomatoCount}/>}
        {isEmpty && <TomatoEmptySvg/>}
      </div>
      {!isEmpty &&
        <div className={style.tomatoCountRow}>
          <TextBold color='white' text={`${completedTomatoCount} помидора`}/>
        </div>
      }
    </div>
  )
}
