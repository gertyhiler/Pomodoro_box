import React, { type FC } from 'react'
import { Dot } from '../../atoms/Dot'
import { Text } from '../../atoms/Text'
import { type ILiDescription } from './ILiDescription'
import style from './style.module.css'

export const LiDescription: FC<ILiDescription> = ({ text }) => {
  return (
    <li className={style.li}>
      <div className={style.dotPosition}><Dot/></div>
      <Text text={text} color='black'/>
    </li>
  )
}
