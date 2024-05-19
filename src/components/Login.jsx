import React from "react";

const LoginSignup=()=>{
    return(
        <>
        <div className="Container">
        <div className="contact-form">
              <form action="">
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>First Name</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>Last Name</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    required="required"
                  ></textarea>
                  <span>Type your Message</span>
                </div>
                <div className="input-box">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
        </div>
        </>
    )
}
export default LoginSignup