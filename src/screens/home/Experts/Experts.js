import React, { useEffect, useState } from "react";
import './Experts.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Header from '../../../common/Header/Header';
import Footer from '../../../common/Footer/Footer';
import { width } from '@mui/system' 
import {CCard , CCardBody, CCardImage, CCardTitle, CCardText, CButton, CCardHeader} from "@coreui/react"

export default function Experts() {
  const [user, setUser] = useState([]);
  const fetchData = () =>  {
    return fetch("http://localhost:8085/experts")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      <div>
      <Header/>
      </div>
    <div className='experts-container'>
     <h5> 
        Our List of Experts will help you resolve your queries related to stress Anxiety/Depression or any other 
        mental Issues you are currently going through. 
     </h5> 
     <div className="card-container">
       {user.map((item)=>{ 
        return(
          <div className='expert-card'>
          <CCard style={{ width: '300px', height: '400px' }}>
  <CCardImage height={150} width={100} src="https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg" />
  <CCardHeader>{item.name}</CCardHeader>
  <CCardBody>
    <CCardText class="text-wrap" >
      {item.email}
      {item.phone}
      <p class="fs-6" >As human beings, we all face various challenges in life that can affect our mental health and wellbeing.  
        This is where a psychology consultant expert comes in.</p>
    </CCardText>
    <CButton color="info" shape="rounded-pill">Info</CButton>
  </CCardBody>
</CCard>

        </div>
        )
        }) }
</div>
    </div>
    </div>
  )
}



// const Expertsdata = [ 
//     { 
//         "id": "a1" , 
//         "name": "Expert-1" ,
//         "profile" : "https://www.globalcareercounsellor.com/blog/wp-content/uploads/2021/06/How-can-Career-Counsellors-Motivate-Students.jpg" ,
//          "summary" : "Expert-1 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
//          "age" : "35" ,
//          "occupation" : "Engineer",
//          "hobbies": "Reading/Writing/Trekking",
//     },
//     { 
//         "id": "a2" , 
//         "name": "Expert-2" ,
//         "profile" : "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2021/02/Counselor-vs-therapist-vs-psychologist.jpg" ,
//          "summary" : "Expert-2 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
//          "age" : "46" ,
//          "occupation" : "Doctor",
//          "hobbies": "Reading/Writing/Traveling",
//     },
//     { 
//         "id": "a3" , 
//         "name": "Expert-3" ,
//         "profile" : "https://media.istockphoto.com/id/1271711613/photo/family-psychotherapy-friendly-black-therapist-consulting-african-american-couple-at-his-office.jpg?s=612x612&w=0&k=20&c=U8UCdZ5akNf8c-9ZHjphNapD67uc_ORCF5afObqMuKI=" ,
//          "summary" : "Expert-3 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
//          "age" : "35" ,
//          "occupation" : "Soldier",
//          "hobbies": "Gyming/Yoga/Trekking",
//     } ,
//     { 
//         "id": "a4" , 
//         "name": "Expert-4" ,
//         "profile" : "https://media.istockphoto.com/id/1146554023/photo/mixed-race-teacher-explains-after-school-suspension.jpg?s=612x612&w=0&k=20&c=-3sW2wDdIhHyfJpsMcZgKqiLdFfPUNikHKMwiJuptXk=" ,
//          "summary" : "Expert-1 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
//          "age" : "25" ,
//          "occupation" : "Architect",
//          "hobbies": "Painting/Biking/Gardening",
//     },
//     { 
//         "id": "a5" , 
//         "name": "Expert-5" ,
//         "profile" : "https://media.istockphoto.com/id/874205566/photo/mid-adult-caucasian-man-discusses-something-with-therapist.jpg?s=612x612&w=0&k=20&c=FYyQ-O8QZyybB5b18ThHDNy7vGQTh0RYNryLLLdxWGw=" ,
//          "summary" : "Expert-5 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
//          "age" : "30" ,
//          "occupation" : "Accountant",
//          "hobbies": "Singing/Dancing/Standup comedy",
//     },
//     { 
//         "id": "a6" , 
//         "name": "Expert-6" ,
//         "profile" : "https://static.vecteezy.com/system/resources/previews/005/849/334/original/couple-and-family-counsellor-rgb-color-icon-relationship-counselling-marriage-therapy-mental-health-issues-in-romantic-relations-isolated-illustration-simple-filled-line-drawing-vector.jpg" ,
//          "summary" : "Expert-1 helps you to discuss your emotional and mental issues and suggest you the ways to handle it and enjoy your daily routeen." ,
//          "age" : "50" ,
//          "occupation" : "Business Owner",
//          "hobbies": "Meditation/Writing/Yoga",
//     }
// ]