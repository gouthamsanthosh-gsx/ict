import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
	var [name,setName] = useState("World");
	var [input,setInput] = useState();
	const changeName = () => {
		console.log("btn clicked!");
		setName(input);
	}
	const eventHandler = (e) => {
		setInput(e.target.value);
	}
  return (
	<div>
	  <div style={{textAlign:'center',marginTop:'5%'}}>
		<Typography variant='h3'>Hello {name}</Typography>
		<br /><br />
		<TextField variant='outlined' label='Enter your name' onChange={eventHandler}/>
		<br /><br />
		<Button variant='contained' onClick={changeName}>Change</Button>
	  </div>
	</div>
  )
}

export default StateBasics
