import React, { type FC } from 'react'
import { type IInput } from './IInput'
import style from './style.module.css'

export const Input: FC<IInput> = ({ placeholder, value, onChange }) => {
  return (
    <input placeholder={placeholder} value={value} onChange={(e) => { onChange(e) }} className={style.input}/>
  )
}

// Using

// const [input, setInput] = useState('');
// function onChange(e: React.ChangeEvent<HTMLInputElement>) {
//    setInput(e.target.value);
//  }
// <Input placeholder='Enter text' value={input} onChange={onChange}/>
