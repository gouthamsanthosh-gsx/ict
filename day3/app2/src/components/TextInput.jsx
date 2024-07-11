import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const TextInput = () => {
	const [inputs,setInputs] = useState({sname:'',age:'',place:''});
	const inputHandler = (e) => {
		// ... means don't overwrite existing values - advanced
		setInputs({...inputs,[e.target.name]:e.target.value});
		console.log(inputs);
	}
  return (
	<div>
		<Typography variant='h4'>Fill the form</Typography>
		<br />
		<TextField variant='outlined' label='Name' onChange={inputHandler} name='sname' value={inputs.sname}/>
		<br /><br />
		<TextField variant='outlined' label='Age' onChange={inputHandler} name='age' value={inputs.age}/>
		<br /><br />
		<TextField variant='outlined' label='Place' onChange={inputHandler} name='place' value={inputs.place}/>
		<br /><br />
		<Button variant='contained'>Submit</Button>
	</div>
  )
}

export default TextInput
