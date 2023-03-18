import React, { type FC } from 'react'
import { type IClockSection } from './IClockSection'
import style from './style.module.css'

export const ClockSection: FC<IClockSection> = ({ figure }) => {
  return (
    <span className={style.figure}>
      { figure }
    </span>
  )
}
