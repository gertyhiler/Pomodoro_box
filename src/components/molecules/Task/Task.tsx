import React, { type FC, useEffect, useRef, useState } from 'react'
import { Delimiter } from '../../atoms/Delimiter'
import { TomatoCounter } from '../../atoms/TomatoCounter'
import { Text } from '../../atoms/Text'
import { MoreBtn } from '../../atoms/MoreBtn'
import { type ITask } from './ITask'
import style from './style.module.css'
import { TaskDropdown } from '../../organisms/TaskDropdown/TaskDropdown'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { useCurrentTaskState } from './store'
import { type Task as ITaskStore } from '../../../store/tasks/Task'

export const Task: FC<ITask> = ({ count, text, id }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(text)
  const inputRef = useRef<HTMLInputElement>(null)
  const { findTask, editTask, setEditTask, setNewOrder } = useTasksStore((store) => store)
  const task = findTask(id)
  const { currentTask, setCurrentTask } = useCurrentTaskState((state) => state)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  useEffect(() => {
    setInputValue(text)
    inputRef?.current?.focus()
  }, [task.isEditable])

  function dragStartHandler (e: React.DragEvent<HTMLLIElement>, task: ITaskStore): void {
    setCurrentTask(task)
  }

  function dragOverHandler (e: React.DragEvent<HTMLLIElement>): void {
    e.preventDefault()
  }

  function dragEndHandler (e: React.DragEvent<HTMLLIElement>): void {
    e.preventDefault()
  }

  function dropHandler (e: React.DragEvent<HTMLLIElement>, task: ITaskStore): void {
    // e.preventDefault()
    setNewOrder(currentTask.id, task.order)
    setNewOrder(task.id, currentTask.order)
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    setCurrentTask({} as ITaskStore)
  }

  return (
    <li
      draggable={true}
      onDragStart={(e) => { dragStartHandler(e, task) }}
      onDragLeave={(e) => { dragEndHandler(e) }}
      onDragEnd={(e) => { dragEndHandler(e) }}
      onDragOver={(e) => { dragOverHandler(e) }}
      onDrop={(e) => { dropHandler(e, task) }}
      className="relative animate-[mount_1s_ease-in-out]">
      <Delimiter />
      <div className={style.content}>
        <TomatoCounter count={count} />
        {task.isEditable && (
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value) }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                editTask(id, inputValue)
                setEditTask(id)
              }
            }}
          />
        )}
        {!task.isEditable && <Text text={text} color="black" />}
        <MoreBtn onClick={() => { setIsDropdownOpen(!isDropdownOpen) }} />
      </div>
      {isDropdownOpen && <TaskDropdown id={id} />}
    </li>
  )
}
