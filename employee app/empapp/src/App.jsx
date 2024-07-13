import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Update from './components/Update'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<View/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/update' element={<Update/>} />
      </Routes>
    </>
  )
}

export default App
