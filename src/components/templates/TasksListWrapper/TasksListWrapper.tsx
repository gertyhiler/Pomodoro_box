import React, { type FC } from 'react'
import { useSettingStore } from '../../../store/setting/useSettingStore'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { convertMinutesTomatoToString } from '../../../utils/convertMinutesTomatoToString'
import { CountMinutesTasks } from '../../molecules/CountMinutesTasks/CountMinutesTasks'
import { TasksList } from '../../organisms/TasksList'
import { type Task } from '../../../store/tasks/Task'

const reduceTomatoTime = (acc: number, task: Task): number => {
  return acc + task.tomatoTimerCount * useSettingStore.getState().timeOneTomato
}

export const TasksListWrapper: FC = () => {
  const list = useTasksStore((state) => state.tasks)
  const tomatoCountTime = list.reduce(reduceTomatoTime, 0)
  return (
    <div>
      <TasksList list={list} />
      <CountMinutesTasks text={convertMinutesTomatoToString(tomatoCountTime)} />
    </div>
  )
}
