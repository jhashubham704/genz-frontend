import React from 'react'
import Header from '../../common/Header/Header'
import './Chats.css'
import Chat_contacts from './Chat_contacts.js'
import Chat_window from './Chat_window'
import { useState } from 'react'
import Login from './Login'
import { display } from '@mui/system'

export default function Chats() {
 
  const [loggedin , setLoggedin] = useState("false")
  const [contact , setContact] = useState(null)
  console.log(contact);

  const setChatScreen=(item)=> {
    setContact(item.item)
    console.log(item.item) ; 
  }

  const loginhandler =(value)=> { 
      setLoggedin(value) ; 
  }

  return (
    <div  style={{width:"100%"  , height:"100%" , display:"block" }}>
        
        {(loggedin==="false")?(<Login loginhandler={loginhandler} />) : (<div style={{display:"flex"}}> <Chat_contacts setChatScreen= {setChatScreen}/>
        <Chat_window  value={contact} /></div>)}

    </div>
  )
}
