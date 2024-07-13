import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const Index = () => {
	var [output,setOutput] = useState({});
  return (
	<div>
	  <Typography variant='h3'>Dashboard</Typography>
	  <Grid container spacing={2} padding={5}>
		<Grid item xs={12} md={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 180 }}
					image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
					Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	  </Grid>
	</div>
  )
}

export default Index
