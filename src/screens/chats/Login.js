import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import Footer from '../../common/Footer/Footer'
import './Register'
import Register from './Register';
import Alert from '@mui/material/Alert';


export default function Login(props) {

  const [temppass, setTemppass] = useState("");
  const [tempemail, setTempemail] = useState("")
  const [signup, setsignup] = useState("false")
  const [value, setValue] = useState("")
  const [data, useData] = useState()

  const setLogindata = async () => {
    let result = await fetch('http://localhost:5001/login', {
      method: 'Post',
      body: JSON.stringify({ email: tempemail, password: temppass }),
      headers: {
        'Content-type': 'Application/json'
      },
    });
    result = await result.json();
    if (result.password === temppass && result.email === tempemail) {
      setValue("true");
    }
    else {
      setValue("false");
    }
    props.loginhandler(value);
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
      {(signup === "false") ? (<div>
        <div className='login-container'>
          <div className='login-card'>
            <h3>Please login to chat!</h3>
            <form className='loginform'>
              <input type="text" placeholder="email" onChange={(e) => { setTempemail(e.target.value) }} ></input>
              <br></br>
              <input type="password" placeholder="password" onChange={(e) => { setTemppass(e.target.value) }} ></input>
            </form>
            <Button variant="contained" color="success" onClick={setLogindata}>login</Button>  <Button variant="contained" color="success" onClick={() => setsignup("true")}>Signup</Button>
            <div> {setalert()} </div>
          </div>
          <Footer />
        </div>
      </div>) : (<Register />)
      }
    </div>
  )
}
