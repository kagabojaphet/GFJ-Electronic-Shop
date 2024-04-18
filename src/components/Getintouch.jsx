import React from "react";
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import GetProps from "./GetProps";

const GetinTouch=()=>{
    return(
        <>
            <div className="getintouch-container">
           <div className="text">
            <h1>Get in Touch</h1>
            <p>Fell free to get in touch with me.I am always open to discussing new projects,
             creative ideas or opportunities to be part of your visions.</p></div>
                <div className="getintouch">
                    <div className="left">
                      <TextField 
                       id="outlined-password-input"
                       label="Fullname"
                       type="text"
                       autoComplete="current-password"
                       InputLabelProps={{ style: { fontWeight: 'bold' } }}
                       InputLabelProps={{ style: { fontSize: '15px'} }}
                     />
                      <TextField 
                       id="outlined-password-input"
                       label="email"
                       type="text"
                       autoComplete="current-password"
                       InputLabelProps={{ style: { fontWeight: 'bold' } }}
                       InputLabelProps={{ style: { fontSize: '15px'} }}
                       InputProps={{ style: { fontSize: '15px' } }}
                     />
                      <TextField
                      fullWidth 
                       id="outlined-password-input"
                       label="Subject"
                       type="text"
                       autoComplete="current-password"
                       InputLabelProps={{ style: { fontWeight: 'bold' } }}
                       InputLabelProps={{ style: { fontSize: '15px'} }}
                       InputProps={{ style: { fontSize: '15px' } }}
                     />
                      <TextField
                      fullWidth 
                       id="outlined-password-input"
                       label="Message"
                       type="text"
                       autoComplete="current-password"
                       InputLabelProps={{ style: { fontWeight: 'bold' } }}
                       InputLabelProps={{ style: { fontSize: '15px'} }}
                       InputProps={{ style: { fontSize: '15px' } }}
                     />
                     <Button variant="outlined" style={{ fontSize: '14px' }}>Send</Button>
                    </div>
                    <div className="right">
                        <h3>Stay in touch with us</h3>
                        <GetProps icon="fa-solid fa-location-dot" span="Adress:" paragraph="Rwanda-Kigali-Gasabo"/>
                        <GetProps icon="fa-solid fa-phone" span="Phone:" paragraph="+250 789-862-479"/>
                        <GetProps icon="fa-solid fa-paper-plane" span="Email:" paragraph="GFJElectronic@gmail.com"/>
                        <GetProps icon="fa-solid fa-earth-americas" span="Website:" paragraph="www.GFJElectronic.com"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GetinTouch