import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
	<div>
	  <Typography variant='h3'>Create employee</Typography>
	  <br /><br />
	  <TextField label='Full Name' required></TextField>
	  <br /><br />
	  <TextField label='Age' size='small'></TextField>
	  <br /><br />
	  <TextField label='Department' required></TextField>
	  <br /><br />
	  <TextField label='Salary' size='small'></TextField>
	  <br /><br />
	  <Button variant='contained'>Add Employee</Button>
	</div>
  )
}

export default Add
