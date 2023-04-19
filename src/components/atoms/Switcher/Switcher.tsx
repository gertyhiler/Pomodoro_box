import React, { type FC } from 'react'
import { useSwitcherState } from './state/useSwitcherState'
import style from './style.module.css'
import { SwitcherLightSvg } from '../SwitcherLightSvg'
import { SwitcherDarkSvg } from '../SwitcherDarkSvg'
export const Switcher: FC = () => {
  const { isLight, setIsLight } = useSwitcherState(state => state)
  return (
    <>
      <div
        className={style.switcher}
        onClick={() => {
          setIsLight(!isLight)
        }}
      >
        {/* Switch */}
        <div
          className={` ${style.switcher_wrapper} ${
            isLight ? '' : style.switcher_wrapper_dark}
          `}
        >
         <SwitcherLightSvg/>
         <SwitcherDarkSvg/>
        </div>
      </div>
    </>
  )
}
