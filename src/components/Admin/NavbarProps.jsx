import React from "react";

const NavProps=(props)=>{
return(
    <>
    <div className="nav-link" onClick={props.onClick}>
    <i class={props.icon}></i>
    <h1>{props.text}</h1>
    </div>
    </>
)
}
export default NavProps