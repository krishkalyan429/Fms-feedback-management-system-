import { Container } from '@material-ui/core';
import React ,{useState} from 'react';
import {Carousel} from 'react-bootstrap'
import CSharp from '../images/CSharp.png';
import Java from '../images/Java.jpg';
import Python from '../images/Python.jpg';
function CourseSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Container>
        <div style ={{marginTop:"100px"}}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSharp}
            alt="C#"
          />
          <Carousel.Caption>
            <h3>C# in 20 Days</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Java}
         class="d-block w-100"
          alt="Java"/>
  
          <Carousel.Caption>
            <h3>Java in 15 Days</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Python}
            alt="Python"
          />
  
          <Carousel.Caption>
            <h3>Python in 15 days</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Container>
    );
  }

export default CourseSlider;