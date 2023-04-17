import React, { type FC } from 'react'
import { type IH2Props } from './IH2Props'
import style from './style.module.css'
import { useSwitcherState } from '../Switcher/state'

export const H2: FC<IH2Props> = ({ text }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <h2 className={`${style.h2} ${isLight ? '' : style.h2_dark}`}>
      { text }
    </h2>
  )
}
