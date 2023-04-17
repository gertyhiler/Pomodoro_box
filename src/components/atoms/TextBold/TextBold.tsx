import React, { useState, type FC, useEffect } from 'react'
import { type ITextBold } from './ITextBold'
import style from './style.module.css'
import { useSwitcherState } from '../Switcher/state'

export const TextBold: FC<ITextBold> = ({ text, color }) => {
  const isLight = useSwitcherState(state => state.isLight)
  const [calculateColor, setCalculateColor] = useState(style[color])
  useEffect(() => {
    if (!isLight) {
      if (color === 'black') setCalculateColor(style.white)
      else if (color === 'white') setCalculateColor(style.black)
      else setCalculateColor(style.gray_dark)
    } else {
      setCalculateColor(style[color])
    }
  }, [isLight])
  return (
    <p className={`${style.text} ${calculateColor}`}>
      { text }
    </p>
  )
}
