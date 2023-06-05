import React from 'react'
import './Profile.css'

export default function Profile() {
  
    let user = JSON.parse(localStorage.getItem('user'))  ; 
   
    const editProfile=()=> { 
       
    }

  return (
    <div className='profile-container'>
        <div className='left-div'>
          <div className='profile-pic'>
            <img src='https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg' style={{"height":"200px", "width":"200px" , "border-radius":"50px"}}></img>
            <button onClick={editProfile} className='buttons'>Edit Profile</button>
          </div>
          <div className='contact-info'>
          <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
          </div>
        </div>
       <div className='right-div'>
         <h1 placeholder='Please add your details'>{user.name}</h1>
         <h5 placeholder='Please add your details'>{user.about}</h5>
         <h5 placeholder='Please add your details'>{user.hobbies}</h5>
       </div>
    </div>
  )
}
