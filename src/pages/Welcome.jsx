import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import NewProduct from "../components/New";
import AllCategory from "../components/Category";
import ProductAll from "../components/Product";
import FavoriteProduct from "../components/Favorite";
import GetinTouch from "../components/Getintouch";
import Footer from "../components/Footer";
import Home from "../components/Home";

function Welcome(){
    return(
        <>
         <Header />
         <Home/>
         <NewProduct/>
         <AllCategory/>
         <ProductAll/>
         <FavoriteProduct/>
         <GetinTouch/>
         <Footer/>
        </>
    )
}
export default Welcome;