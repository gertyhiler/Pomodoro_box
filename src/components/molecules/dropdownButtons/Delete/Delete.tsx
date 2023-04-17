import React, { type FC } from 'react'
import { Delete as DeleteBtn } from '../../../atoms/Delete'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../../../atoms/DropdownItem/IDropdownButton'
import { DropdownItem } from '../../../atoms/DropdownItem'

export const Delete: FC<Pick<IDropdownButton, 'onClick'>> = ({ onClick }) => {
  return (
    <DropdownItem onClick={ onClick }>
      <DeleteBtn/> <SecondaryText text='Удалить' color='black'/>
    </DropdownItem>
  )
}
