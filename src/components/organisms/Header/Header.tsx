import React, { type FC } from 'react'
import { Logo } from '../../molecules/Logo'
import { Statistic } from '../../molecules/Statistic'
import style from './style.module.css'
import { SettingLink } from '../../molecules/SettingLink/SettingLink'
import { Switcher } from '../../atoms/Switcher'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const Header: FC = () => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <header className={`${style.header} ${isLight ? '' : 'bg-bg-dark-header'}`}>
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
