import React, { type FC } from 'react'
import { AnalyticHeader } from '../../templates/AnalyticHeader'
import { Layout } from '../../templates/Layout'
import { LeftColAnalyticPage } from '../../templates/LeftColAnalyticPage'
import { AnalyticBottom } from '../../templates/AnalyticBottom'
import { AnalyticRechart } from '../../organisms/AnalyticRechart'

export const Analytic: FC = () => {
  return (
    <Layout>
      <div className='w-full flex flex-col gap-6'>
        <AnalyticHeader />
        <div className='flex basis-5 gap-6'>
          <LeftColAnalyticPage />
          <div className='w-full bg-bg-f4'>
            <AnalyticRechart/>
          </div>
        </div>
        <AnalyticBottom />
      </div>
    </Layout>
  )
}
