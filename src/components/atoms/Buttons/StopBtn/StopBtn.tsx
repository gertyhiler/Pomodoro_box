import React, { type FC } from 'react'
import { type IButtonProps } from './IButtonProps'
import style from './style.module.css'

export const StopBtn: FC<IButtonProps> = ({ isDisable, onClick, text }) => {
  function clickHandler (): void {
    if (!isDisable) onClick()
  }
  return (
    <button className={`${style.btn} ${isDisable ? style.btnDisable : ''}`} onClick={clickHandler}>
      { text }
    </button>
  )
}
