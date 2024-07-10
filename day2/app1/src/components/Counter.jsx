import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
	var [val,setValue] = useState(0);
	const increase = () => {
		val ++;
		setValue(val);
	}
	const decrease = () => {
		val --;
		setValue(val);
	}
  return (
	<div>
	  <Typography variant='h3'>Counter: {val}</Typography>
	  <Button variant='contained' onClick={decrease}>-</Button>&nbsp;
	  <Button variant='contained' onClick={increase}>+</Button>&nbsp;
	</div>
  )
}

export default Counter
