import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<View/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
    </>
  )
}

export default App
