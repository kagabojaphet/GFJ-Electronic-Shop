import React from "react";

const ProductProps=(props)=>{
  const handleClick = () => {
    window.location.href = '/All';
  };
    return(
        <>
        <div className="prodcuct-props">
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <p>{props.summary}</p>
          <div className="btn-container">
           <button>ADD</button>
            <button onClick={handleClick}>BUY</button>
          </div>
        </div>
        </>
    )
}
export default ProductProps