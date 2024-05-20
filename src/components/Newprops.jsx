import React, { useState } from 'react';
import { Modal } from 'antd';
import { Image } from 'antd';
import axios from 'axios';
import LoginSignup from './Login';


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
      const [form,setForm]=useState(false);
      const handleForm=()=>{
        setForm(true)
      }
      const handleOpen = ()=>{
        const token = localStorage.getItem('token')
        const Params=window.location.href.split("?id=")[1]
        console.log(Params)
          setIsOpen(true)
          if(token.role==="user"){
            setProductUrl(`/?id=${props.id}`)
          }
          else{
            handleForm()
            showModal()
          }
            //    const response =  axios.post(`http://localhost:9090/api/v1/cart/${Params}`,{
            //     method: "POST",
                   
            //             headers: {
            //                 'Content-Type': 'application/json',
            //                 'electronic': token,
            //               },  
            //    })
            //    setOpen(response.data)
         
      }
return(
    <>
    <div className="props-container">
        <h4>{props.new}</h4>
        <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <p>{props.title}</p>
        <h5>Frw:{props.cost}</h5>
        <div className="hover-container">
            <button name={props.id} onClick={handleOpen}>ADD TO CART</button>
            {window.history.pushState({}, '', productUrl)}
            <button onClick={() => setOpen(true)}>QUICK VIEW</button>
        </div>
    </div>
    {form &&(
    <Modal className='model'
    title="Quick View"
    centered
    open={opens}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
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