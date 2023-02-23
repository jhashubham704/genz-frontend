import React from 'react'
import './Experts.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Header from '../../../common/Header/Header';
import Footer from '../../../common/Footer/Footer';

export default function Experts() {
  return (
    <div>
    <Header/>
    <div className='experts-container'>
     <h1> 
        Our List of Experts will help you resolve your queries related to stress Anxiety/Depression or any other 
        mental Issues you are currently going through. 

     </h1>
       {Expertsdata.map((item)=>{ 
        return(
        <div className='expert-bar'>
            <div className='expert-profile'>
               <img src={item.profile} className='profile-img'></img> 
            </div>

          <div className='textbox'>
            <h3> {item.name}</h3><br></br>
            <h4>{item.age}</h4> <br></br>
            <h4>{item.occupation}</h4> <br></br>
            <h4>{item.hobbies}</h4> <br></br>
            <p>{item.summary}</p> <br></br>
         </div>        
          <div className='buttons'>
          <Button variant="contained" endIcon={<SendIcon />}>
          Chat now! 
          </Button>
          </div>
          </div>
        )
        }) }

    </div>
    <Footer></Footer>
    </div>
  )
}



const Expertsdata = [ 
    { 
        "id": "a1" , 
        "name": "Expert-1" ,
        "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
         "summary" : "Expert-1 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
         "age" : "35" ,
         "occupation" : "Engineer",
         "hobbies": "Reading/Writing/Trekking",
    },
    { 
        "id": "a2" , 
        "name": "Expert-2" ,
        "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
         "summary" : "Expert-2 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
         "age" : "46" ,
         "occupation" : "Doctor",
         "hobbies": "Reading/Writing/Traveling",
    },
    { 
        "id": "a3" , 
        "name": "Expert-3" ,
        "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
         "summary" : "Expert-3 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
         "age" : "35" ,
         "occupation" : "Soldier",
         "hobbies": "Gyming/Yoga/Trekking",
    } ,
    { 
        "id": "a4" , 
        "name": "Expert-4" ,
        "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
         "summary" : "Expert-1 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
         "age" : "25" ,
         "occupation" : "Architect",
         "hobbies": "Painting/Biking/Gardening",
    },
    { 
        "id": "a5" , 
        "name": "Expert-5" ,
        "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
         "summary" : "Expert-5 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
         "age" : "30" ,
         "occupation" : "Accountant",
         "hobbies": "Singing/Dancing/Standup comedy",
    },
    { 
        "id": "a6" , 
        "name": "Expert-6" ,
        "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
         "summary" : "Expert-1 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
         "age" : "50" ,
         "occupation" : "Business Owner",
         "hobbies": "Meditation/Writing/Yoga",
    }
]