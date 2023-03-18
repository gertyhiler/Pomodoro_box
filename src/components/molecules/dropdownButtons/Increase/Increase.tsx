import React, { type FC } from 'react'
import { Plus } from '../../../atoms/Plus'
import { SecondaryText } from '../../../atoms/SecondaryText'
import style from '../style.module.css'
import { type IDropdownButton } from '../IDropdownButton'

export const Increase: FC<IDropdownButton> = ({ onClick }) => {
  return (
    <li className='list-none'>
      <button className={style.item} onClick={() => { onClick() }}>
      <Plus/> <SecondaryText text='Увеличить' color='black'/>
      </button>
    </li>
  )
}
