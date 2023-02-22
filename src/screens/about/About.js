import { Diversity1 } from '@mui/icons-material'
import React from 'react'
import './about.css'
import img from './about.jpg'
export default function About() {
  return (
    <div className='div-main'>
      <div className='container'> 
        <div className="div-cont">
            <p className='heading-block'>
             <h3 className='heading'>About Us </h3> 
              </p>
            <p className='content'>
         Chat and share your feelings with random people like you.
         
         Read stories of how people come out of anxiety and depression without any medication.
         
         Shop products/books that help you rewire your brain.
         
         Help other people like you and earn coins.
         
         Get guidance and help form expert psychologists, spiritual guru and meditators without any hustle.
            </p>
        </div>
        <div className="div-img">
            <img src={img} alt="" />
        </div>
        </div>
    </div>
  )
}
