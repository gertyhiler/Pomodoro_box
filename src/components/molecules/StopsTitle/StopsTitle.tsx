import React, { type FC } from 'react'
import { TextBold } from '../../atoms/TextBold'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const StopsTitle: FC = () => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <TextBold text={'Остановки'} color={isLight ? 'black' : 'white'}/>
  )
}
