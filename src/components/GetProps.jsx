import React from "react";

const GetProps=(props)=>{
    return(
        <>
            <div className="props-option">
            <i class={props.icon}></i>
            <p><span>{props.span}</span>{props.paragraph}</p>
            </div>
        </>
    )
}
export default GetProps