import React, { useEffect, type FC } from 'react'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { Increase, Reduce, Edit, Delete } from '../../molecules/dropdownButtons'
import { Modal } from '../../templates/Modal'
import { useModalStore } from '../../templates/Modal/useModalStore'
import { type ITaskDropdown } from './ITaskDropdown'
import style from './style.module.css'

export const TaskDropdown: FC<ITaskDropdown> = ({ id }) => {
  const { increaseTomatoCount, decreaseTomatoCount, setEditTask } = useTasksStore(state => state)
  const { isModalOpen, setIsModalOpen, setTaskId } = useModalStore(state => state)
  useEffect(() => {
    setIsModalOpen(false)
    setTaskId(null)
    return () => {
      setIsModalOpen(false)
      setTaskId(null)
    }
  }, [])
  function handleIncreaseClick (): void {
    increaseTomatoCount(id)
  }
  function handleDecreaseClick (): void {
    decreaseTomatoCount(id)
  }
  function handleSetEditTaskClick (): void {
    setEditTask(id)
  }
  function handleDeleteTaskClick (): void {
    setIsModalOpen(true)
    setTaskId(id)
  }

  return (
    <>
    <ul className={style.wrapper}>
      <Increase onClick={handleIncreaseClick}/>
      <Reduce onClick={handleDecreaseClick}/>
      <Edit onClick={handleSetEditTaskClick}/>
      <Delete onClick={handleDeleteTaskClick}/>
    </ul>
    {isModalOpen && <Modal/>}
    </>
  )
}
