import React, { type FC } from 'react'
import { createPortal } from 'react-dom'
import { ModalQuestion } from '../../organisms/ModalQuestion'
import style from './style.module.css'

export const Modal: FC = () => {
  const node = document.getElementById('portal-modal')
  if (node == null) return <div>Нет элемента</div>
  return createPortal((
    <div className={style.wrapper}>
      <ModalQuestion/>
    </div>
  ), node)
}
