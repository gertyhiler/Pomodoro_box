import React, { type FC } from 'react'
import { type IButton } from '../IButton'
import style from './style.module.css'

export const CancelBtn: FC<Required<IButton>> = ({ onClick }) => {
  return (
    <button className={style.btn} onClick={() => { onClick() }}>
      Отмена
    </button>
  )
}
