import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Analytic } from './components/pages/Analytic'
import { Main } from './components/pages/main'
import { Setting } from './components/pages/Setting'

function App (): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/analytic' element={<Analytic/>}/>
      <Route path='/setting' element={<Setting/>}/>
    </Routes>
  )
}

export default App
