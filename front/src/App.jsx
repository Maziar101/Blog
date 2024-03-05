import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}
