
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import './slider.css'

export default function Slider() {

    return (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block " 
              src={slide3}
              alt="First slide"
              width="100%"
              height="500px"
              
            />
            <Carousel.Caption>
              <h3>Friends Therapy</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block"
              src={slide1}
              alt="Second slide"
              width="100%"
              height="500px"
              
            />
            <Carousel.Caption>
              <h3>Meditation</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={slide2}
              alt="Third slide"
              width="100%"
              height="500px"
            />
            <Carousel.Caption>
              <h3>Explore</h3>
              {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
