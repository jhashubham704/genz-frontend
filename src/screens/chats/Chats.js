import React from 'react'
import Header from '../../common/Header/Header'
import './chats.css'
import Chat_contacts from './Chat_contacts.js'
import Chat_window from './Chat_window'
import { useState } from 'react'

export default function Chats() {

  const [contact , setContact] = useState({ 
    
    "id":"" ,
    "name":"" , 
    "status":"Please select a contact to start", 
    "profile": "",
    "messages": { 
    "from": "null",
    "to": "null",
    "message":"null"
  }
  } )

  const setChatScreen=(item)=> {
    setContact({item})
    console.log(contact) ; 
  }

  return (
    <div  style={{width:"100%"  , height:"100%" , display:"block" }}>
        <div style={{display:"flex"}}>
        <Chat_contacts setChatScreen= {setChatScreen}/>
        <Chat_window  contact={contact} />

        </div>
    </div>
  )
}
