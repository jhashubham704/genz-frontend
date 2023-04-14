import React, { useState ,useEffect } from 'react'
import './chat_contacts.css'
import Button from '@mui/material/Button';

export default function Chat_contacts(props) {
  const Contacts = [ 
    { 
        "id":"a1" ,
        "name":"John wick" ,
        "status": "You wanted me back… I'm back!" ,
        "profile": "https://static01.nyt.com/images/2019/05/18/arts/johnwick-anatomy/johnwick-anatomy-square640-v3.jpg",
        "messages": {
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
    { 
        "id":"a2" ,
        "name":"Tony Stark" , 
        "status":"the truth is..I am iron man", 
        "profile": "https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
    { 
        "id":"a3" ,
        "name":"Bruce Waye" , 
        "status":"Endure, Master Wayne. ..." ,
        "profile": "https://imageio.forbes.com/images-forbes/media/2010/04/12/0412_bruce-wayne_280x340.jpg?format=jpg&width=280",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
    { 
        "id":"a4" ,
        "name":"Clark kent" , 
        "status": "Stay away from crypto....nium.." ,
        "profile": "https://i.pinimg.com/originals/76/fc/86/76fc86692e1d7e03a21e130ead24904a.jpg",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
    { 
        "id":"a5" ,
        "name":"Steve Rogers" , 
        "status" : "avengers assemble! ", 
        "profile": "https://i.pinimg.com/originals/29/8c/93/298c93021177be73e7f670c31f90c914.jpg",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
  
    { 
        "id":"a6" ,
        "name":"Peter Parker" ,
        "status" : "I don't feel so good.. " ,
        "profile": "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/tom-holland-robert-downey-jr_0.jpg",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
    { 
        "id":"a8" ,
        "name":"Diana Prince" , 
        "status" : "suffering Sappho!",
        "profile": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Diana-Prince.Wonder-Woman.webp",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
    { 
        "id":"a9" ,
        "name":"Carol Danvers" , 
        "status" : "Available", 
        "profile": "https://i.pinimg.com/736x/09/98/15/0998153de120d777e8ee3ddb865a92c7.jpg",
        "messages": { 
        "from": "null",
        "to": "null",
        "message":"null"
        }
    },
  ]
  const [contactslist,setcontactslist] = useState([]); 

  useEffect(() => {
    const url = "http://localhost:5001/getcontacts";

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
   props.setChatScreen(item) ; 
   

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
                <div className='contact-card' onClick={()=>startChat(item)}>
                  <img className='profile-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU"></img>
                  <div className='contacts-text'>
                <h2>{item.name}</h2>
                <p> {item.email}</p>
                </div> 
                </div>
              )
             })
          }
        </div>
    </div>

  )

        }