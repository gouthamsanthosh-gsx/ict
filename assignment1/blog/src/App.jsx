import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import NewBlog from './components/NewBlog'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/add' element={<NewBlog />} />
      </Routes>
    </>
  )
}

export default App
