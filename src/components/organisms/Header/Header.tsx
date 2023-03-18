import React, { type FC } from 'react'
import { Logo } from '../../molecules/Logo'
import { Statistic } from '../../molecules/Statistic'
import style from './style.module.css'

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <nav className='container mx-auto'>
        <ul className={style.list}>
          <li><Logo/></li>
          <li><Statistic/></li>
        </ul>
      </nav>
    </header>
  )
}
