import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Flex, Row } from 'antd';

const ProductTable=()=>{
    const [team, setTeam]= useState([])
    useEffect(()=>{
      const fetchProduct = async ()=>{
         const response = await axios.get(`http://localhost:9090/api/v1/product`)
         setTeam(response.data)
      };
      fetchProduct([])
    },[])

    const handleDeleteProduct = async(productId) => {
        try {
          const response=await axios.delete(`http://localhost:9090/api/v1/product/${productId}`);
          if(!response){
            alert("user not Deleted")
          }
          else{
            alert("Product Deleted")
          }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
      };
    return(
        <>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">No</TableCell>
            <TableCell align="right">ProductImage</TableCell>
            <TableCell align="right">ProductName</TableCell>
            <TableCell align="right">ProductTitle</TableCell>
            <TableCell align="right">ProductDiscription</TableCell>
            <TableCell align="right">ProductCategory</TableCell>
            <TableCell align="right">ProductPrice</TableCell>
            <TableCell align="right">ProductDiscount</TableCell>
            <TableCell align="right" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {team && team.data && team.data.map((row,index)=>(
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="right">{index + 1}</TableCell>
          <TableCell align="right"><img src={row.productImage.url} style={{width: '100px',height: 'auto',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',}} alt="" /></TableCell>
          <TableCell align="right">{row.productName}</TableCell>
          <TableCell align="right">{row.productTitle}</TableCell>
          <TableCell align="right">{row.productDescription}</TableCell>
          <TableCell align="right">{row. productCategory}</TableCell>
          <TableCell align="right">{row. productPrice}</TableCell>
          <TableCell align="right">{row. productDiscount}</TableCell>
          <Button type="primary" danger onClick={()=>handleDeleteProduct(row._id)} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Delete</Button>
          <Button type="primary" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Update</Button>
        </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default ProductTable