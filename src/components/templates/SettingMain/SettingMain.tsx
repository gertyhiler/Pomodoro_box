import React, { type FC } from 'react'
import { SettingCart } from '../../organisms/SettingCart'
import { useSettingStore } from '../../../store/setting/useSettingStore'

export const SettingMain: FC = () => {
  return (
    <ul className='flex justify-between w-full pt-10 h-screen'>
     <SettingCart text='Время короткого перерыва' min={useSettingStore.getState().timeShortBreak} onClick={useSettingStore.getState().setNewTimeShortBreak}/>
     <SettingCart text='Время длинного перерыва' min={useSettingStore.getState().timeLongBreak} onClick={useSettingStore.getState().setNewLongBreak}/>
     <SettingCart text='Время одной помидорки' min={useSettingStore.getState().timeOneTomato} onClick={useSettingStore.getState().setNewTimeOneTomato}/>
    </ul>
  )
}
