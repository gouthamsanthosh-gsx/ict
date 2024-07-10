import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
	<div>
	  <Typography variant='h3'>Registration Form</Typography>
	  <br />
	  <TextField variant='outlined' label='Name' />
	  <br /><br />
	  <TextField variant='outlined' label='Age' />
	  <br /><br />
	  <TextField variant='outlined' label='Place' />
	  <br /><br />
	  <TextField variant='outlined' label='Email' />
	  <br /><br />
	  <TextField variant='outlined' label='Username' />
	  <br /><br />
	  <TextField variant='outlined' label='Password' type='password' />
	  <br /><br />
	  <Button variant='contained'>Submit</Button>
	</div>
  )
}

export default Registration
