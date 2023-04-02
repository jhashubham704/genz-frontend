import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import Footer from '../../common/Footer/Footer'
import './Register'
import Register from './Register';
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";


export default function Login(props) {

  const [temppass, setTemppass] = useState("");
  const [tempemail, setTempemail] = useState("")
  const [signedup, setsignedup] = useState(true)
  const [value, setValue] = useState("")
  const [data, useData] = useState()
 
  const setLogindata = async () => {
    let result = await fetch('http://localhost:8085/login', {
      method: 'Post',
      body: JSON.stringify({ email: tempemail, password: temppass }),
      headers: {
        'Content-type': 'Application/json'
      },
    });
    result = await result.json();
    console.log(result.res);
    if (result.res === true) {
      props.loginhandler(true)
    }
    else {
      props.loginhandler(false)


    }
    console.log(value)
  }
  const setalert = () => {
    if (value === "false") {
      return (<Alert severity="error">This is an error alert — check it out!</Alert>)
    }
    else {
      return (<div></div>)
    }
  }

  return (
    <div>
      {(signedup === true) ? (<div>
        <div className='login-container'>
          <div className='login-card'>
            <h3>Please login to chat!</h3>
            <form className='loginform'>
              <input type="text" placeholder="email" onChange={(e) => { setTempemail(e.target.value) }} ></input>
              <br></br>
              <input type="password" placeholder="password" onChange={(e) => { setTemppass(e.target.value) }} ></input>
            </form>
            <Button variant="contained" color="success" onClick={setLogindata}>login</Button>  <Link to="/register"  variant="contained" color="success" >Signup</Link>
            <div> {setalert()} </div>
          </div>
          <Footer />
        </div>
      </div>) : (<Register />)
      }
    </div>
  )
}
