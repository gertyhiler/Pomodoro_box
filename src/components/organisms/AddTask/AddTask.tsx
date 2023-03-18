import React, { type FC } from 'react'
import { AddTaskBtn } from '../../molecules/AddTaskBtn'
import { InputTask } from '../../molecules/InputTask'

export const AddTask: FC = () => {
  return (
    <div className='flex flex-col gap-6 items-start'>
      <InputTask/>
      <AddTaskBtn/>
    </div>
  )
}
