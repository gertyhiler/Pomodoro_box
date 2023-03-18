import React, { type FC } from 'react'
import { SecondaryText } from '../../atoms/SecondaryText'
import { Text } from '../../atoms/Text'
import { type ITaskTitle } from './ITaskTitle'
import style from './style.module.css'

export const TaskTitle: FC<ITaskTitle> = ({ taskCount, taskTitle }) => {
  return (
    <div className={style.wrapper}>
      <SecondaryText color='black' text={`Задача ${taskCount} - `}/>
      <Text color='black' text={taskTitle}/>
    </div>
  )
}
