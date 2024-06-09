
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Image } from 'antd';
import LoginSignup from './Login';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AllProps=(Proprops)=>{
  const [IsOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      window.location.href = '/Buy';
    };
    const [form, setForm] = useState(false);
    const handleForm = () => {
      setForm(true);
    };
    const [opens, setOpens] = useState(false);

    const showModal = () => {
      setOpens(true);
    };
  
    const hideModal = () => {
      setOpens(false);
    };

    const handleOpen =async ()=>{
      const token = localStorage.getItem('token')
      if(!token){
        handleForm()
        showModal()
      }
      else{
      const decodedToken=jwtDecode(token)
      console.log(decodedToken.user.role)
      if(decodedToken.user.role ==="admin"){
        window.location.href = '/Admin';
      }
      else{
        const Params=window.location.href.split("?id=")[1]
        console.log(Params)
          setIsOpen(true)
          if(token){
              const token = localStorage.getItem("token");
              const response=axios.post(`http://localhost:9090/api/v1/cart/${Proprops.id}`,{},{
                headers: {
                  "electronic": token
              }
              });
              if(!response){
                alert("Product not added")
              }
              else{
                alert("Product added")
              }
               
          }
         
      }
      }
      }
    return(
        <>
        <div className="all-props" onClick={() => setOpen(true)}>
            <img src={Proprops.photo} alt="Image"></img>
            <h3>{Proprops.name}</h3>
            <p>{Proprops.summary}</p>
        
          <div className="btn-container">
          {/* <button>ADD</button>
            <button>BUY</button>
            <button>VIEW</button> */}
          </div>
        </div>
        <Modal className='model'
        title="Quick View"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        >
        <div className='view-container'>
            <div className='view-image'>
            <Image className='image' src={Proprops.photo}/>
            </div>
            <div className='view-discription'>
            <div className="discription">
               <div className="names">
               <h1>{Proprops.name}</h1>
               <h3>{Proprops.summary}</h3>
               </div>
                <div className="cost">
                <h3 className='disc'>Frw:{Proprops.disc}</h3>
                <h3 className='price'>Frw:{Proprops.price}</h3>
                </div>
               </div>
                <p>{Proprops.discription}</p>
                   <div className='btn'>
                   <button id={Proprops.id}onClick={handleClick}>Buy Now</button>
                   <button onClick={handleOpen}>Add to Cart</button>
                   </div>
            </div>
            {form &&(
            <Modal
      open={opens}
      onOk={hideModal}
      onCancel={hideModal}
    >
       <LoginSignup/>
    </Modal>
            )}
        </div>
      </Modal>
        </>
    )
}
export default AllProps