import React, { type FC } from 'react'
import { TextBold } from '../../atoms/TextBold'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const FocusCartTitle: FC = () => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <TextBold text={'Фокус'} color={isLight ? 'black' : 'white'}/>
  )
}
