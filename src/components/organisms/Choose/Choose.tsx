import React, { type FC } from 'react'
import { ChooseSummary } from '../../molecules/ChooseSummary'
import { Text } from '../../atoms/Text'
import { ChooseElement } from '../../molecules/ChooseElement'
import { Delimiter } from '../../atoms/Delimiter'
import style from './style.module.css'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'

export const Choose: FC = () => {
  const setLastWeek = useAnalyticChart(state => state.setLastWeekDays)
  const setTwoLastWeek = useAnalyticChart(state => state.setTwoLastWeekDays)
  const setCurrentWeek = useAnalyticChart(state => state.setCurrentWeek)
  return (
    <details className={style.details}>
      <ChooseSummary>
        <button onClick={() => { setCurrentWeek() }} className='w-full h-full text-left'>
        <Text color='black' text={'Эта неделя'}/>
        </button>
      </ChooseSummary>
      <ul className='absolute z-10 w-full'>
        <li>
          <button onClick={() => { setTwoLastWeek() }} className='w-full h-full text-left'>
          <Delimiter/>
          <ChooseElement text='2 недели назад'/>
          </button>
        </li>
        <li>
          <button onClick={() => { setLastWeek() }} className='w-full h-full text-left'>
          <Delimiter/>
          <ChooseElement text='Прошедшая неделя'/>
          </button>
        </li>
      </ul>
    </details>
  )
}
