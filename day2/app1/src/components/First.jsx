// rafce - lemma for the initial structure
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
	<div>
	  <Typography variant='h2'>Sample Text Field</Typography>
	  <br /><br />
	  <TextField variant='outlined' label='Outlines' />
	  <br /><br />
	  <TextField variant='filled' label='Filled' />
	  <br /><br />
	  <TextField variant='standard' label='Standard' />
	  <br /><br />
	  <Button variant="text">Text</Button>&nbsp;
	  <Button variant="contained" color='secondary'>Contained success</Button>&nbsp;
	  <Button variant="outlined" color='error'>Outlined error</Button>&nbsp;
	</div>
  )
}

export default First
