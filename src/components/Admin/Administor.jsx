import React, { useEffect } from "react";
import { useState } from "react";
import NavProps from "./NavbarProps";
import userImage from "../../assests/device1.jpeg";
import TextField from '@mui/material/TextField';
import axios from "axios";
import TableUSer from "./UserTable";
import ProductTable from "../ProAdmin/ProTable";
import Product from "../ProAdmin/PpstProduct";



const Admin=()=>{

    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const [firstName,setfirstName]= useState('');
  const [lastName,setlastName]= useState('');
  const [email,setemail]= useState('');
  const [phoneNumber,setphoneNumber]= useState('');
  const [password,setpassword]= useState('');
  const [confirmPassword,setconfirmPassword]= useState('');
  const [role,setrole]= useState('');
  
   const handleSubmit= async(event)=>{
    event.preventDefault();
    try {
        const response=await axios.post(`http://localhost:9090/api/v1/user`,{
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
            role
        });
        console.log(response.data)
    } catch (error) {
        console.log('Error creating user',error)
    }
   }
return(
    <>
    <div className="admin-container">
        <div className="admin-content">
            <div className="nav-top">
            <div className="dashboard">
            <i class="fa-solid fa-house"></i>
            <p>Admin-Dashboard</p>
            </div>
            <h1>Electronic-Shop</h1>
            <div className="user-admin">
                <img src={userImage} alt="Image" />
            </div>
            </div>
            <div className="nav-left">
                <div className="left-navbar">
                    <NavProps onClick={() => handleButtonClick(1)}icon="fa-solid fa-users" text="Users"/>
                    <NavProps onClick={() => handleButtonClick(2)}icon="fa-solid fa-cart-shopping" text="Products"/>
                    <NavProps onClick={() => handleButtonClick(3)}icon="fa-solid fa-message" text="Contacts"/>
                    <NavProps onClick={() => handleButtonClick(4)}icon="fa-solid fa-handshake" text="Transactions"/>
                </div>
                <div className="right-container">
                {activeButton === 1 &&  (<div className="user-container">
                    <h1>User Controller</h1>
                    <div className="form-container">
                        <form action="" onSubmit={handleSubmit}>
                        <TextField id="outlined-basic" label="FirstName" variant="outlined" valu={firstName} onChange={(e) => setfirstName(e.target.value)}/>
                        <TextField id="outlined-basic" label="LastName" variant="outlined" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setemail(e.target.value)}/>
                        <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setpassword(e.target.value)}/>
                        <TextField id="outlined-basic" label="ConfrimPassword" variant="outlined" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                        <TextField id="outlined-basic" label="Role" variant="outlined" value={role} onChange={(e) => setrole(e.target.value)}/>
                        <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="table-container">
                        <TableUSer/>
                    </div>
                </div>)}
                {activeButton === 2 &&  (<div className="product-container">
                    <Product/>
                    <ProductTable/>
                </div>)}
                {activeButton === 3 && (<div className="contact-container"></div>)}
                {activeButton === 4 && (<div className="payment-container"></div>)}
                </div>
            </div>
        </div>
        
    </div>
    </>
)
}
export default Admin