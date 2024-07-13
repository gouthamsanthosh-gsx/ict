import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  )
}

export default App
