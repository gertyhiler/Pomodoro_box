import React, { type FC } from 'react'
import { type IButtonProps } from './IButtonProps'
import style from './style.module.css'

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button className={style.btn} onClick={() => { onClick() }}>
      { text }
    </button>
  )
}
