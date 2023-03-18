import { create } from 'zustand'
import { type IUseModalStore } from './IUseModalStore'

export const useModalStore = create<IUseModalStore>((set) => ({
  isModalOpen: false,
  taskId: null,
  setIsModalOpen: (isOpen) => { set(state => ({ isModalOpen: isOpen })) },
  setTaskId: (id) => { set(() => ({ taskId: id })) }
}))
