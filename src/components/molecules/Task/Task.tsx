import React, { type FC, useEffect, useRef, useState } from 'react'
import { Delimiter } from '../../atoms/Delimiter'
import { TomatoCounter } from '../../atoms/TomatoCounter'
import { Text } from '../../atoms/Text'
import { MoreBtn } from '../../atoms/MoreBtn'
import { type ITask } from './ITask'
import style from './style.module.css'
import { TaskDropdown } from '../../organisms/TaskDropdown/TaskDropdown'
import { useTasksStore } from '../../../store/tasks/useTasksStore'

export const Task: FC<ITask> = ({ count, text, id }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(text)
  const inputRef = useRef<HTMLInputElement>(null)
  const { findTask, editTask, setEditTask } = useTasksStore((store) => store)
  const task = findTask(id)

  useEffect(() => {
    setInputValue(text)
    inputRef?.current?.focus()
  }, [task.isEditable])

  return (
    <li className="relative animate-[mount_1s_ease-in-out]">
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
