import React from 'react'
import Footer from '../../common/Footer/Footer'
import Header from '../../common/Header/Header'
import Blog from './Blog.js'

export default function Home() {
  return (
    <div>
        <Header/>
        <div style={{height:"600px",border:"2px solid skyblue",backgroundColor:"#b7d4e059"}}>
        <Blog></Blog>
        </div>
        <Footer/>
    </div>
  )
}
