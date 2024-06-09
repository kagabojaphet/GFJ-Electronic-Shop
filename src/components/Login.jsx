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

 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:9090/api/v1/user', {
            firstName,
            lastName,
          email,
        phoneNumber,
      password,
    confirmPassword, });
      alert('User registered successfully');
      } catch (error) {
          alert(error.response.data);
      }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:9090/api/v1/user/login', { email, password });
          localStorage.setItem('token', response.data.message.token);
          alert('Login successful');
          if(response.data.message.data.user.role ==="user"){
            window.location.href = '/';
          }
          else{
            window.location.href = '/Admin';
          }
      } catch (error) {
          alert('Invalid credentials');
      } 
  };
  
    return(
        <>
        <div className="Container">
        <div className="contact-form">
        <div className="form-option">
            <button className={login===true ? "active":""} onClick={Handlelogin}>Login</button>
            <button className={signup===true ? "active":""} onClick={Handlesignup}>Signup</button>
          </div>
              {login && (
                 <form action="" onSubmit={handleSubmit}>
                 <div className="input-box">
                   <input type="text" name="email" required="required" value={email} onChange={(e) => setEmail(e.target.value)}/>
                   <span>Email</span>
                 </div>
                 <div className="input-box">
                   <input type="text" name="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)}/>
                   <span>Password</span>
                 </div>
                 <div className="input-box">
                   <input type="submit" value="Login" />
                 </div>
               </form>
              )}
              
              {signup && (
                <form action="" onSubmit={handleSignup}>
                <div className="input-box">
                  <input type="text" name=" " required="required" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                  <span>FirstName</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                  <span>LastName</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                  <span>PhoneNumber</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <span>Password</span>
                </div>
                <div className="input-box">
                  <input type="text" name=" " required="required" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                  <span>ConfrimPassword</span>
                </div>
                <div className="input-box">
                  <input type="submit" value="Sign Up" />
                </div>
              </form>
              )}
              
            </div>
        </div>
        </>
    )
}
export default LoginSignup