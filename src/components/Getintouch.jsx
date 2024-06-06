import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GetProps from "./GetProps";
import { styled } from '@mui/system';




const CustomTextField = styled(TextField)(({ borderColor, labelColor }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: borderColor || 'black', 
      borderWidth: '1px', 
    },
    '&:hover fieldset': {
      borderColor: borderColor || 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: borderColor || 'black',
    },
  },
  '& .MuiInputLabel-root': {
    color: labelColor || 'black',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: labelColor || 'black',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // gradient background
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // shadow
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontSize: '12px',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)', // gradient background on hover
    },
  }));

const GetinTouch=()=>{
    const [borderColor, setBorderColor] = useState('gray');
    const [labelColor, setLabelColor] = useState('#000');
    return(
        <>
            <div className="getintouch-container">
           <div className="text">
            <h1>Get in Touch</h1>
            <p>Fell free to get in touch with me.I am always open to discussing new projects,
             creative ideas or opportunities to be part of your visions.</p></div>
                <div className="getintouch">
                    <div className="left">
                    <CustomTextField 
                    label="FullName" 
                    variant="outlined" 
                    borderColor={borderColor} 
                    labelColor={labelColor} 
                    fullWidth
                    />
                    <CustomTextField 
                    label="Email" 
                    variant="outlined" 
                    borderColor={borderColor} 
                    labelColor={labelColor} 
                    fullWidth
                    />
                    <CustomTextField 
                    label="Subject" 
                    variant="outlined" 
                    borderColor={borderColor} 
                    labelColor={labelColor} 
                    fullWidth
                    />
                    <CustomTextField 
                    label="Message" 
                    variant="outlined" 
                    borderColor={borderColor} 
                    labelColor={labelColor} 
                    fullWidth
                    />
                       <CustomButton>Send</CustomButton>
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