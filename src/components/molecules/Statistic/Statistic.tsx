import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import { StatisticSvg } from '../../atoms/StatisticSvg'
import style from './style.module.css'

export const Statistic: FC = () => {
  return (
    <Link to="/analytic" className={style.link}>
      <StatisticSvg/>
      <span className={style.text}>Статистика</span>
    </Link>
  )
}
