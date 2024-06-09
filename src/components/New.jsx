import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NewProps from "./Newprops";
import axios from "axios";

const NewProduct=()=>{
    const [team, setTeam]= useState([])

    useEffect(()=>{
      const fetchProduct = async ()=>{
         const response = await axios.get(`https://electronic-shop-backend.onrender.com/api/v1/product`)
         setTeam(response.data)
      };
      fetchProduct([])
    },[])
    return(
        <>
        <div className="newproduct-container">
        {team && team.data && team.data.map((row)=>(
            <NewProps new="New" image={row.productImage.url}  id={row._id} name={row.productName} title={row.productTitle} disc={row.productDiscount} price={row.productPrice}  discription={row.productDescription}/>
        ))}
        </div>
        </>
    )
}
export default NewProduct