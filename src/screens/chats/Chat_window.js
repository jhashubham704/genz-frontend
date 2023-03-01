import React from 'react'
import './Chat_window.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { borderColor } from '@mui/system';


export default function Chat_window(props) {
  console.log(props.value);
  let key = props.value;
  let name;
  { 
    contacts.map((item)=>{ 
     if (item.id===key) {
      name = item.name;
      console.log(item);
     }
    })
 }
  return (
    <div className='chat-window'>
        <div className='chat-banner'>
           <h2>{name} </h2>
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

const contacts = [ 
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


