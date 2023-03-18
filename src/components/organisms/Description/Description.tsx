import React, { type FC } from 'react'
import { H2Description } from '../../molecules/H2Description'
import { LiDescription } from '../../molecules/LiDescription'
import style from './style.module.css'

export const Description: FC = () => {
  return (
    <div className={style.flexSetting}>
      <H2Description/>
      <ul className={style.flexSetting}>
        <LiDescription text='Выберите категорию и напишите название текущей задачи'/>
        <LiDescription text='Запустите таймер («помидор»)'/>
        <LiDescription text='Работайте пока «помидор» не прозвонит'/>
        <LiDescription text='Сделайте короткий перерыв (3-5 минут)'/>
        <LiDescription text='Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).'/>
      </ul>
    </div>
  )
}
