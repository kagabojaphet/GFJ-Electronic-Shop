import React from "react";
import { Button } from 'antd';
const AddtoCartProps=(props,image)=>{
    return(
        <>
        <div className="addtocart-props">
            <div className="image">

              
            <img src={image.replace(/"/g, "")} alt="name" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="discription">
                <p className="name">{props.name}</p>
            </div>
            <div className="aquntity">
                <p>{props.quantity}</p>
            </div>
            <div className="price">
                <p>Frw:{props.price}</p>
            </div>
            <div className="btn-buy">
            <Button type="primary" danger>Delete</Button>
            </div>
        </div>
        </>
    )
}
export default AddtoCartProps