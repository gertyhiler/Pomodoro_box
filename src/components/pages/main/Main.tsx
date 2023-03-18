import React, { type FC } from 'react'
import { Layout } from '../../templates/Layout'
import { LeftColMainPage } from '../../templates/LeftColMainPage/LeftColMainPage'
import { RightColMainPage } from '../../templates/RightColMainPage'

export const Main: FC = () => {
  return (
  <Layout>
    <LeftColMainPage/>
    <RightColMainPage/>
  </Layout>
  )
}
