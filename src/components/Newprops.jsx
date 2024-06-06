import React, { useState } from 'react';
import { Modal } from 'antd';
import { Image } from 'antd';
import axios from 'axios';
import LoginSignup from './Login';
import { jwtDecode } from 'jwt-decode';
import { format } from 'date-fns';


const NewProps=(props)=>{
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        window.location.href = '/Buy';
      };
      const [IsOpen, setIsOpen] = useState(false);
      const [productUrl, setProductUrl] = useState('');
      const [opens, setOpens] = useState(false);

  const showModal = () => {
    setOpens(true);
  };

  const hideModal = () => {
    setOpens(false);
  };
      const [form, setForm] = useState(false);
      const handleForm = () => {
        setForm(true);
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
                const response=axios.post(`http://localhost:9090/api/v1/cart/${props.id}`,{},{
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
        const today = new Date();
        const formattedDate = format(today, 'MM/dd/yyyy'); 
return(
    <>
    <div className="props-container">
        <h4 className='new'>{props.new}</h4>
        <img src={props.image} alt="" />
        <div className="name">
        <h2>{props.name}</h2>
        <p>{formattedDate}</p>
        </div>
        <p>{props.title}</p>
        <div className="price">
        <h3 className='disc'>Frw:{props.cost}</h3>
        <h3>Frw:{props.cost}</h3>
        </div>
        <div className="hover-container">
            <button name={props.id} onClick={handleOpen}>add to cart</button>
            {window.history.pushState({}, '', productUrl)}
            <button onClick={() => setOpen(true)}>quick view</button>
        </div>
    </div>
    {form &&(
      <Modal
      open={opens}
      onOk={hideModal}
      onCancel={hideModal}
      footer={null}
    >
       <LoginSignup/>
    </Modal>
    )}
    
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
            <Image className='image' src={props.image}/>
            </div>
            <div className='view-discription'>
                <h1>{props.name}</h1>
                <h3>{props.title}</h3>
                <p>Fell free to get in touch with me.I am always open to discussing new projects,
                   creative ideas or opportunities to be part of your visions.
                   Fell free to get in touch with me.I am always open to discussing new projects,
                   creative ideas or opportunities to be part of your visions.</p>
                   <div className='btn'>
                   <button onClick={handleClick}>BUY NOW</button>
                   <button>ADD TO CART</button>
                   </div>
            </div>
        </div>
      </Modal>
    </>
)
}
export default NewProps