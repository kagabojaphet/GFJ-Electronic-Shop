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
             <Carousel autoplay>
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
            </div>
            </div>
        </>
    )
}
export default Home