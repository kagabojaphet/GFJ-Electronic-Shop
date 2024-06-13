import React, { useState } from 'react';
import { Modal } from 'antd';
import { Image } from 'antd';
import Header from "./Header";
import pro1 from "../assests/device3.jpeg";


const SearchPro=(props)=>{

    const [opens, setOpens] = useState(false);

    const showModal = () => {
      setOpens(true);
    };
  
    const hideModal = () => {
      setOpens(false);
    };
   
    return(
        <>
        <Header/>
        <div className="search-container">
            <div className="search-pro" onClick={showModal}>
                <img src={props.image} alt="" />
                <h1>{props.name}</h1>
            </div>
            <Modal
      open={opens}
      onOk={hideModal}
      onCancel={hideModal}
      footer={null}
    >
        <div className='view-container'>
            <div className='view-image'>
            <Image className='image' src={props.image}/>
            </div>
            <div className='view-discription'>
               <div className="discription">
               <div className="names">
               <h1>{props.name}</h1>
               <h3>{props.title}</h3>
               </div>
                <div className="cost">
                <h3 className='disc'>Frw: {props.disc}</h3>
                <h3 className='price'>Frw: {props.price}</h3>
                </div>
               </div>
                <p>{props.discription}</p>
                   <div className='btn'>
                   <button>Buy Now</button>
                   <button>Add to Cart</button>
                   </div>
            </div>
        </div>
    </Modal>
        </div>
        </>
    )

}
export default SearchPro