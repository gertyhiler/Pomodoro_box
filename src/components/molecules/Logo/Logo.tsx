import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import { LogoImg } from '../../atoms/LogoImg'
import style from './style.module.css'

export const Logo: FC = () => {
  return (
    <Link to="/" className={style.link}>
      <LogoImg/>
      <h1 className={style.text}>pomodoro_box</h1>
    </Link>
  )
}
