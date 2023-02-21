import React from 'react'
import './about.css'
import img from './about.jpg'
export default function About() {
  return (
    <div className='div-main'>
        <div className="div-cont">
            <p>
         Chat and share your feelings with random people like you.
         <br />
         <br />
         Read stories of how people come out of anxiety and depression without any medication.
         <br />
         <br />
         Shop products/books that help you rewire your brain.
         <br />
         <br />
         Help other people like you and earn coins.
         <br />
         <br />
         Get guidance and help form expert psychologists, spiritual guru and meditators without any hustle.
            </p>
        </div>
        <div className="div-img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
