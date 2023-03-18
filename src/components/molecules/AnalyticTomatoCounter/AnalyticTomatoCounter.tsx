import React, { type FC } from 'react'
import { LogoImg } from '../../atoms/LogoImg'
import { TextBold } from '../../atoms/TextBold'
import { type IAnalyticTomatoCounter } from './IAnalyticTomatoCounter'
import style from './style.module.css'

export const AnalyticTomatoCounter: FC<IAnalyticTomatoCounter> = ({ count }) => {
  return (
    <div className={style.wrapper}>
      <LogoImg/> <TextBold text={`x ${count}`} color='gray'/>
    </div>
  )
}
