import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
        <div className='head-main'>
            <div className="head-lf">
              <h3>LOGO</h3>
            </div>
            <div className="head-mid">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Chat</a></li>
                <li><a href="#">Experts</a></li>
              </ul>
            </div>
            <div className="head-rt">
              <h3>Profile</h3>
            </div>
        </div>
    </div>
  )
}
