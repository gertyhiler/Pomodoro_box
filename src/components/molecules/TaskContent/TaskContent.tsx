import React, { useState, type FC, useEffect, useRef } from 'react'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { Delimiter } from '../../atoms/Delimiter'
import { TomatoCounter } from '../../atoms/TomatoCounter'
import { MoreBtn } from '../../atoms/MoreBtn'
import { Text } from '../../atoms/Text'
import { TaskDropdown } from '../../organisms/TaskDropdown/TaskDropdown'
import { type ITask } from '../Task/ITask'
import style from './style.module.css'

export const TaskContent: FC<ITask> = ({ id, count, text }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(text)
  const inputRef = useRef<HTMLInputElement>(null)
  const { findTask, editTask, setEditTask } = useTasksStore((store) => store)
  const task = findTask(id)

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  useEffect(() => {
    setInputValue(text)
    inputRef?.current?.focus()
  }, [task.isEditable])

  return (
    <>
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
    </>
  )
}
