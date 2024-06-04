import React,{ useState } from "react";
import logo from "../assests/logos.jpeg";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import styled from 'styled-components';


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

    const StyledSearch = styled(Search)`
    .ant-input {
      background-color: #f0f0f0;
      border-color: #d9d9d9;
      color: #000;
    }
    .ant-input:hover,
    .ant-input:focus {
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    .ant-input-suffix .ant-input-clear-icon {
      color: #ff4d4f;
    }
    .ant-btn {
      background-color: #494750;
      border-color: #494750;
      color: #fff;
    }
    .ant-btn:hover,
    .ant-btn:focus {
      background-color: #40a9;
      border-color: #40a9;
      color: #fff;
    }
  `;

    return(
        <>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <StyledSearch
    placeholder="input search text"
    enterButton="Search"
    onSearch={value => console.log(value)}
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