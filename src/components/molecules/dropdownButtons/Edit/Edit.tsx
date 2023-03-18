import React, { type FC } from 'react'
import { Edit as EditSvg } from '../../../atoms/Edit'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../IDropdownButton'
import style from '../style.module.css'

export const Edit: FC<IDropdownButton> = ({ onClick }) => {
  return (
    <li className='list-none'>
      <button className={style.item} onClick={() => { onClick() }}>
      <EditSvg/> <SecondaryText text='Редактировать' color='black'/>
      </button>
    </li>
  )
}
