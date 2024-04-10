import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import NewProduct from "../components/New";

function Welcome(){
    return(
        <>
         <Header />
         <NewProduct/>
        </>
    )
}
export default Welcome;