import React, { type FC } from 'react'
import { useSettingStore } from '../../../store/setting/useSettingStore'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { convertMinutesTomatoToString } from '../../../utils/convertMinutesTomatoToString'
import { CountMinutesTasks } from '../../molecules/CountMinutesTasks/CountMinutesTasks'
import { TasksList } from '../../organisms/TasksList'

export const TasksListWrapper: FC = () => {
  const list = useTasksStore(state => state.tasks)
  const tomatoCountTime = list.reduce((acc, task) => acc + task.tomatoTimerCount * useSettingStore.getState().timeOneTomato, 0)
  const tomatoCountTimeText = convertMinutesTomatoToString(tomatoCountTime)
  return (
    <div>
    <TasksList list={list}/>
    <CountMinutesTasks text={ tomatoCountTimeText }/>
    </div>
  )
}
