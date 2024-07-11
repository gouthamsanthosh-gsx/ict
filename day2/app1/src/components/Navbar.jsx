import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My App
          </Typography>
		  <div style={{flex:1}}></div>
          <Button>
			<Link to={'/'} style={{textDecoration:'none', color:'white'}}>Login</Link>
		  </Button>
		  <Button>
			<Link to={'/reg'} style={{textDecoration:'none', color:'white'}}>Registration</Link>
		  </Button>
		  <Button>
			<Link to={'/tabs'} style={{textDecoration:'none', color:'white'}}>Tables</Link>
		  </Button>
		  <Button>
			<Link to={'/sb'} style={{textDecoration:'none', color:'white'}}>StateBasics</Link>
		  </Button>
		  <Button>
			<Link to={'/counter'} style={{textDecoration:'none', color:'white'}}>Counter</Link>
		  </Button>
		  <Button>
			<Link to={'/test'} style={{textDecoration:'none', color:'white'}}>Test</Link>
		  </Button>
		  <Button>
			<Link to={'/'} style={{textDecoration:'none', color:'white'}}>Logout</Link>
		  </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
