import { Card, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Index = () => {
	var [output,setOutput] = useState([]);
	useEffect(()=>{
		axios.get("https://jsonplaceholder.typicode.com/posts").then(
			(res)=>{
				setOutput(res.data);
				console.log(output);
			}
		).catch(
			(err)=>{
				console.error(err);
			}
		);
	},[]);
  return (
	<div>
	  <Typography variant='h3'>Dashboard</Typography>
	  <Grid container spacing={2} padding={5}>
		{output.map((val,i)=>{
			return (
				<Grid item xs={12} md={4}>
					<Card sx={{ maxWidth: 'max-content' }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
							{val.id}. {val.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
							{val.body}
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

export default Index
