import React, { type FC } from 'react'
import { ArrowSvg } from '../../atoms/ArrowSvg'
import { type IChooseSummary } from './IChooseSummary'
import style from './style.module.css'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const ChooseSummary: FC<IChooseSummary> = ({ children }) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <summary className={`${style.summary} ${isLight ? '' : style.summary_dark}`}>
      { children }
      <ArrowSvg/>
    </summary>
  )
}

//   <Text color='black' text={title}/>
