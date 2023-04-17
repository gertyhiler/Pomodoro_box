import React, { type FC } from 'react'
import { type IButton } from '../IButton'
import style from './style.module.css'
import { useSwitcherState } from '../../Switcher/state'

export const PlusBtn: FC<Required<IButton>> = ({ onClick }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <button className={`${style.btn} ${isLight ? '' : style.btn_dark}`} onClick={() => { onClick() }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.27559 9.13215V16H6.72441V9.13215H0V6.70291H6.72441V0H9.27559V6.70291H16V9.13215H9.27559Z" fill="white"/>
      </svg>
    </button>
  )
}
