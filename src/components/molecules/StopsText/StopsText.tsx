import React, { type FC } from 'react'
import { AnalyticBigText } from '../../atoms/AnalyticBigText'
import { type IAnalyticBigText } from '../../atoms/AnalyticBigText/IAnalyticBigText'

export const StopsText: FC<Required<IAnalyticBigText>> = ({ text }) => {
  return (
    <AnalyticBigText text={`${text}`}/>
  )
}
