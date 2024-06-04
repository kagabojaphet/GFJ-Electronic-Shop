import React,{ useState } from "react";
import logo from "../assests/logos.jpeg";
import { AudioOutlined } from '@ant-design/icons';
import { Input,Button} from 'antd';
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
      border-color: #000;
   
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
               enterButton={<Button style={{ backgroundColor: '#494750', borderColor: '#494750', color: '#fff'}}>Search</Button>}
               style={{
                backgroundColor: '#f0f0f0',
                borderColor: '#d9d9d9',
                color: '#000',
                width: '300px', // Example width for input
              }}
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