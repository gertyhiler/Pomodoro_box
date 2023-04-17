import React, { type FC } from 'react'
import { AnalyticHeader } from '../../templates/AnalyticHeader'
import { Layout } from '../../templates/Layout'
import { LeftColAnalyticPage } from '../../templates/LeftColAnalyticPage'
import { AnalyticBottom } from '../../templates/AnalyticBottom'
import { AnalyticRechart } from '../../organisms/AnalyticRechart'
import { useSwitcherState } from '../../atoms/Switcher/state'

export const Analytic: FC = () => {
  const isLight = useSwitcherState(state => state.isLight)
  return (
    <Layout>
      <div className='w-full flex flex-col gap-6'>
        <AnalyticHeader />
        <div className='flex basis-5 gap-6'>
          <LeftColAnalyticPage />
          <div className={`w-full ${isLight ? 'bg-bg-f4' : 'bg-bg-f4-invert'}`}>
            <AnalyticRechart/>
          </div>
        </div>
        <AnalyticBottom />
      </div>
    </Layout>
  )
}
