import React, { type FC } from 'react'
import { Edit as EditSvg } from '../../../atoms/Edit'
import { SecondaryText } from '../../../atoms/SecondaryText'
import { type IDropdownButton } from '../../../atoms/DropdownItem/IDropdownButton'
import { DropdownItem } from '../../../atoms/DropdownItem'

export const Edit: FC<Pick<IDropdownButton, 'onClick'>> = ({ onClick }) => {
  return (
    <DropdownItem onClick={ onClick }>
     <EditSvg/> <SecondaryText text='Редактировать' color='black'/>
    </DropdownItem>
  )
}
