import React from "react";
import logo from "../assests/logo.png";
import ImageSlide from "./ImageSlider";
import apple from "../assests/apple.jpeg";
import mc from "../assests/mic.jpeg";
import studio from "../assests/studio.jpeg";
import wash from "../assests/wash.webp";
import { Carousel } from 'antd';
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
                <i class="fa-solid fa-bars">
                    <div className="men-bar">
                    <p>All category</p>
                    <a href="#">Television & Accessories</a>
                    <a href="#">Home Appliances</a>
                    <a href="#">Phones & wearables</a>
                    <a href="#">Computer & Tablet</a>
                    <a href="">Kitchen Appliances</a>
                    <a href="#">Audio & Video</a>
                    <a href="#">Health & Fitness</a>
                    <a href="#">Cameras & Accessories</a>
                    <a href="#">Smart Devices</a>
                    </div>
                </i>
            </ul>
        </nav>
        <div className="home-container">
        <Carousel autoplay autoplaySpeed={1300} infinite={true} dots={false}>
         <ImageSlide img={apple} className="image"/>
         <ImageSlide img={studio} className="image"/>
         <ImageSlide img={mc} className="image"/>
         <ImageSlide img={wash} className="image"/>
         </Carousel>
         <div className="home-text">
            <h1>GFJElectronics</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate nihil 
                veritatis totam architecto quis, voluptatem eius deserunt error hic rerum sed minus 
                vero necessitatibus vel suscipit nobis tempore id.</p>
                <button>BuyNow</button>
         </div>
        </div>
        </>
    )
}
export default Header