import React, { type FC } from 'react'
import { Minus } from '../../../atoms/Minus'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../IDropdownButton'
import style from '../style.module.css'

export const Reduce: FC<IDropdownButton> = ({ onClick }) => {
  return (
    <li className='list-none'>
      <button className={style.item} onClick={() => { onClick() }}>
      <Minus/> <SecondaryText text='Уменьшить' color='black'/>
      </button>
    </li>
  )
}
