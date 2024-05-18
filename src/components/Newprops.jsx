import React, { useState } from 'react';
import { Modal } from 'antd';
import { Image } from 'antd';


const NewProps=(props)=>{
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        window.location.href = '/Buy';
      };
      const [IsOpen, setIsOpen] = useState(false);
      const [productUrl, setProductUrl] = useState('');
  
      const handleOpen = ()=>{
          setIsOpen(true)
          setProductUrl(`/?id=${props.id}`);
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