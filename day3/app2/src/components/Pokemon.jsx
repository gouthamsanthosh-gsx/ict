import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pokemon = () => {
	var [output,setOutput] = useState([]);
	// useEffect - used to render page on load
	useEffect(() => {
		axios.get("https://dummyapi.online/api/pokemon").then(
			(res) => {
				setOutput(res.data);
			}
		).catch(
			(err) => {
				console.log(err);
			}
		)
	},[])
  return (
	<div>
	  <Typography variant='h3'>{output.length} Pokemon's</Typography>
	  <Grid container spacing={2}>
		{output.map((val,i) => {
			return (
				<Grid item xs={12} md={4}>
					<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={val.image_url}
						title={val.pokemon}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
						{val.pokemon}
						</Typography>
						<Typography variant="body2" color="text.secondary">
						Type: {val.type}
						</Typography>
						<Typography variant="body2" color="text.secondary">
						Location: {val.location}
						</Typography>
						<Typography variant="body2" color="text.secondary">
						Hit points: {val.hitpoints}
						</Typography>
					</CardContent>
					</Card>
				</Grid>
			)
		})}
	  </Grid>
	</div>
  )
}

export default Pokemon
