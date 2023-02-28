import React from 'react'
import './Chat_window.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { borderColor } from '@mui/system';


export default function Chat_window(props) {
  return (
    <div className='chat-window'>
        <div className='chat-banner'>
           <h2>{props.name}</h2>
        </div>

        <div className='chat-box'> 
        <div className='received'>
           hi 
        </div>
        <div className= 'sent'>
           hello
        </div>
        </div>

        <div className='textbox'>
        <form className='text-field'>
            <input type="text" placeholder='type your message here ' ></input>
        </form>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        </div>
    </div>
  )
}
