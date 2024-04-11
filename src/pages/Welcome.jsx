import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import NewProduct from "../components/New";
import AllCategory from "../components/Category";

function Welcome(){
    return(
        <>
         <Header />
         <NewProduct/>
         <AllCategory/>
        </>
    )
}
export default Welcome;