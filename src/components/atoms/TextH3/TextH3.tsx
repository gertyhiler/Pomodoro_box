import React, { type FC } from 'react'
import { type ITextH3 } from './ITextH3'
import style from './style.module.css'

export const TextH3: FC<ITextH3> = ({ text }) => {
  return (
    <h3 className={style.text}>
      { text }
    </h3>
  )
}
