import React, { type FC } from 'react'
import { Delimiter } from '../../atoms/Delimiter'
import { Task } from '../../molecules/Task'
import { type ITasksListProps } from './ITastsListProps'
import { type Task as ITaskStore } from '../../../store/tasks/Task'
function sortTaskListByOrderKey (a: ITaskStore, b: ITaskStore): number {
  if (a.order > b.order) {
    return 1
  } else {
    return -1
  }
}
export const TasksList: FC<ITasksListProps> = ({ list }) => {
  return (
    <ul>
      {list.sort(sortTaskListByOrderKey).map(({ tomatoTimerCount, title, id }) => {
        return (<Task count={tomatoTimerCount} text={title} key={id} id={id}/>)
      })}
      <Delimiter/>
    </ul>
  )
}
