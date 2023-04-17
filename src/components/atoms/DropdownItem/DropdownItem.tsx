import React, { type FC } from 'react'
import style from './style.module.css'
import { type IDropdownButton } from './IDropdownButton'
import { useSwitcherState } from '../Switcher/state'

export const DropdownItem: FC<IDropdownButton> = ({ onClick, children }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <li className='list-none'>
      <button className={`${style.item} ${isLight ? '' : style.item_dark}`} onClick={() => { onClick() }}>
        { children }
      </button>
    </li>
  )
}
