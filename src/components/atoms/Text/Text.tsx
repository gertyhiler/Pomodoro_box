import React, { useState, type FC, useEffect } from 'react'
import { type ITextProps } from './ITextProps'
import style from './style.module.css'
import { useSwitcherState } from '../Switcher/state'

export const Text: FC<ITextProps> = ({ text, color }) => {
  const isLight = useSwitcherState(state => state.isLight)
  const [calculateColor, setCalculateColor] = useState(style[color])
  useEffect(() => {
    if (!isLight) {
      if (color === 'black') setCalculateColor(style.white)
      else if (color === 'white') setCalculateColor(style.black)
      else setCalculateColor(style.red)
    } else {
      setCalculateColor(style[color])
    }
  }, [isLight])
  return (
    <span className={`${style.text} ${calculateColor}`}>
      { text }
    </span>
  )
}
