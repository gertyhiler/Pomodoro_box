import { type Task as ITaskStore } from '../../../store/tasks/Task'
export function dragStartHandler (e: React.DragEvent<HTMLLIElement>, task: ITaskStore, setCurrentTask: (task: ITaskStore) => void): void {
  setCurrentTask(task)
}

export function dragOverHandler (e: React.DragEvent<HTMLLIElement>): void {
  e.preventDefault()
}

export function dragEndHandler (e: React.DragEvent<HTMLLIElement>): void {
  e.preventDefault()
}

export function dropHandler (e: React.DragEvent<HTMLLIElement>, task: ITaskStore, setCurrentTask: (task: ITaskStore) => void, setNewOrder: (key: string, order: number) => void, currentTask: ITaskStore): void {
  setNewOrder(currentTask.id, task.order)
  setNewOrder(task.id, currentTask.order)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  setCurrentTask({} as ITaskStore)
}
