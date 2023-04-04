import React, { useState, type FC } from 'react'
import { Button } from '../../atoms/Buttons'
import { type ISettingCart } from './ISettingCart'
import { TextH3 } from '../../atoms/TextH3'
import style from './style.module.css'

export const SettingCart: FC<ISettingCart> = ({ text, onClick, min }) => {
  const [minutes, setMinutes] = useState(min)
  function handleClick (): void {
    onClick(minutes)
  }
  return (
    <li className={style.item}>
        <TextH3 text={text} />
        <input className={style.input} value={minutes} onChange={(e) => { setMinutes(Number(e.target.value)) }}/>
        <Button text='Изменить' onClick={handleClick}/>
    </li>
  )
}
