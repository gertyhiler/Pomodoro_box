import React, { type FC } from 'react'
import { type IButton } from '../IButton'
import style from './style.module.css'
import { useSwitcherState } from '../../Switcher/state'

export const CancelBtn: FC<Required<IButton>> = ({ onClick }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <button className={`${style.btn} ${isLight ? '' : style.btn_dark}`} onClick={() => { onClick() }}>
      Отмена
    </button>
  )
}
