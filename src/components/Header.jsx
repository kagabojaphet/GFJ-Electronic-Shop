import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import React from "react";

function Header(){
    return(
        <>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#"><i class="fa-solid fa-cart-shopping"></i>Shop</a></li>
            </ul>
        </nav>
        <div className="home-container">
            <div className="home-text">
                <h1>GFJ-Electronic-Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt, minima? Nam dolore incidunt dolorum voluptas 
                    exercitationem, fuga eligendi perspiciatis neque hic 
                    recusandae aut voluptatibus odio nobis eveniet, 
                    doloribus soluta obcaecati?
                </p>
                <div class="btn-shop">
             <a href="">Shop-Now</a>
             </div>
            </div>
        </div>
        <div className="about-container">
            
        </div>
        </>
    )
}
export default Header