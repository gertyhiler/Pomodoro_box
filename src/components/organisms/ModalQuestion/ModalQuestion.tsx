import React, { type FC } from 'react'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { CancelBtn, CloseBtn, DeleteBtn } from '../../atoms/Buttons'
import { TextDelModal } from '../../molecules/TextDelModal'
import { useModalStore } from '../../templates/Modal/useModalStore'
import style from './style.module.css'

export const ModalQuestion: FC = () => {
  const { taskId, setIsModalOpen, setTaskId } = useModalStore(state => state)
  console.log('taskId: ', taskId)
  const deleteTask = useTasksStore(state => state.deleteTask)
  function handleDeleteClick (): void {
    if (taskId === null) return
    deleteTask(taskId)
  }
  function handleCancelClick (): void {
    setTaskId(null)
    setIsModalOpen(false)
  }
  return (
    <section className={style.modal}>
      <div className={style.wrapper}>
        <TextDelModal/> {/* Удалить задачу? */}
        <DeleteBtn onClick={ handleDeleteClick }/>
        <CancelBtn onClick={ handleCancelClick }/>
      </div>
      <CloseBtn onClick={ handleCancelClick }/>
    </section>
  )
}
