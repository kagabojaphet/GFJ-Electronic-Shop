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

 const [formData,setFormData]=useState({
  email:"",
  password:"",
 });
 const Login= async () =>{
  try {
      const api = "https://masterkraft-bn.onrender.com/API/user/login";
      const response = await axios.post(api, {
        email: formData.email,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = response.data.token;
      const role = response.data.data.user.role;

      if (!token) {
        alert("No token provided. User cannot access the dashboard.");
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      alert("Login successful!");

      if (role === 'admin') {
        window.location.href='./dashboard'
      } else {
        window.location.href='./wekraft'
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.error('Error during API call:', error);
        alert("Network error. Check your network connection.");
      }
    }
 }
 const handleChange=e=>{
  setFormData({...formData,[e.target.name]:e.target.value})
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
                 <form action="" onSubmit={Login}>
                 <div className="input-box">
                   <input type="text" name="email" required="required" value={formData.email} onChange={handleChange}/>
                   <span>Email</span>
                 </div>
                 <div className="input-box">
                   <input type="text" name="password" required="required" value={formData.password} onChange={handleChange}/>
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