import React, { type FC } from 'react'
import { useSwitcherState } from '../Switcher/state'

export const ArrowSvg: FC = () => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 1L8 8L1 1" stroke={isLight ? '#B7280F' : '#47c3d9'} strokeWidth="2" />
    </svg>
  )
}
