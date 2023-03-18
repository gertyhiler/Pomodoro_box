import React, { useRef, type FC } from 'react'
import { Header } from '../../organisms/Header'
import { type ILayoutProps } from './ILayout'
import './style.css'

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const mainRef = useRef(null)
  return (
    <div>
      <Header/>
      <main className='container mx-auto pt-20 flex gap-5 page' ref={mainRef}>
        { children }
      </main>
    </div>
  )
}
