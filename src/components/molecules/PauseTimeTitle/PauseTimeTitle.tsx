import React, { type FC } from 'react'
import { TextBold } from '../../atoms/TextBold'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const PauseTimeTitle: FC = () => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <TextBold text={'Время на паузе'} color={isLight ? 'black' : 'white'}/>
  )
}
