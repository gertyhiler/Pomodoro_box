import React, { type FC } from 'react'
import { SecondaryText } from '../../atoms/SecondaryText'
import { type ISecondaryText } from '../../atoms/SecondaryText/ISecondaryText'
import style from './style.module.css'

export const CountMinutesTasks: FC<Pick<ISecondaryText, 'text'>> = ({ text }) => {
  return (
    <div className={style.counterWrapper}>
      <SecondaryText text={text} color='black'/>
    </div>
  )
}
