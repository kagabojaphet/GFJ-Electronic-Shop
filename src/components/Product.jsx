import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductProps from "./Productprops";



const ProductAll=()=>{
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
        <div className="product-contaioner">
        <div className="product">
        {team && team.data && team.data.map((row)=>(
        <ProductProps image={row.productImage.url} name={row.productName} summary={row.productTitle} disc={row.productDiscount} price={row.productPrice}/>
        ))}
        </div>
        </div>
        </>
    )
}

export default ProductAll