import React,{useState} from "react";
import axios from "axios";


const LoginSignup=()=>{
  const [login , setLogin]= useState(true)
  const [signup,setSignup] = useState(false)

   const Handlelogin = () =>{
      setLogin(true)
      setSignup(false)
   }
   const Handlesignup = () =>{
    setLogin(false)
    setSignup(true)
 }

 const LoginSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
}
  
    return(
        <>
        <div className="Container">
        <div className="contact-form">
        <div className="form-option">
            <button className={login===true ? "active":""} onClick={Handlelogin}>Login</button>
            <button className={signup===true ? "active":""} onClick={Handlesignup}>Signup</button>
          </div>
              {login && (
                 <form action="">
                 <div className="input-box">
                   <input type="text" name="email" required="required" />
                   <span>Email</span>
                 </div>
                 <div className="input-box">
                   <input type="text" name="password" required="required" />
                   <span>Password</span>
                 </div>
                 <div className="input-box">
                   <input type="submit" value="Send" />
                 </div>
               </form>
              )}
              
              {signup && (
                <form action="">
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>FirstName</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>LastName</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>PhoneNumber</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>Password</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" />
                  <span>ConfrimPassword</span>
                </div>
                <div className="input-box">
                  <input type="submit" value="Send" />
                </div>
              </form>
              )}
              
            </div>
        </div>
        </>
    )
}
export default LoginSignup