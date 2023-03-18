import React, { type FC } from 'react'
import { Input } from '../../atoms/Input'
import { useInputStore } from './store/useInputStore'

export const InputTask: FC = () => {
  const { value, setValue } = useInputStore(state => state)
  function onChange (e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }
  return (
    <Input placeholder='Название задачи' value={value} onChange={onChange}/>
  )
}
