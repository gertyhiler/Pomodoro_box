import React, { type FC } from 'react'
import { Text } from '../../atoms/Text'
import { type IChooseElement } from './IChooseElement'
import style from './style.module.css'

export const ChooseElement: FC<IChooseElement> = ({ text }) => {
  return (
    <div className={style.wrapper}>
      <Text color='black' text={text}/>
    </div>
  )
}
