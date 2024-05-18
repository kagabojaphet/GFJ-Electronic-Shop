import React, { useEffect,useState }  from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Flex, Row } from 'antd';
import axios from "axios";
import { Modal } from 'antd';
import TextField from '@mui/material/TextField';


const TableUSer=()=>{

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


  const [Update,setUpdate]=useState({});
  const Params=window.location.href.split("?id=")[1]
  console.log(Params)
  const [formData,setFormData]=useState({
   firstName:"",
   lastName:"",
   email:"",
   phoneNumber:"",
   password:"",
   role:"",
  });
  const updateUSer= async () =>{
   try {
       const response=await axios.patch(`http://localhost:9090/api/v1/user/${Params}`,formData);
       console.log(`user successfuly updated:`,response.data)
       setUpdate(response.data)
   } catch (error) {
       console.log(`error:`,error)
   }
  }
  const handleChange=e=>{
   setFormData({...formData,[e.target.name]:e.target.value})
  }
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
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
          <Button type="primary" onClick={()=>showModal(row._id && window.history.pushState({}, '', `/?id=${row._id}`))}>Update</Button>
          </TableCell>
        </TableRow>
        ))}
       <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
      >
      <form action="" onSubmit={updateUSer}>
        <TextField id="outlined-basic" label="FirstName" variant="outlined" name="fistName" value={formData.firstName} onChange={handleChange}/>
        <TextField id="outlined-basic" label="LastName" variant="outlined" name="lastName" value={formData.lastName} onChange={handleChange}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={formData.email} onChange={handleChange}/>
        <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={formData.password} onChange={handleChange}/>
        <TextField id="outlined-basic" label="Role" variant="outlined" name="role" value={formData.role} onChange={handleChange}/>
        <button type="submit">Update</button>
        </form>
      </Modal>
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default TableUSer