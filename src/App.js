import { display } from '@mui/system'
import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Footer from './common/Footer/Footer'
import Header from './common/Header/Header'
import Chats from './screens/chats/Chats'
import Experts from './screens/home/Experts/Experts'
import Home from './screens/home/Home'
import Register from './screens/chats/Register'
import Login from './screens/chats/Login'
import Chat_window from './screens/chats/Chat_window'
import Chat_contacts from './screens/chats/Chat_contacts'
import Privaterouter from './Privaterouter'

export default function App() {

  return (
    <div className='App' style={{width:"100%" , height: "100%" ,display:"block"}}>
      <Header/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="experts" element={ <Experts/> } />
        <Route path="Login" element={ <Chats /> } />
        <Route element={<Privaterouter/>} >
          <Route path="chats" element={ <Chat_contacts/> } />
          <Route path="Contacts" element={<Chat_contacts />}/>
          <Route path="Chat_window" element={ <Chat_window/> } />
          <Route path='Logout' element={<Home/>} />
        </Route >
      </Routes>
      
    </div>
  )
}
