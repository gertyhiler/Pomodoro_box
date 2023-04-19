import React, { type FC } from 'react'
import { type ITask } from './ITask'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { useCurrentTaskState } from './store'
import { TaskContent } from '../TaskContent'
import { dragEndHandler, dragOverHandler, dragStartHandler, dropHandler } from './functions'

export const Task: FC<ITask> = (props) => {
  const { id } = props
  const { setNewOrder } = useTasksStore((store) => store)
  const { findTask } = useTasksStore((store) => store)
  const task = findTask(id)
  const { currentTask, setCurrentTask } = useCurrentTaskState((state) => state)
  return (
    <li
      draggable={true}
      onDragStart={(e) => { dragStartHandler(e, task, setCurrentTask) }}
      onDragLeave={(e) => { dragEndHandler(e) }}
      onDragEnd={(e) => { dragEndHandler(e) }}
      onDragOver={(e) => { dragOverHandler(e) }}
      onDrop={(e) => { dropHandler(e, task, setCurrentTask, setNewOrder, currentTask) }}
      className="relative animate-[mount_1s_ease-in-out]">
        <TaskContent {...props}/>
    </li>
  )
}
