import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
	var [name,setName] = useState("World");
	const changeName = () => {
		console.log("btn clicked!");
		setName("goutham");
	}
  return (
	<div>
	  <div style={{textAlign:'center',marginTop:'5%'}}>
		<Typography variant='h3'>Hello {name}</Typography>
		<br /><br />
		<Button variant='contained' onClick={changeName}>Change</Button>
	  </div>
	</div>
  )
}

export default StateBasics
