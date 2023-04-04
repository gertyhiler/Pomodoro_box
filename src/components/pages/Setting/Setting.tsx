import React, { type FC } from 'react'
import { Layout } from '../../templates/Layout'
import { SettingHeader } from '../../templates/SettingHeader'
import { SettingMain } from '../../templates/SettingMain'

export const Setting: FC = () => {
  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <SettingHeader/>
        <SettingMain/>
      </div>
    </Layout>
  )
}
