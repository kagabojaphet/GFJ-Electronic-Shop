import React from "react";
import AddtoCartProps from "./AddProps";
import { useState } from "react";
import { useEffect } from "react";
import pro1 from "../assests/24.webp";
import pro2 from "../assests/app.jpg";
import pro3 from "../assests/apple.jpeg";
import pro4 from "../assests/device1.jpeg";
import pro5 from "../assests/device2.webp";
import axios from "axios";

const Add = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:9090/api/v1/cart`);
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
          </div>
          
          {team &&
            team.data &&
            team.data.map((row) =>
              row.products.map((pro) => (
                <AddtoCartProps
                  image={pro.productImage.replace("}", "")}
                  name={pro.productName}
                  quantity={pro.quantity}
                  price={pro.productPrice}
                />
              ))
            )}
          <div className="buy">
            <button>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add;
