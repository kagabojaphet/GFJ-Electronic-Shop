import React, { useEffect,useState }  from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Flex } from 'antd';
import axios from "axios";
import { Modal } from 'antd';
import TextField from '@mui/material/TextField';


const TableUSer=()=>{
  const [open, setOpen] = useState(false);
  const handleDeleteUser = async(productId) => {
    try {
      const response=await axios.delete(`http://localhost:9090/api/v1/user/${productId}`);
      if(!response){
        alert("user not Deleted")
      }
      else{
        alert("user deleted")
      }
  } catch (error) {
      console.error('Error deleting user:', error);
  }
  };



  const [team, setTeam]= useState([])

  useEffect(()=>{
    const fetchProduct = async ()=>{
       const response = await axios.get(`http://localhost:9090/api/v1/user`)
       setTeam(response.data)
    };
    fetchProduct([])
  },[])

    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">No</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">PhoneNumber</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {team && team.data && team.data.map((row,index)=>(
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="right">{index + 1}</TableCell>
          <TableCell align="right">{row.firstName}</TableCell>
          <TableCell align="right">{row.lastName}</TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.phoneNumber}</TableCell>
          <TableCell align="right">{row.password}</TableCell>
          <TableCell align="right">{row.role}</TableCell>
          <TableCell align="right">
          <Button type="primary" danger onClick={() => handleDeleteUser(row._id)}>Delete</Button>
          <Button type="primary" onClick={() => setOpen(true)}>Update</Button>
          </TableCell>
        </TableRow>
        ))}
        <Modal className='model'
        title="Update User"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        >
          <form action="">
                        <TextField id="outlined-basic" label="FirstName" variant="outlined" />
                        <TextField id="outlined-basic" label="LastName" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" />
                        <TextField id="outlined-basic" label="Password" variant="outlined"/>
                        <TextField id="outlined-basic" label="ConfrimPassword" variant="outlined" />
                        <TextField id="outlined-basic" label="Role" variant="outlined"/>
                        <Button type="primary">Update</Button>
                        </form>
        </Modal>
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default TableUSer