import React, { type FC } from 'react'
import { useAnalyticStore } from '../../../store/analytic/useAnalyticStore'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { Text } from '../../atoms/Text'
import { AnalyticCartWeekDay } from '../../molecules/AnalyticCartWeekDay'
import { AnalyticCartWeekTimeText } from '../../molecules/AnalyticCartWeekTimeText'
import style from './style.module.css'

export const AnalyticCartWeekAndTime: FC = () => {
  const day = useAnalyticChart(state => state.currentWeekDay)
  const dayTextPosition = useAnalyticChart(state => state.weekDays).indexOf(day)
  const dayText = dayTextPosition === 0 ? 'Понедельник' : dayTextPosition === 1 ? 'Вторник' : dayTextPosition === 2 ? 'Среда' : dayTextPosition === 3 ? 'Четверг' : dayTextPosition === 4 ? 'Пятница' : dayTextPosition === 5 ? 'Суббота' : dayTextPosition === 6 ? 'Воскресенье' : 'Ошибка'
  try {
    const sumSeconds = useAnalyticStore.getState().state[day].tomato.reduce((acc, item) => (acc + (item.startTime - item.endTime)), 0)
    const sumMinutes = Number((sumSeconds / 60).toFixed())
    return (
      <div className={style.wrapper}>
        <AnalyticCartWeekDay day={dayText}/>
        <AnalyticCartWeekTimeText minSum={sumMinutes}/>
      </div>
    )
  } catch (e) {
    return (
      <div className={style.wrapper}>
        <AnalyticCartWeekDay day={dayText}/>
        <Text text='Нет данных' color='black'/>
      </div>
    )
  }
}
