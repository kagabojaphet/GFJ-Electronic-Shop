import React from "react";
import apple from "../assests/apple.jpeg";
import mc from "../assests/mic.jpeg";
import studio from "../assests/pex.webp";
import wash from "../assests/app.jpg";
import { Carousel } from 'antd';

const Home=()=>{
    return(
        <>
            <div className="home-container">
            <div className="home">
             <Carousel autoplay dots={false}>
              <div className="image">
               <img src={apple}></img>
              </div>
              <div className="image">
              <img src={mc}></img>
              </div>
              <div className="image">
              <img src={studio}></img>
              </div>
              <div className="image">
              <img src={wash}></img>
              </div>
             </Carousel>
             <div className="home-text">
                <div className="text">
                <h1>Electronics Shop</h1>
                <p>Find & Buy whatever you need devices and stay tuned!!</p>
                <div className="btn">
                    <a className="explorer" href="">Exproler Now</a>
                    <a className="get" href="">Get in Touch</a>
                </div>
                </div>
             </div>
            </div>
            </div>
        </>
    )
}
export default Home