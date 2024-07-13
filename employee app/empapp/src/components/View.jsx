import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const View = () => {
	const navigate = useNavigate();
	var [output,setOutput] = useState([]);
	
	const loadData = ()=>{
		axios.get("http://localhost:3000/get").then(
			(res)=>{
				setOutput(res.data);
			}
		).catch(
			(err)=>{
				console.error(err);
			}
		)
	};
	
	const deleteEmp = (id)=>{
		axios.delete("http://localhost:3000/delete/" + id).then(
			(res)=>{
				console.log(res);
				loadData();
			}
		).catch(
			(err)=>{
				console.error(err);
			}
		)
	};

	useEffect(()=>{
		loadData();
	},[]);
	
  return (
	<div>
	  <Typography variant='h4'>Employee count: {output.length}</Typography>
	  <br />
	  <Button variant='contained' color='success' onClick={()=>{
		loadData();
	  }}>Refresh</Button>
	  <TableContainer>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>NAME</TableCell>
					<TableCell>AGE</TableCell>
					<TableCell>DEPARTMENT</TableCell>
					<TableCell>SALARY</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{output.map((val,i)=>{
					return (
						<TableRow key={i}>
							<TableCell>{val.Name}</TableCell>
							<TableCell>{val.Age}</TableCell>
							<TableCell>{val.Department}</TableCell>
							<TableCell>{val.Salary}</TableCell>
							<TableCell>
								<Button color='primary' variant='contained' onClick={()=>{
									navigate('/update',{state:val})
								}}>Update</Button>&nbsp;&nbsp;
								<Button color='error' variant='contained' onClick={()=>{
									deleteEmp(val._id);
								}}>Delete</Button>
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	  </TableContainer>
	</div>
  )
}

export default View
