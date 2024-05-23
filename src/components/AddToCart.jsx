import React from "react";
import AddtoCartProps from "./AddProps";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Add = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:9090/api/v1/cart/one`,{
        headers: {
          "electronic": token
      }
      });
      setTeam(response.data);
    };
    fetchProduct([]);
  }, []);
  return (
    <>
      <div className="addToCart-container">
        <div className="container">
          <div className="title">
            <h1>Shopping Cart</h1>
            {team && team.map((row)=>(
            <AddtoCartProps image={row.productImage.url} name={row.productName} quantity={row.quantity} price={row.productPrice}/>
            ))}
          </div>
          <div className="buy">
            <button>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add;
