import React, { type FC } from 'react'
import { Delete as DeleteBtn } from '../../../atoms/Delete'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../IDropdownButton'
import style from '../style.module.css'

export const Delete: FC<IDropdownButton> = ({ onClick }) => {
  return (
    <li className='list-none'>
      <button className={style.item} onClick={() => { onClick() }}>
      <DeleteBtn/> <SecondaryText text='Удалить' color='black'/>
      </button>
    </li>
  )
}
