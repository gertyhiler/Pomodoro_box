import React, { type FC } from 'react'
import { AddTask } from '../../organisms/AddTask'
import { Description } from '../../organisms/Description'
import { TasksListWrapper } from '../TasksListWrapper'
import style from './style.module.css'

export const LeftColMainPage: FC = () => {
  return (
    <div className={style.left}>
      <Description/>
      <AddTask/>
      <TasksListWrapper/>
    </div>
  )
}
