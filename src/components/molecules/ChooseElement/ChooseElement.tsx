import React, { type FC } from 'react'
import { Text } from '../../atoms/Text'
import { type IChooseElement } from './IChooseElement'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const ChooseElement: FC<IChooseElement> = ({ text }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <div className={`${style.wrapper} ${isLight ? '' : style.wrapper_dark}`}>
      <Text color='black' text={text}/>
    </div>
  )
}
