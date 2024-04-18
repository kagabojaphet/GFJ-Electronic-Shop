import React from "react";
import CategoryProps from "./CategoryProps";

const AllCategory=()=>{
    return(
        <>
        <div className="category-container">
            <div className="category">
                <h1>How we Do?</h1>
                <div className="category-pagraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error nesciunt
                     veniam repellendus repellat. Autem quia enim neque. Architecto laboriosam eligendi
                      maxime nam neque! Non, temporibus asperiores? Debitis, minus provident?</p>
                </div>
                <div className="category-option">
                        <CategoryProps icon="fa-solid fa-location-dot" pagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iusto dignissimos eum odit
                         aliquid nihil voluptatum eveniet ipsa nisi itaque repellendus, veritatis totam quidem 
                         dolor amet illum. Provident, repudiandae consequatur?"/>
                         <CategoryProps icon="fa-solid fa-phone" pagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iusto dignissimos eum odit
                         aliquid nihil voluptatum eveniet ipsa nisi itaque repellendus, veritatis totam quidem 
                         dolor amet illum. Provident, repudiandae consequatur?"/>
                         <CategoryProps icon="fa-solid fa-globe" pagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iusto dignissimos eum odit
                         aliquid nihil voluptatum eveniet ipsa nisi itaque repellendus, veritatis totam quidem 
                         dolor amet illum. Provident, repudiandae consequatur?"/>
                         <CategoryProps icon="fa-solid fa-truck" pagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iusto dignissimos eum odit
                         aliquid nihil voluptatum eveniet ipsa nisi itaque repellendus, veritatis totam quidem 
                         dolor amet illum. Provident, repudiandae consequatur?"/>
                </div>
                <i class="fa-solid fa-caret-down"></i>
            </div>
        </div>
        </>
    )
}
export default AllCategory