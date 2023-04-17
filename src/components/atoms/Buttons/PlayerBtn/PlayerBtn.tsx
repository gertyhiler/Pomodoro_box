import React, { type FC } from 'react'
import { type IButtonProps } from './IButtonProps'
import style from './style.module.css'
import { useSwitcherState } from '../../Switcher/state'

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <button className={`${style.btn} ${isLight ? '' : style.btn_dark}`} onClick={() => { onClick() }}>
      { text }
    </button>
  )
}
