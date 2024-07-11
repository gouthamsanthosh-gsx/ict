import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const CardApi = () => {
  return (
	<div>
	  <Typography variant='h3'>Card View</Typography>
	  <Grid container spacing={2}>
		<Grid item xs={12} md={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
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
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Grid>

		<Grid item xs={12} md={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
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
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Grid>

		<Grid item xs={12} md={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
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
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Grid>

		<Grid item xs={12} md={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
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
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Grid>
	  </Grid>
	</div>
  )
}

export default CardApi
