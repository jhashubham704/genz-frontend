import { Diversity1 } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './about.css'
import img from './about.jpg'
export default function About() {

  const[text,settext]= useState({ title:"", discription:""}); 

  useEffect(()=> { 
    const gettext = async()=> { 
      let data = await fetch('http://localhost:8085/gettextdata', { 
        method: 'post',
        body: JSON.stringify({ Title: "About us" }),
        headers: {
          'Content-type': 'Application/json'
        },
      })
      data = await data.json(); 
      settext({title:data.Title , discription:data.Discription}); 
      console.log(text) ; 
    }
    gettext(); 
  },[])
  

  return (
    <div className='div-main'>
      <div className='container'> 
        <div className="div-cont">
            <p className='heading-block'>
             <h3 className='heading'>About Us </h3> 
              </p>
            <p className='content'>
           {text.discription}
            </p>
        </div>
        <div className="div-img">
            <img src={img} alt="" />
        </div>
        </div>
    </div>
  )
}
