import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import Footer from '../../common/Footer/Footer'
import './Register.css'
import { Link, useLocation } from "react-router-dom";

export default function Register(props) {

     const[tempname , setTempname] = useState ("") ; 
     const[temppass , setTemppass] = useState ("") ;
     const[tempemail , setTempemail] = useState ("") 
    const[tempnumber , setTempnumber] = useState ("") 
     const[value, setValue] = useState("true") 
    const[data , useData] = useState()

    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);


  const [signedup, setsignedup] = useState(false)

     const setLogindata=async ()=> { 

      let result = await fetch('http://localhost:5001/register' , { 
        method:'Post',
        body:JSON.stringify({name:tempname,email:tempemail,password:temppass,phone:tempnumber}) ,
        headers:{ 
             'Content-type':'Application/json'
        }, 
      }) ; 
      result = await result.json() ; 
      console.log(result) ; 
      setsignedup(true)
     }
     
  return (
    <div>
         <div className='register-container'>
    <div className='register-card'>
        <h3>Please login to chat!</h3>
        <form className='registerform'> 
            <input type="text" placeholder="name" onChange={(e)=> {setTempname(e.target.value)}}></input>
            <br></br>
            <input type="password" placeholder="password" onChange={(e)=> {setTemppass(e.target.value)}} ></input>
            <br></br>
            <input type="text" placeholder="email" onChange={(e)=> {setTempemail(e.target.value)}} ></input>
            <br></br>
            <input type="number" placeholder="phone-number" onChange={(e)=> {setTempnumber(e.target.value)}} ></input>
        </form>
        <Button variant="contained" color="success" onClick={setLogindata} href='chats'>Signup</Button>
    </div>
      <Footer/>
    </div>
    </div>
  )
}
