import { type Task } from './Task'

export interface IUseTasksStore {
  tasks: Task[]

  addTask: (title: string) => void
  findTask: (key: string) => Task
  increaseTomatoCount: (key: string) => void
  decreaseTomatoCount: (key: string) => void
  setEditTask: (key: string) => void
  deleteTask: (key: string) => void
  editTask: (key: string, value: string) => void
  setCompletedTask: (key: string) => void
  setNewOrder: (key: string, order: number) => void
}
