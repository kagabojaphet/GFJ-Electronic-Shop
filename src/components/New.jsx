import React from "react";
import NewProps from "./Newprops";
import device1 from "../assests/device1.jpeg";
import device2 from "../assests/device2.webp";
import device3 from "../assests/device3.jpeg";
import device4 from "../assests/device4.jpeg";

const NewProduct=()=>{
    return(
        <>
        <div className="newproduct-container">
            <NewProps new="New" image={device1} name="Computer" title="HP new vision pro" cost="40,000"/>
            <NewProps new="New" image={device2} name="Computer" title="HP new vision pro" cost="40,000"/>
            <NewProps new="New" image={device3} name="Computer" title="HP new vision pro" cost="40,000"/>
            <NewProps new="New" image={device4} name="Computer" title="HP new vision pro" cost="40,000"/>
        </div>
        </>
    )
}
export default NewProduct