import React, { useEffect, type FC, useRef } from 'react'
import audio from '../../../assets/audio/timerSound.mp3'
import ReactDOM from 'react-dom'
import { useAudioStore } from './store'

export const AudioNotification: FC = () => {
  const audioElement = document.getElementById('sound')
  if (audioElement === null) return (<div>Ошибка отображения аудио элемента</div>)
  const isPlay = useAudioStore(state => state.isPlay)
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    if (isPlay) {
      if (audioRef.current === null) return
      void audioRef.current.play()
    }
  })
  return (
    ReactDOM.createPortal((
    <audio src={audio} ref={audioRef}></audio>), audioElement)
  )
}
