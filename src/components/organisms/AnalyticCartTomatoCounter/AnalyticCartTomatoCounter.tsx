import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { TextBold } from '../../atoms/TextBold'
import { TomatoEmptySvg } from '../../atoms/TomatoEmptySvg'
import { AnalyticTomatoCounter } from '../../molecules/AnalyticTomatoCounter'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'
import { type IUseAnalyticChartStore } from '../../../store/analyticChart/IUseAnalyticChartStore'

export const AnalyticCartTomatoCounter: FC<Pick<IUseAnalyticChartStore, 'currentWeekDay'>> = ({ currentWeekDay }) => {
  const isLight = useSwitcherState(state => state.isLight)
  const completedTomatoCount = typeof (useAnalyticStore.getState().state[currentWeekDay]) === 'undefined'
    ? 0
    : useAnalyticStore.getState().state[currentWeekDay].completedTomatoCount

  return (
    <div className={`${style.wrapper} ${isLight ? '' : style.wrapper_dark}`}>
      <div className={style.tomatoCount}>
        {completedTomatoCount !== 0 && <AnalyticTomatoCounter count={completedTomatoCount}/>}
        {completedTomatoCount === 0 && <TomatoEmptySvg/>}
      </div>
      {completedTomatoCount !== 0 &&
        <div className={style.tomatoCountRow}>
          <TextBold color={isLight ? 'white' : 'black'} text={`${completedTomatoCount} помидора`}/>
        </div>
      }
    </div>
  )
}
