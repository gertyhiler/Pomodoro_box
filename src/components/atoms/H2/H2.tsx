import React, { type FC } from 'react'
import { type IH2Props } from './IH2Props'
import style from './style.module.css'

export const H2: FC<IH2Props> = ({ text }) => {
  return (
    <h2 className={style.h2}>
      { text }
    </h2>
  )
}
