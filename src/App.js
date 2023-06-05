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
import Profile from './Profile/Profile'
import './App.css'
export default function App() {

  return (
    <div className='App'>
      <Header/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={ <iframe src='http://localhost:3000/' width={"1020"} height={"1000"} padding-top={35} className='iframe'></iframe> } />
        <Route path="experts" element={ <Experts/> } />
        <Route path="Chats" element={ <iframe src='http://localhost:3000/'></iframe> } /> 
        <Route path="Contacts" element={ <iframe src='http://localhost:3000/'></iframe> } /> 
        <Route path="Login" element={ <iframe src='http://localhost:3000/'></iframe> } /> 
      </Routes>
      <Footer/>n
    </div>
  )
}
