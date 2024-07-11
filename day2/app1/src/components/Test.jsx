import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Test = () => {
	var [place,setPlace] = useState("Page");
	const changePlace = (name) => {
		setPlace(name);
	}
  return (
	<div>
	  <Typography variant='h3'>Welcome to {place}</Typography>
	  <br /><br />
	  <Button variant='contained' onClick={() => changePlace("Home")}>Home</Button>&nbsp;
	  <Button variant='contained' onClick={() => changePlace("Gallery")}>Gallery</Button>&nbsp;
	  <Button variant='contained' onClick={() => changePlace("Contact")}>Contact</Button>&nbsp;
	</div>
  )
}

export default Test
