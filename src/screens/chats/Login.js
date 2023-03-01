import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
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
     const[value, setValue] = useState("true")
    const[data , useData] = useState()

     const setLogindata=()=> { 
       setUser({ 
        "name":{tempname} ,
        "pass": {temppass} ,
       })
       props.loginhandler(value) ; 
      userData.push(user) ; 
      console.log(userData) ; 
     }
  return (
    <div className='login-card'>
        <h3>Please login to chat!</h3>
        <form className='loginform'> 
            <input type="text" placeholder="name" onChange={(e)=> {setTempname(e.target.value)}}></input>
            <br></br>
            <input type="password" onChange={(e)=> {setTempass(e.target.value)}} ></input>
        </form>
        <Button variant="text" onClick={setLogindata}>login</Button>
    </div>
  )
}
