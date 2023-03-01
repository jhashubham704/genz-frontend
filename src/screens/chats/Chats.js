import React from 'react'
import Header from '../../common/Header/Header'
import './Chats.css'
import Chat_contacts from './Chat_contacts.js'
import Chat_window from './Chat_window'
import { useState } from 'react'

export default function Chats() {

  const [contact , setContact] = useState(null)
  console.log(contact);

  const setChatScreen=(item)=> {
    setContact(item.item)
    console.log(item.item) ; 
  }

  return (
    <div  style={{width:"100%"  , height:"100%" , display:"block" }}>
        <div style={{display:"flex"}}>
        <Chat_contacts setChatScreen= {setChatScreen}/>
        <Chat_window  value={contact} />

        </div>
    </div>
  )
}
