export interface IUseModalStore {
  isModalOpen: boolean
  taskId: string | null

  setIsModalOpen: (isOpen: boolean) => void
  setTaskId: (id: string | null) => void
}
