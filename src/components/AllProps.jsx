
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Image } from 'antd';

const AllProps=(Allprops)=>{
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      window.location.href = '/Buy';
    };
    return(
        <>
        <div className="all-props" onClick={() => setOpen(true)}>
            <img src={Allprops.photo} alt="Image"></img>
            <h3>{Allprops.name}</h3>
            <p>{Allprops.summary}</p>
            <p>{Allprops.discription}</p>
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
            <Image className='image' src={Allprops.image}/>
            </div>
            <div className='view-discription'>
                <h1>{Allprops.name}</h1>
                <h3>{Allprops.summary}</h3>
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
export default AllProps