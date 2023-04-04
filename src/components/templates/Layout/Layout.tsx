import React, { type FC } from 'react'
import { Header } from '../../organisms/Header'
import { type ILayoutProps } from './ILayout'
import './style.css'
import { AudioNotification } from '../../atoms/AudioNotification'

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Header/>
      <main className='container mx-auto pt-20 flex gap-5 page'>
        { children }
      </main>
      <AudioNotification/>
    </div>
  )
}
