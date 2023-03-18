import { type Task } from './Task'

export interface IUseTasksStore {
  tasks: Task[]

  addTask: (task: Task) => void
  findTask: (key: number) => Task
  increaseTomatoCount: (key: number) => void
  decreaseTomatoCount: (key: number) => void
  setEditTask: (key: number) => void
  deleteTask: (key: number) => void
  editTask: (key: number, value: string) => void
  setCompletedTask: (key: number) => void
}
