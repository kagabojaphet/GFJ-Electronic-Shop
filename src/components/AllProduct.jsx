import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AllProps  from "./AllProps";
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
              <AllProps photo={row.productImage.url} name={row.productName} summary={row.productTitle} id={row._id}/>
        ))}
        </div>
        </div>
        </>
    )
}

export default ProductAll