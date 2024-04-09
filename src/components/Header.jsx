import { Link } from "react-router-dom";
import React from "react";
import logo from "../assests/logo.png"
function Header(props){
    return(
        <>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <form action="">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search your item......" />
            </form>
            <ul className="nav-links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#"><i class="fa-solid fa-cart-shopping"></i>Shop</a></li>
                <i class="fa-solid fa-bars"></i>
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