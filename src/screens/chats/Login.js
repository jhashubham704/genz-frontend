import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import Footer from '../../common/Footer/Footer'
import './Register'
import Register from './Register';
import Alert from '@mui/material/Alert';

import { Link, useNavigate } from "react-router-dom";
import { useContext, createContext} from 'react';
import Chat_window from './Chat_window';
import Chat_contacts from './Chat_contacts';

export default function Login(props) {

  const [temppass, setTemppass] = useState("");
  const [tempemail, setTempemail] = useState("")
  const Navigate = useNavigate() ; 

  useEffect(()=> { 
    const auth = localStorage.getItem('user'); 
    if(auth){ 
      Navigate('/') ; 
    }
  })

  const setLogindata = async () => {
    let result = await fetch('http://localhost:5001/login', {
      method: 'Post',
      body: JSON.stringify({ email: tempemail, password: temppass }),
      headers: {
        'Content-type': 'Application/json'
      },
    });
    result = await result.json();
    console.log(result);
    if (result.password === temppass) {
      props.loginhandler(true)
      Navigate("/chats") ; 
    }
    
    else {
      props.loginhandler(false)
    }
    localStorage.setItem("user", JSON.stringify(result)) ; 
    }
  

  return (
    <div>
      <div>
        <div className='login-container'>
          <div className='login-card'>
            <h3>Please login to chat!</h3>
            <form className='loginform'>
              <input type="text" placeholder="email" onChange={(e) => { setTempemail(e.target.value) }} ></input>
              <br></br>
              <input type="password" placeholder="password" onChange={(e) => { setTemppass(e.target.value) }} ></input>
            </form>
            <Button variant="contained" color="success" onClick={setLogindata}>login</Button>  <Link to="/register"  variant="contained" color="success" >Signup</Link>
          </div>
          <Footer />
        </div>
      </div> 
    
      
    </div>
  )
}
