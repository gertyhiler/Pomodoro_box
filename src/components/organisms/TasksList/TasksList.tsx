import React, { type FC } from 'react'
import { Delimiter } from '../../atoms/Delimiter'
import { Task } from '../../molecules/Task'
import { type ITasksListProps } from './ITastsListProps'

export const TasksList: FC<ITasksListProps> = ({ list }) => {
  return (
    <ul>
      {list.map(({ tomatoTimerCount, title }, index) => {
        return (<Task count={tomatoTimerCount} text={title} key={index} id={index}/>)
      })}
      <Delimiter/>
    </ul>
  )
}

// TODO: Вынести в шаблон лист с задачами и на уровне шаблона организовать логику работы с данными
