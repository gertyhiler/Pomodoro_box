import React, { type FC } from 'react'
import style from './style.module.css'
import { SettingTitle } from '../../molecules/SettingTitle'

export const SettingHeader: FC = () => {
  return (
    <div className={style.wrapper}>
      <SettingTitle/>
    </div>
  )
}
