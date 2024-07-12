import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
	<div>
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
				<TableRow>
				<TableCell>goutham</TableCell>
				<TableCell>19</TableCell>
				<TableCell>CS</TableCell>
				<TableCell>0</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	  </TableContainer>
	</div>
  )
}

export default View
