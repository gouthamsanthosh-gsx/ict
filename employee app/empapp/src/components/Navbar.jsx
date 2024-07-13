import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	
  <div>
	  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background:'#FFFFFF',color:'#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Employee App
          </Typography>
		  <div style={{ flexGrow:1 }}></div>
      <Link to={'/'} style={{textDecoration:'none', color:'#000000'}}>
			  <Button color='inherit'>View</Button>
		  </Link>
		  <Link to={'/add'} style={{textDecoration:'none', color:'#000000'}}>
			  <Button color='inherit'>Add</Button>
		  </Link>
        </Toolbar>
      </AppBar>
    </Box>
	<br /><br />
	</div>

  )
}

export default Navbar
