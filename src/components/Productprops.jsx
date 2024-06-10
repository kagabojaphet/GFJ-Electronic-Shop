import React from "react";

const ProductProps=(props)=>{
  const handleClick = () => {
    window.location.href = '/All';
  };
    return(
        <>
        <div className="prodcuct-props" onClick={handleClick}>
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <p>{props.summary}</p>
          <div className="cost-container">
            <div className="disc">Frw: {props.disc}</div>
            <div className="price">Frw: {props.price}</div>
          </div>
        </div>
        </>
    )
}
export default ProductProps