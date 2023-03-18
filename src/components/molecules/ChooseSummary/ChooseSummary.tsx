import React, { type FC } from 'react'
import { ArrowSvg } from '../../atoms/ArrowSvg'
import { type IChooseSummary } from './IChooseSummary'
import style from './style.module.css'

export const ChooseSummary: FC<IChooseSummary> = ({ children }) => {
  return (
    <summary className={style.summary}>
      { children }
      <ArrowSvg/>
    </summary>
  )
}

//   <Text color='black' text={title}/>
