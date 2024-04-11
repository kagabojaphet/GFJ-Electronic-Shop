import React from "react";

const NewProps=(props)=>{
return(
    <>
    <div className="props-container">
        <h4>{props.new}</h4>
        <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <p>{props.title}</p>
        <h5>Frw:{props.cost}</h5>
        <div className="hover-container">
            <a href="#">ADD TO CART</a>
            <a href="#">VIEW MORE</a>
        </div>
    </div>
    </>
)
}
export default NewProps