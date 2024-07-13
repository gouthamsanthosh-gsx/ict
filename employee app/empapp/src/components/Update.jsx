import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
	const navigate = useNavigate();
	const location = useLocation();
	var val = location.state;
	const [inputs,setInputs] = useState({});
	
	const inputHandler = (e)=>{
		setInputs({...inputs,[e.target.name]:e.target.value});
	};

	const updateEmp = async(data)=>{
		await axios.put("http://localhost:3000/update/" + val._id,data).then(
			(res)=>{
				console.log("data updated");
				alert("Employee updated");
			}
		).catch(
			(err)=>{
				console.error(err);
			}
		);
		navigate('/');
	};

  return (
	<div>
	  <Typography variant='h3'>Update employee</Typography>
	  <br /><br />
	  <TextField label='Full Name' required onChange={inputHandler} name='Name' defaultValue={val.Name}></TextField>
	  <br /><br />
	  <TextField label='Age' size='small' onChange={inputHandler} name='Age' defaultValue={val.Age}></TextField>
	  <br /><br />
	  <TextField label='Department' required onChange={inputHandler} name='Department' defaultValue={val.Department}></TextField>
	  <br /><br />
	  <TextField label='Salary' size='small' onChange={inputHandler} name='Salary' defaultValue={val.Salary}></TextField>
	  <br /><br />
	  <Button variant='contained' onClick={()=>{
		updateEmp(inputs);
	  }}>Update Employee</Button>
	</div>
  )
}

export default Update
