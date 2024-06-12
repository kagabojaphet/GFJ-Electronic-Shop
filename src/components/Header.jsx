import React,{ useState } from "react";
import logo from "../assests/logos.jpeg";
import { Input,Button} from 'antd';
import styled from 'styled-components';
import LoginSignup from "./Login";
import { Modal } from 'antd';
import SearchPro from "./Search";
import axios from "axios";



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
      border-color: #494750;
      color: #000;
    }
    .ant-input:hover,
    .ant-input:focus {
      border-color: #000;
   
    }
  `;
  const [opens, setOpens] = useState(false);

  const showModal = () => {
    setOpens(true);
  };

  const hideModal = () => {
    setOpens(false);
  };
  function handleOpen(){
    showModal()
  }
  const [results, setResults] = useState([]);

 
  const handleSearch = async (value) => {
      try {
          const response = await axios.get(`http://localhost:9090/api/v1/product/search?category=${value}`);
          setResults(response.data);
          console.log(response.data);
          if(response==true){
            window.location.href = '/Search';
          }
  
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };


    return(
        <>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <StyledSearch
               placeholder="input search text"
               enterButton="Search"
               enterButton={<Button style={{ backgroundColor: '#494750', borderColor: '#494750', color: '#fff'}}>Search</Button>}
               onSearch={handleSearch}
               style={{
                backgroundColor: '#f0f0f0',
                borderColor: '#d9d9d9',
                color: '#000',
                width: '300px', 
              }}
             />
            <ul className="nav-links">
                <div className="cart">
                <p>0</p>
                <li><a href="#" onClick={handleCart}><i class="fa-solid fa-cart-shopping"></i>Shop</a></li>
                </div>
                <i class="fa-solid fa-user-plus" onClick={handleOpen}></i>
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
                <Modal
                 open={opens}
                 onOk={hideModal}
                 onCancel={hideModal}
                footer={null}>
                <LoginSignup/>
               </Modal>
            </ul>
        </nav>
       
        </>
    )
}
export default Header