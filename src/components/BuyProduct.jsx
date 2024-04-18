import React from "react";
import { Image } from 'antd';
import foto from "../assests/device1.jpeg";
import TextField from '@mui/material/TextField';
import { Button, Input, Select, Space } from 'antd';

const Buy=()=>{
    const options = [
        {
          value: 'Mtn',
          label: 'Mtn',
          background: 'yellow'
        },
        {
          value: 'Airtel',
          label: 'Airtel',
        },
        {
            value: 'Tigo',
            label: 'Tigo',
          },
      ];
    return(
        <>
            <div className="buy-container">
                <div className="buy-content">
                    <div className="left">
                        <div className="product-details">
                            <div className="image-cont">
                            <Image className='image' src={foto}/>
                            </div>
                            <div className="detail">
                                <p className="price">Price:<b>40,0000</b></p>
                                <p className="price-discount">Discount:<b>40,0000</b></p>
                                <h1>iphone</h1>
                                <h3>iphone new pro</h3>
                                <p className="discription">Fell free to get in touch with me.I am always open to discussing new projects,
                                                           creative ideas or opportunities to be part of your visions.
                                                           Fell free to get in touch with me.I am always open to discussing new projects,
                                                           creative ideas or opportunities to be part of your visions.</p>
                                 
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <h1>Payment Form</h1>
                        <form method="POST">
                        <TextField id="outlined-basic" label="Country/Region" variant="outlined" />
                        <TextField id="outlined-basic" label="State/Province" variant="outlined" />
                        <TextField id="outlined-basic" label="City" variant="outlined" />
                        <TextField id="outlined-basic" label="Street Adress" variant="outlined" />
                        <TextField id="outlined-basic" label="Firstname" variant="outlined" />
                        <TextField id="outlined-basic" label="Lastname" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Confirm email" variant="outlined" />
                        <TextField id="outlined-basic" label="Phone number" variant="outlined" />
                        <TextField id="outlined-basic" label="Quantity" variant="outlined" />
                        <div className="date">
                        <input type="Date"></input>
                         <input type="Time"></input>
                        </div>
                        <Space.Compact>
                           <Select defaultValue="Mtn" options={options} />
                          <Input defaultValue="+250" />
                         </Space.Compact>
                         <Button type="primary">Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buy