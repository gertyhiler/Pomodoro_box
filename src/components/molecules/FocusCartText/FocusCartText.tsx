import React, { type FC } from 'react'
import { AnalyticBigText } from '../../atoms/AnalyticBigText'
import { type IAnalyticBigText } from '../../atoms/AnalyticBigText/IAnalyticBigText'

export const FocusCartText: FC<Required<IAnalyticBigText>> = ({ text }) => {
  return (
    <AnalyticBigText text={`${text}%`}/>
  )
}
