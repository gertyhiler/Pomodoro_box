import React, { type FC } from 'react'
import { H2 } from '../../atoms/H2'
import { type IAnalyticCartWeekDay } from './IAnalyticCartWeekDay'

export const AnalyticCartWeekDay: FC<IAnalyticCartWeekDay> = ({ day }) => {
  return (
      <H2 text={day}/>
  )
}
