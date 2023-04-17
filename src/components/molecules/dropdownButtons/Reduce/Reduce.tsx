import React, { type FC } from 'react'
import { Minus } from '../../../atoms/Minus'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../../../atoms/DropdownItem/IDropdownButton'
import { DropdownItem } from '../../../atoms/DropdownItem'

export const Reduce: FC<Pick<IDropdownButton, 'onClick'>> = ({ onClick }) => {
  return (
    <DropdownItem onClick={ onClick }>
      <Minus/> <SecondaryText text='Уменьшить' color='black'/>
    </DropdownItem>
  )
}
