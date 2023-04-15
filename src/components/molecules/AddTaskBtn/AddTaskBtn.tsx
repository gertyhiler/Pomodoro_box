import React, { type FC } from 'react'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { Button } from '../../atoms/Buttons'
import { useInputStore } from '../InputTask/store/useInputStore'

export const AddTaskBtn: FC = () => {
  const setValue = useInputStore((state) => state.setValue)
  const addTask = useTasksStore((state) => state.addTask)
  function handleClick (): void {
    if (useInputStore.getState().value.trim() === '') return
    addTask(useInputStore.getState().value.trim())
    setValue('')
  }
  return (
    <Button text='Добавить' onClick={handleClick}/>
  )
}
