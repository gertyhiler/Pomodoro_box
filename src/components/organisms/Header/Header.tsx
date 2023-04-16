import React, { type FC } from 'react'
import { Logo } from '../../molecules/Logo'
import { Statistic } from '../../molecules/Statistic'
import style from './style.module.css'
import { SettingLink } from '../../molecules/SettingLink/SettingLink'
import { Switcher } from '../../atoms/Switcher'

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <nav className='container mx-auto flex items-center'>
        <span><Logo/></span>
        <ul className={style.list}>
          <li><Switcher/></li>
          <li><Statistic/></li>
          <li><SettingLink/></li>
        </ul>
      </nav>
    </header>
  )
}
