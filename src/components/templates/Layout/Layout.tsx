import React, { type FC } from 'react'
import { Header } from '../../organisms/Header'
import { type ILayoutProps } from './ILayout'
import './style.css'
import { AudioNotification } from '../../atoms/AudioNotification'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <div>
      <Header/>
      <main className={`transition-colors ${isLight ? '' : 'bg-bg-dark'}`}>
        <div className='container mx-auto pt-20 flex gap-5 page'>
          { children }
        </div>
      </main>
      <AudioNotification/>
    </div>
  )
}
