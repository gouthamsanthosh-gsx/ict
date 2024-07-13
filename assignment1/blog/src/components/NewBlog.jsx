import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const NewBlog = () => {
  return (
	<div>
	  <Typography variant='h3'>Create a new blog</Typography>
	  <br /><br /><br />
	  <TextField label='Title'  style={{width:'80%'}}></TextField>
	  <br /><br />
	  <TextField label='Description' multiline style={{width:'80%'}}></TextField>
	  <br /><br /><br />
	  <TextField label='Author' size='small' style={{width:'40%'}}></TextField>
	  <br /><br />
	  <Button variant='contained' style={{background:'#00a152'}}>Create</Button>
	</div>
  )
}

export default NewBlog
