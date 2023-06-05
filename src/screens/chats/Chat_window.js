import React from 'react'
import { useState, useEffect } from 'react';
import './Chat_window.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { borderColor } from '@mui/system';
import { useContext ,usercontext } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import {io} from 'socket.io-client'; 

export default function Chat_window(props) {
   
   const socket = io("http://localhost:5003") ; 
  let user = JSON.parse(localStorage.getItem('user'))  ; 
  let selectedcontact = JSON.parse(localStorage.getItem('selected_user')); 
  const [message,setmessage] = useState("") ; 
  const[received, setreceived] = useState([]);
  const[sent , setsent] = useState([]); 
  const[chat_id , setchat_id] = useState(""); 

  useEffect(() => {
   
    const url = "http://localhost:5002/startchat";
    let selected_email = selectedcontact.email ; 
    let loggedin_email = user.email ; 
    const fetchData = async () => {
      try {
        const data = await fetch(url,{
      method: 'Post',
      body: JSON.stringify({users:[selected_email ,loggedin_email]}),
      headers: {
        'Content-type': 'Application/json'
      }});
        const chat = await data.json();
         setchat_id(chat._id) ; 
        console.log(chat);
          ; 
      } catch (error) {
        console.log("error", error); 
      }
    };
     fetchData();
     
    }
, );

useEffect(()=> { 
    socket.emit("join-room", chat_id) ; 
    socket.on("new-message",message=> { 
      setreceived(...message); 
      console.log(message); 
    })
  const fetchmessages= async()=> { 
    let messages= await fetch('http://localhost:5002/readmessages',{
      method:'Post',
      body: JSON.stringify({chat:chat_id}), 
      headers: {
        'Content-type': 'Application/json'
      }
    })
    let data  = await messages.json() ;
    console.log(messages) ; 
  }

  fetchmessages()
},[chat_id])

 const sendmessage = async()=> { 
    socket.emit("new-message",message) ; 
    let result = await fetch('http://localhost:5002/sendmessage', {
        method: 'Post',
        body: JSON.stringify({ chat:chat_id ,message: message, time :Date.now()  }),
        headers: {
          'Content-type': 'Application/json'
        },
      });
      result = await result.json();
      console.log(result);
 }

 const closeChat=()=> { 
   localStorage.removeItem('selected_user'); 
 }

  return (
    <div className='chat-window'>
       <div className='chat-banner'>
        <div classname='nav'>
        <CancelIcon  onClick={closeChat} className='closechat'></CancelIcon>
      </div>
           <h3>{selectedcontact.name} </h3>
           
        </div>

        <div className='chat-box'> 
        <div className='received'>
           { 
            received.map((item)=> { 
              return(
                <div className='received-m' ><p>{item}</p></div>
               )
            })
           }
        </div>
        <div className= 'sent'>
        { 
            sent.map((item)=> { 
              if(item.from===user.email && item.to===selectedcontact.email){return(
                <div id={item.time} className='sent-m' ><p>{item.message}</p></div>
               )}
             
            })
           }
        </div>
        </div>

        <div className='textbox'>
        <form className='text-field'>
            <input type="text" placeholder='type your message here ' onChange={(event)=>setmessage(event.target.value)} ></input>
        </form>
         <SendIcon color="primary" onClick={sendmessage} />
        
        </div>
    </div>
  )
}


 


