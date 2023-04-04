import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import { SettingSvg } from '../../atoms/SettingSvg'
import style from './style.module.css'

export const SettingLink: FC = () => {
  return (
    <Link to={'/setting'} className={style.link}>
      <SettingSvg/>
      <span className={style.text}>Настройки</span>
    </Link>
  )
}
