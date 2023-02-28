import React from 'react'
import './Header.css'
import logo from './Logo.jpg'
import profile from './profile pic.webp' 
export default function Header() {
  return (
    <div>
        <div className='head-main'>
            <div className="head-lf">
  
                <img src= {logo}  className='logo' alt='logo'></img>
                 
            </div>
            <div className="head-mid">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Chats">Chat</a></li>
                <li><a href="/Experts">Experts</a></li>
              </ul>
            </div>
            <div className="head-rt">
              <img src={profile} className="logo" alt='profile-picture'></img>
              {console.log(window.location.pathname)}
            </div>
        </div>
    </div>
  )
}
