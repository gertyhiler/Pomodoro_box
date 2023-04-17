import React, { type FC } from 'react'
import { type ITextH3 } from './ITextH3'
import style from './style.module.css'
import { useSwitcherState } from '../Switcher/state'

export const TextH3: FC<ITextH3> = ({ text }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <h3 className={`${style.text} ${isLight ? '' : 'text-primary-color-invert'}`}>
      { text }
    </h3>
  )
}
