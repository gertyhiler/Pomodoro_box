import React, { type FC } from 'react'
import { type ITomatoCounter } from './ITomatoCounter'
import style from './style.module.css'
import { useSwitcherState } from '../Switcher/state'

export const TomatoCounter: FC<ITomatoCounter> = ({ count }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <div className={style.counter}>
     <span className={`${style.text} ${isLight ? '' : 'text-primary-color-invert'}`}>{ count }</span>
    </div>
  )
}
