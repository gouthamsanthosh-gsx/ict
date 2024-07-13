import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
	const navigate = useNavigate();
	const [inputs,setInputs] = useState({
		"Name":"",
		"Age":0,
		"Salary":0,
		"Department":""
	});

	const inputHandler = (e)=>{
		setInputs({...inputs,[e.target.name]:e.target.value});
	};

	const addEmp = ()=>{
		axios.post("http://localhost:3000/add",inputs).then(
			(res)=>{
				console.log("data added");
				alert("Employee created");
				alert(res.data.message);
				navigate("/");
			}
		).catch(
			(err)=>{
				console.error(err);
			}
		);
	};

  return (
	<div>
	  <Typography variant='h3'>Create employee</Typography>
	  <br /><br />
	  <TextField label='Full Name' required onChange={inputHandler} name='Name'></TextField>
	  <br /><br />
	  <TextField label='Age' size='small' onChange={inputHandler} name='Age'></TextField>
	  <br /><br />
	  <TextField label='Department' required onChange={inputHandler} name='Department'></TextField>
	  <br /><br />
	  <TextField label='Salary' size='small' onChange={inputHandler} name='Salary'></TextField>
	  <br /><br />
	  <Button variant='contained' onClick={addEmp}>Add Employee</Button>
	</div>
  )
}

export default Add
