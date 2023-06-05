import React from 'react'
import './Header.css'
import logo from './Logo.jpg'
import profile from './profile pic.webp' 
import { Link, useNavigate } from "react-router-dom";
export default function Header() {

  const auth = localStorage.getItem('user') ; 
   const Navigate = useNavigate(); 
   
   const logout = ()=> { 
   localStorage.clear(); 
   Navigate('/Login') ; 
   }

  return (
    <div>
        <div className='head-main'>
            <div className="head-lf">
  
                <img src= {logo} className='logo' alt='logo' ></img>
                 
            </div>
            <div className="head-mid">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Chats">Chat</a></li>
                <li><a href="/Experts">Experts</a></li>
                <li>{auth ? (<a href="/Login" onClick={logout}>Logout</a>):(<a href="/Login">Login</a>)}</li>
              </ul>
            </div>
            <div className="head-rt">
             <a href="/Profile"><img src={profile} className="logo" alt='profile-picture' ></img></a> 
              {console.log(window.location.pathname)}
            </div>
        </div>
    </div>
  )
}
