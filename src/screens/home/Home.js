import React from 'react'
import Footer from '../../common/Footer/Footer'
import Header from '../../common/Header/Header'
import About from '../about/About'
import Blog from './Blog.js'
import './Home.css'

export default function Home() {
  return (
    <div>
        <Header/>
        <div style={{backgroundColor:"#b7d4e059"}}>
          <About/>
        <Blog></Blog>
        </div>
        <Footer/>
    </div>
  )
}
