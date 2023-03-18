import React, { type FC } from 'react'
import { Button } from '../../atoms/Buttons'
import { type ITaskStartBtn } from './ITaskStartBtn'

export const TaskStartBtn: FC<ITaskStartBtn> = ({ text, onClick }) => {
  return (
   <Button text={text} onClick={onClick}/>
  )
}
