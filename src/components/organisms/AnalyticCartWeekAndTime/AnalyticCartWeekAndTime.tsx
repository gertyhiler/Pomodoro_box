import React, { type FC } from 'react'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { Text } from '../../atoms/Text'
import { AnalyticCartWeekDay } from '../../molecules/AnalyticCartWeekDay'
import { AnalyticCartWeekTimeText } from '../../molecules/AnalyticCartWeekTimeText'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'
import { calculateSumSecondsOnCurrentWeekDay } from '../../../utils/calculateSumSecondsOnCurrentWeekDay'
import { type IUseAnalyticChartStore } from '../../../store/analyticChart/IUseAnalyticChartStore'
import { convertSecondToMinutes } from '../../../utils/convertSecondToMinutes'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { dayText } from './dayText'
import { convertMinutesTomatoToString } from '../../../utils/convertMinutesTomatoToString'

export const AnalyticCartWeekAndTime: FC<Pick<IUseAnalyticChartStore, 'currentWeekDay'>> = ({ currentWeekDay }) => {
  const dayTextPosition = useAnalyticChart((state) => state.weekDays).indexOf(
    currentWeekDay
  )
  const minutes = typeof (useAnalyticStore.getState().state[currentWeekDay]) === 'undefined'
    ? 0
    : convertMinutesTomatoToString(
      convertSecondToMinutes(
        calculateSumSecondsOnCurrentWeekDay(currentWeekDay)))
  // console.log('calculateSumSecondsOnCurrentWeekDay(currentWeekDay): ', calculateSumSecondsOnCurrentWeekDay(currentWeekDay))
  const isLight = useSwitcherState((state) => state.isLight)
  return (
    <div className={`${style.wrapper} ${isLight ? '' : style.wrapper_dark}`}>
      <AnalyticCartWeekDay day={dayText[dayTextPosition]} />
      {minutes !== 0 && (
        <AnalyticCartWeekTimeText
          minSum={minutes}
        />
      )}
      {minutes === 0 && (
        <Text text='Нет данных' color='black' />
      )}
    </div>
  )
}
