import React, { type FC } from 'react'
import { type IAnalyticBigText } from './IAnalyticBigText'
import style from './style.module.css'

export const AnalyticBigText: FC<IAnalyticBigText> = ({ text }) => {
  return (
    <span className={style.text}>
      { text }
    </span>
  )
}
