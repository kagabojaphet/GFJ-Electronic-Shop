import React from "react";

const CategoryProps=(props)=>{
    return(
        <>
                   <div className="option">
                    <i class={props.icon}></i>
                    <p>{props.pagraph}</p>
                         </div>
        </>
    )
}
export default CategoryProps