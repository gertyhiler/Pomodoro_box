import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Analytic } from './components/pages/Analytic/Analytic'
import { Main } from './components/pages/main'

function App (): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/analytic' element={<Analytic/>}/>
    </Routes>
  )
}

export default App
