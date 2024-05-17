import React,{ useState } from "react";
import logo from "../assests/logo.png";


function Header(props){
    const [clicked, setClicked]= useState(false);
    const handleClick=()=>{
        setClicked(!clicked)
    }
    const handleCart = () => {
      window.location.href = '/Add';
    };
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
                <li><a href="#">Order</a></li>
                <li><a href="#" onClick={handleCart}><i class="fa-solid fa-cart-shopping"></i>Shop</a></li>
                <div className="menu" onClick={handleClick}>
                <i class={clicked ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>
                <p>Menu</p>
                <div className={clicked ? "drop-down" :"drop-none"} >
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Device</a>
                <a href="#">Our Team</a>
                <a href="#">Help</a>
                </div>
                </div>
            </ul>
        </nav>
       
        </>
    )
}
export default Header