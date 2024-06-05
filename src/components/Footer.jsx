import React from "react";
import logo from "../assests/logos.jpeg";

const Footer=()=>{
    const currentYear = new Date().getFullYear();
    return(
        <>
            <div className="footer-container">
            <div className="footer">
            <div className="logo">
                <img src={logo}></img>
            </div>
                <div className="content">
                <div className="links">
                    <a href="#">ABOUT US</a>
                    <a href="#">PRODUCT</a>
                    <a href="#">AWARDS</a>
                    <a href="#">HELP</a>
                    <a href="#">CONTACT</a>
                </div>
                <div className="text">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident 
                    </p>
                </div>
                <div className="media">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                </div>
            </div>
            </div>
            <div className="copyright">
                <p>&copy; {currentYear} GFJElectronic Shop</p>
                </div>
        </>
    )
}
export default Footer