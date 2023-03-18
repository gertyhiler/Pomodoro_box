import React, { type FC } from 'react'
import { type ISecondaryText } from './ISecondaryText'
import style from './style.module.css'

export const SecondaryText: FC<ISecondaryText> = ({ text, color }) => {
  return (
    <span className={`${style.text} ${color === 'white' ? style.white : style.black}`}>
      { text }
    </span>
  )
}
