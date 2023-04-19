import React, { type FC } from 'react'
import { useTasksStore } from '../../../store/tasks/useTasksStore'
import { TaskTitle } from '../../molecules/TaskTitle'
import { TrackerHeader } from '../../molecules/TrackerHeader'
import { TimerControl } from '../../organisms/TimerControl'
import { TimerTask } from '../../organisms/TimerTask'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const RightColMainPage: FC = () => {
  const task = useTasksStore(state => state.tasks)
  const isLight = useSwitcherState(state => state.isLight)
  let completedTomato, title
  if (task.length !== 0) {
    title = task[0].title
    completedTomato = task[0].completedTomato
  }
  return (
    <section className={`${style.section} ${isLight ? '' : style.section_dark}`}>
      <TrackerHeader text={title ?? 'Нет задач'} trackerCounter={(completedTomato != null) ? completedTomato + 1 : 0}/>
      <TimerTask/>
      <TaskTitle taskCount={1} taskTitle={title ?? 'Не выбрано'}/>
      <TimerControl/>
    </section>
  )
}
