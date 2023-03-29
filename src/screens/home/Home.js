import React from 'react'
import Footer from '../../common/Footer/Footer'
import Header from '../../common/Header/Header'
import About from '../about/About'
import Blog from './Blog.js'
import './Home.css'
import Slider from './Slider'
import Experts from './Experts/Experts'

export default function Home() {
  return (
    <div>
        
        <div style={{backgroundColor:"#b7d4e059"}}>
          <About/>
          <Slider/>
          <Blog/>

        </div>
    </div>
  )
}
