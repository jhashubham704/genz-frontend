import React from 'react'
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header'
import Experts from './screens/home/Experts/Experts';
import Home from './screens/home/Home';

export default function 
() {
    let component ; 
    switch( window.location.pathname) { 
        case "/": 
        component = <Home/> 
        break
        case "/Chat": 
        component =<Home/> 
        break
        case "/Experts": 
        component = <Experts/>
        break
    }
  return (
    <div>
        <Header/>
        {component}
        <Footer/>
    </div>
  )
}
