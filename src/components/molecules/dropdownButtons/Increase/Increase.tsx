import React, { type FC } from 'react'
import { Plus } from '../../../atoms/Plus'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../../../atoms/DropdownItem/IDropdownButton'
import { DropdownItem } from '../../../atoms/DropdownItem'

export const Increase: FC<Pick<IDropdownButton, 'onClick'>> = ({ onClick }) => {
  return (
    <DropdownItem onClick={ onClick }>
       <Plus/> <SecondaryText text='Увеличить' color='black'/>
    </DropdownItem>
  )
}
