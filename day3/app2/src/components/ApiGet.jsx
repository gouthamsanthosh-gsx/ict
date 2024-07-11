import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiGet = () => {
	var [output,setOutput] = useState([]);
	// useEffect - used to render page on load
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then(
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
	  <Typography variant='h3'>Axios</Typography>
	  <TableContainer>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Name</TableCell>
					<TableCell>Phone</TableCell>
					<TableCell>Username</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{output.map((val,i) => {
					return(
						<TableRow key={i}>
							<TableCell>{val.name}</TableCell>
							<TableCell>{val.phone}</TableCell>
							<TableCell>{val.username}</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	  </TableContainer>
	</div>
  )
}

export default ApiGet
