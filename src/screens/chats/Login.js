import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import Footer from '../../common/Footer/Footer'
export default function Login(props) {

    const userData = [
        {
          "user" : "admin", 
          "password": "password"
        }
    ]
    const[user, setUser] = useState ( { 
        "name":"", 
        "pass": ""
     }
     )
     const[tempname , setTempname] = useState ("") ; 
     const[temppass , setTempass] = useState ("") ;
     const[tempemail , setTempemail] = useState ("") 
    const[tempnumber , setTempnumber] = useState ("") 
     const[value, setValue] = useState("true")
    const[data , useData] = useState()

     const setLogindata=async ()=> { 
       setUser({ 
        "name":{tempname} ,
        "pass": {temppass} ,
       })
       props.loginhandler(value) ; 
      

      let result = await fetch('http://localhost:5001/register' , { 
        method:'Post',
        body:JSON.stringify({tempname,tempemail,temppass,tempnumber}) ,
        headers:{ 
             'Content-type':'Application/json'
        }, 
      }) ; 
      result = await result.json() ; 
      console.log(result) ; 
     }


  return (
    <div className='login-container'>
    <div className='login-card'>
        <h3>Please login to chat!</h3>
        <form className='loginform'> 
            <input type="text" placeholder="name" onChange={(e)=> {setTempname(e.target.value)}}></input>
            <br></br>
            <input type="password" placeholder="password" onChange={(e)=> {setTempass(e.target.value)}} ></input>
            <br></br>
            <input type="text" placeholder="email" onChange={(e)=> {setTempemail(e.target.value)}} ></input>
            <br></br>
            <input type="number" placeholder="phone-number" onChange={(e)=> {setTempnumber(e.target.value)}} ></input>
        </form>
        <Button variant="contained" color="success" onClick={setLogindata}>login</Button>
    </div>
      <Footer/>
    </div>
  )
}
