import React from "react";
import AddtoCartProps from "./AddProps";
import pro1 from "../assests/24.webp";
import pro2 from "../assests/app.jpg";
import pro3 from "../assests/apple.jpeg";
import pro4 from "../assests/device1.jpeg";
import pro5 from "../assests/device2.webp";

const Add=()=>{
    return(
        <>
        <div className="addToCart-container">
            <div className="container">
                <div className="title">
                <h1>Shopping Cart</h1>
                </div> 
                <AddtoCartProps image={pro1} name="OPPO new Pro" discpt="Oppo A18 new version pro" quantity="12" price="400000"/>
                <AddtoCartProps image={pro2} name="OPPO new Pro" discpt="Oppo A18 new version pro" quantity="12" price="400000"/>
                <AddtoCartProps image={pro3} name="OPPO new Pro" discpt="Oppo A18 new version pro" quantity="12" price="400000"/>
                <AddtoCartProps image={pro4} name="OPPO new Pro" discpt="Oppo A18 new version pro" quantity="12" price="400000"/>
                <AddtoCartProps image={pro5} name="OPPO new Pro" discpt="Oppo A18 new version pro" quantity="12" price="400000"/>
                <div className="buy">
                    <button>Proceed to Pay</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Add