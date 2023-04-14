import React from 'react'
import { useState, useEffect } from 'react';
import './Chat_window.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { borderColor } from '@mui/system';
import { useContext ,usercontext } from 'react';

export default function Chat_window(props) {



  console.log(props.value);
  let name;
  const [sender,setSender]= useState(props.user) ; 
  const [message,setmessage] = useState("") ; 
  const [contactslist,setcontactslist] = useState([]); 
  const[received, setreceived] = useState([]);
  const[sent , setsent] = useState([]); 

  useEffect(() => {
    const url = "http://localhost:5001/getcontacts";

    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const contactsdata = await data.json();
        setcontactslist(contactsdata) ; 
      } catch (error) {
        console.log("error", error);
      }
    };
    
    fetchData()

    }
, []);


  
 useEffect(()=> { 
   const api = "http://localhost:5002/readmessges";
  
   const fetchmessages = async()=> { 
    try{ 
      let receivedmessages = await fetch(api,{ 
        method: 'post',
        body: JSON.stringify({ from: name, to: sender }),
        headers: {
          'Content-type': 'Application/json'
        },
      }) ;
      receivedmessages = await receivedmessages.json(); 
      setreceived(receivedmessages) ; 
      console.log(receivedmessages)

    } catch (error) {
        console.log("error", error);
      }
   }

   const fetchsentmessages = async()=> { 
    try{ 
      let sentmessages = await fetch(api,{ 
        method: 'post',
        body: JSON.stringify({ from: sender, to: name }),
        headers: {
          'Content-type': 'Application/json'
        },
      }) ;
      sentmessages = await sentmessages.json();
      setsent(sentmessages) ;  
      console.log(sent)

    } catch (error) {
        console.log("error", error);
      }
   }
   fetchmessages(); 
   fetchsentmessages(); 
 },[]); 


  { 
   contactslist.map((item)=>{ 
  if (item.email===props.value.email) {
     name = item.name;
    console.log(name);
    }
   })
}

 const sendmessage = async()=> { 
    let result = await fetch('http://localhost:5002/sendmessage', {
        method: 'Post',
        body: JSON.stringify({ from: sender, to: name ,message: message, time :Date.now()  }),
        headers: {
          'Content-type': 'Application/json'
        },
      });
      result = await result.json();
      console.log(result);
 }

  return (
    <div className='chat-window'>
        <div className='chat-banner'>
           <h3>{name} </h3>
        </div>

        <div className='chat-box'> 
        <div className='received'>
           { 
            received.map((item)=> { 
              if(item.from===name && item.to===sender){return(
                <div className='received-m' id={item.time}><p>{item.message}</p></div>
               )}
             
            })
           }
        </div>
        <div className= 'sent'>
        { 
            sent.map((item)=> { 
              if(item.from===sender && item.to===name){return(
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
        <Button variant="contained" endIcon={<SendIcon />} onClick={sendmessage}>
          Send
        </Button>
        </div>
    </div>
  )
}


 


