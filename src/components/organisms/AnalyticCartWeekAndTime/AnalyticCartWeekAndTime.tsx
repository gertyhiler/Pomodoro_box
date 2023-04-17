import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { Text } from '../../atoms/Text'
import { AnalyticCartWeekDay } from '../../molecules/AnalyticCartWeekDay'
import { AnalyticCartWeekTimeText } from '../../molecules/AnalyticCartWeekTimeText'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const AnalyticCartWeekAndTime: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const dayTextPosition = useAnalyticChart(state => state.weekDays).indexOf(day)
  const dayText = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  const isLight = useSwitcherState(state => state.isLight)
  try {
    const sumSeconds = useAnalyticStore.getState().state[day].tomato.reduce((acc, item) => (acc + (item.startTime - item.endTime)), 0)
    const sumMinutes = Number((sumSeconds / 60).toFixed())
    return (
      <div className={`${style.wrapper} ${isLight ? '' : style.wrapper_dark}`}>
        <AnalyticCartWeekDay day={dayText[dayTextPosition]}/>
        <AnalyticCartWeekTimeText minSum={sumMinutes}/>
      </div>
    )
  } catch (e) {
    return (
      <div className={`${style.wrapper} ${isLight ? '' : style.wrapper_dark}`}>
        <AnalyticCartWeekDay day={dayText[dayTextPosition]}/>
        <Text text='Нет данных' color='black'/>
      </div>
    )
  }
}
