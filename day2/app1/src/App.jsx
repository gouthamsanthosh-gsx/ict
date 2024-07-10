import { useState } from 'react'
import './App.css'
import First from './components/First'
import Registration from './components/Registration'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			{/* <First/> */}
			{/* <Registration /> */}
			{/* <Tabs /> */}
			<Navbar />
			<Routes>
				<Route path='/' element={<First/>}/>
				<Route path='/reg' element={<Registration/>}/>
				<Route path='/tabs' element={<Tabs/>}/>
			</Routes>
		</>
	)
}

export default App
