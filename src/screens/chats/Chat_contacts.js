import React, { useState ,useEffect } from 'react'
import './chat_contacts.css'
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';

export default function Chat_contacts(props) {
  
  const [contactslist,setcontactslist] = useState([]); 

  useEffect(() => {
    const url = "http://localhost:8085/getcontacts";

    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const contactsdata = await data.json();
        setcontactslist(contactsdata) ; 
        console.log(contactslist);
      } catch (error) {
        console.log("error", error);
      }
    };
    
    fetchData();
}, []);

  const startChat = (item)=> { 
   localStorage.setItem("selected_user" , JSON.stringify(item) )
  console.log(item) ; 
  }
  return (
    <div className='contacts-list'>
        <div className='contacts-banner' >
          <h1>Contacts..</h1>
        </div>
        <div className='contacts'>
          { 
             contactslist.map((item)=>{ 
              return(
                <div className='contact-card' >
                  <img className='profile-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU"></img>
                  <div className='contacts-text'>
                <h2>{item.name}</h2>
                <p> {item.email}</p>
                </div> 
                <div><a href='/Chat_window'><ChatIcon color="success" onClick ={()=>startChat(item)}></ChatIcon></a></div>
                </div>
              )
             })
          }
        </div>
    </div>

  )

        }