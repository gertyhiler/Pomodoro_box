import React, { type FC } from 'react'
import { H2Statistic } from '../../molecules/H2Statistic'
import { Choose } from '../../organisms/Choose'
import style from './style.module.css'

export const AnalyticHeader: FC = () => {
  return (
    <section className={style.AnalyticHeader}>
      <H2Statistic/>
      <Choose/>
    </section>
  )
}
