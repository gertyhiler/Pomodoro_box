import React, { type FC } from 'react'
import { type ITextBold } from './ITextBold'
import style from './style.module.css'

export const TextBold: FC<ITextBold> = ({ text, color }) => {
  return (
    <p className={`${style.text} ${color === 'gray' ? style.gray : color === 'white' ? style.white : style.black}`}>
      { text }
    </p>
  )
}
