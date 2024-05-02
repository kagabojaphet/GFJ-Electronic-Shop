import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AllProps from "./AllProps";
import pro38 from "../assests/tablet.jpeg";
import axios from "axios";


const ProductAll=()=>{
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
        <div className="all-contaioner">
        <p className="text">Buy & Ordering online your favorite devices wherever you are with easily way.
        please keep it enjoy our goods and services,when you have issue,suggestion or
        idea contact our team <a href="#">Contact</a></p>
        <div className="product">
        {team && team.data && team.data.map((row)=>(
              <AllProps image={`http://localhost:3000/All${row.productImage}`} name={row.productName} summary={row.productTitle}/>
        ))}
        </div>
        </div>
        </>
    )
}

export default ProductAll