import React from 'react'
import './Blog.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function blog() {
  return (
    <div className='blog-container'>
        
       { 
       blogs.map((item)=>{ 
       return( 
        <div className='blog-card'>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {item.poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {item.discription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={item.link}>
            Read more
          </Button>
        </CardActions>
      </Card>
       </div>
       )
       })
       }
       
    </div>
  )
}


const blogs = [ 
    { 
        "id": "a1" ,
        "title" : "How Meditation Changes the Brain" ,
        "link" : "https://mindworks.org/blog/how-meditation-changes-the-brain/" ,
        "discription" : "Did you know that simply sitting and breathing mindfully can significantly change the brain?" ,
        "poster" : "https://cdn-acalc.nitrocdn.com/yAFszfoNguCLZeASIoFlYQVglyWFFXfX/assets/images/optimized/rev-20a9bb1/wp-content/uploads/2017/10/How-meditation-changes-the-brain.jpg"
    } ,

    { 
        "id": "a2" ,
        "title" : "Meditation Benefits for the Mind and Body" ,
        "link" : "https://mindworks.org/blog/benefits-meditation-mind-body/" ,
        "discription" : "Our minds and our bodies are connected. If we’re unhappy for an extended time, our bodies become weaker and more susceptible to illness." ,
        "poster" : "https://cdn-acalc.nitrocdn.com/yAFszfoNguCLZeASIoFlYQVglyWFFXfX/assets/images/optimized/rev-20a9bb1/wp-content/uploads/2018/07/Benefits-meditation-Mind-Body.jpg"
    } ,

    { 
        
        "id": "a3" ,
        "title" : "Opening the Heart to Love" ,
        "link" : "https://mindworks.org/blog/opening-heart-love/" ,
        "discription" : "4 Heart Practices Meditation I think when I first came to practice, probably for the first couple years, I sat there and I thought about meditation" ,
        "poster" : "https://cdn-acalc.nitrocdn.com/yAFszfoNguCLZeASIoFlYQVglyWFFXfX/assets/images/optimized/rev-20a9bb1/wp-content/uploads/2018/07/4-Flavors-of-Love-web.jpg"

    },

    { 
        "id": "a4" ,
        "title" : "What is Spiritual Meditation?" ,
        "link" : "https://mindworks.org/blog/what-is-spiritual-meditation/" ,
        "discription" : "At its core, spiritual meditation is the mindful practice of connection to something that is greater, vaster, and deeper than the individual self. It may seem paradoxical, but the path to that connection passes through honest self-reflection" ,
        "poster" : "https://cdn-acalc.nitrocdn.com/yAFszfoNguCLZeASIoFlYQVglyWFFXfX/assets/images/optimized/rev-20a9bb1/wp-content/uploads/2018/07/Spiritual-meditation.jpg"
    },

    { 
        "id": "a5" ,
        "title" : "What is This Thing We Call Self?" ,
        "link" : "https://mindworks.org/blog/what-is-this-thing-we-call-self/" ,
        "discription" : "We know from our experience that everything is always changing. We wake up in the morning feeling one way, but what we think and feel an hour later is very different" ,
        "poster" : "https://cdn-acalc.nitrocdn.com/yAFszfoNguCLZeASIoFlYQVglyWFFXfX/assets/images/optimized/rev-20a9bb1/wp-content/uploads/2022/05/shutterstock_895093-web.jpg"
    }
]