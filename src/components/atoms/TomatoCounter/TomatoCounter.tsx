import React, { type FC } from 'react'
import { type ITomatoCounter } from './ITomatoCounter'
import style from './style.module.css'

export const TomatoCounter: FC<ITomatoCounter> = ({ count }) => {
  return (
    <div className={style.counter}>
     <span className={style.text}>{ count }</span>
    </div>
  )
}
