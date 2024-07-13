import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
	<div>
	  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#00a152'}}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Blog App
          </Typography>
		  <div style={{ flexGrow:1 }}></div>
      		<Link to={'/'} style={{textDecoration:'none', color:'#FFFFFF'}}>
			  <Button color='inherit'>Home</Button>
		  	</Link>
		  	<Link to={'/add'} style={{textDecoration:'none', color:'#FFFFFF'}}>
			  <Button color='inherit'>Add Blog</Button>
		  	</Link>
        </Toolbar>
      </AppBar>
    </Box>
	<br /><br />
	</div>
  )
}

export default NavBar
