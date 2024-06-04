import React,{ useState } from "react";
import logo from "../assests/logos.jpeg";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';


function Header(props){
    const [clicked, setClicked]= useState(false);
    const handleClick=()=>{
        setClicked(!clicked)
    }
    const handleCart = () => {
        const token=localStorage.getItem("token")
        if(!token){
            alert(`please make login`)
        }
        else{
            window.location.href = '/Add';
        }
    };

    const { Search } = Input;

    return(
        <>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="mediam"
            style={{}}
            />
            <ul className="nav-links">
                <li><a href="#" onClick={handleCart}><i class="fa-solid fa-cart-shopping"></i>Shop</a></li>
                <i class="fa-solid fa-user-plus"></i>
                <div className="menu" onClick={handleClick}>
                <i class={clicked ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>
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