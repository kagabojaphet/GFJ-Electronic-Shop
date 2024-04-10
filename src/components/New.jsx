import React from "react";
import NewProps from "./Newprops";
import device1 from "../assests/device1.jpeg";

const NewProduct=()=>{
    return(
        <>
        <div className="newproduct-container">
            <NewProps new="New" image={device1} name="machine" title="machine pro" cost="40,000"/>
        </div>
        </>
    )
}
export default NewProduct