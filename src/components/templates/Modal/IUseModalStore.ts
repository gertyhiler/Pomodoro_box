export interface IUseModalStore {
  isModalOpen: boolean
  taskId: number | null

  setIsModalOpen: (isOpen: boolean) => void
  setTaskId: (id: number | null) => void
}
