import { type Task } from '../../../../store/tasks/Task'

export interface IUseCurrentTaskState {
  currentTask: Task
  setCurrentTask: (task: Task) => void
}
