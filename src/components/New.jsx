import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NewProps from "./Newprops";
import axios from "axios";

const NewProduct=()=>{
    const [team, setTeam]= useState([])

    useEffect(()=>{
      const fetchProduct = async ()=>{
         const response = await axios.get(`http://localhost:9090/api/v1/product`)
         setTeam(response.data)
      };
      fetchProduct([])
    },[])
    return(
        <>
        <div className="newproduct-container">
        {team && team.data && team.data.map((row)=>(
            <NewProps new="New" image={row.productImage.url} name="Computer" title="HP new vision pro" cost="40,000" id={row._id}/>
        ))}
        </div>
        </>
    )
}
export default NewProduct