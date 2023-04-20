import React, { type FC } from 'react'
import { Text } from '../../atoms/Text'
import { type IAnalyticCartWeekTimeText } from './IAnalyticCartWeekTimeText'

export const AnalyticCartWeekTimeText: FC<IAnalyticCartWeekTimeText> = ({ minSum }) => {
  return (
    <span>
      <Text
        text='Вы работали над задачами в течении '
        color='black'
      />
      <Text
        text={`${minSum}`}
        color='red'
      />
    </span>
  )
}
