import React, { type FC } from 'react'
import { type ITextProps } from './ITextProps'
import style from './style.module.css'

export const Text: FC<ITextProps> = ({ text, color }) => {
  return (
    <span className={`${style.text} ${color === 'white' ? style.white : color === 'black' ? style.black : style.red}`}>
      { text }
    </span>
  )
}
