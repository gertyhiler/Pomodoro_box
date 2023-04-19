import React, { type FC } from 'react'
import { type IMoreBtnProps } from './IMoreBtnProps'
import style from './style.module.css'
import { MoreSvg } from '../MoreSvg'

export const MoreBtn: FC<IMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={style.btn} onClick={() => { onClick() }}>
      <MoreSvg/>
    </button>
  )
}
