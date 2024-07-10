import { useState } from 'react'
import './App.css'
import First from './components/First'
import Registration from './components/Registration'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'

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
				<Route path='/sb' element={<StateBasics/>}/>
				<Route path='/counter' element={<Counter/>}/>
			</Routes>
		</>
	)
}

export default App
