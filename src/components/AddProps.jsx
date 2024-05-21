import React from "react";
import pro from "../assests/24.webp";
import { Button } from 'antd';
const AddtoCartProps=(props)=>{
    //src=" 'https://res.cloudinary.com/divky2tkw/image/upload/v1716213287/product/h6s4rt4fnraz9qvexlfd.jpg'}"
    //https://res.cloudinary.com/divky2tkw/image/upload/v1716213275/product/vxlof8q6dhuvfg8czdzj.jpg'
// const url = props.image ? props.image.replace(/^'|'$/g,''):""
// console.log(url.replace("}", ""))
    return(
        <>
        <div className="addtocart-props">
            <div className="image">
            
              
            <img src={props.image} alt="image" />
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