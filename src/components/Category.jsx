import React from "react";
import CategoryProps from "./CategoryProps";

const AllCategory=()=>{
    return(
        <>
        <div className="category-container">
            <div className="category">
                <h1>How we Do?</h1>
                <div className="category-pagraph">
                    <p class="para1">Electronics Shop, we strive to make your shopping experience as convenient as possible. You can choose from four easy ways to get our products:

                    Phone Call: Give us a call, and our friendly staff will assist you with your purchase and arrange delivery.
                    Visit Our Store: Come directly to our shop location to browse and buy in person.
                    Online Ordering: Visit our website to explore our extensive product range and place your order online.
                    In-Store Pickup: Order online and pick up your items from our shop at your convenience.
                    We are dedicated to providing you with exceptional service, no matter how you choose to shop with us.</p>
                </div>
                <div className="category-option">
                        <CategoryProps icon="fa-solid fa-location-dot" pagraph="Experience the best of Electronics Shop by visiting us at our store location. Come and explore our wide range of products in person, where you can see, touch, and compare items before making a purchase. Our friendly and knowledgeable staff are on hand to provide expert advice and assistance. Whether you want to browse the latest electronics or pick up an online order, our store is conveniently located to serve you. Visit us today and discover why Electronics Shop is your go-to destination for all your electronics needs."/>
                         <CategoryProps icon="fa-solid fa-phone" pagraph="For a convenient and personalized shopping experience, you can order our products by phone. Simply give us a call, and our knowledgeable and friendly staff will assist you with your purchase. Whether you need help selecting the right product or arranging delivery, we're here to help. Our phone service ensures that you get expert advice and support, making your shopping experience seamless and hassle-free. Contact us today and let us take care of your electronics needs!"/>
                         <CategoryProps icon="fa-solid fa-globe" pagraph="Enjoy the convenience of shopping from anywhere with our user-friendly website. Browse our extensive product range, compare features, read reviews, and make your purchase all from the comfort of your home. Our secure online ordering system ensures a smooth and safe transaction. With just a few clicks, your favorite electronics can be on their way to you. Visit our website today and experience hassle-free online shopping with Electronics Shop."/>
                         <CategoryProps icon="fa-solid fa-truck" pagraph="At Electronics Shop, we offer fast and reliable delivery services to ensure your purchases reach you quickly and safely. When you place an order, our team works diligently to process and ship your items with care. Whether you order online or by phone, you can trust that your products will be delivered right to your doorstep. Enjoy the convenience of having your favorite electronics delivered directly to you, so you can start enjoying them without delay. Shop with us today and take advantage of our efficient delivery service."/>
                </div>
                <i class="fa-solid fa-caret-down"></i>
            </div>
        </div>
        </>
    )
}
export default AllCategory