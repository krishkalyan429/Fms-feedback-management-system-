import React ,{useState} from 'react';
import {Carousel, Container} from 'react-bootstrap'
import CSharp from '../images/C#.jpg';
import Java from '../images/Java.jpg';
import Python from '../images/Python.jpg';
function CourseSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container className="mt-3 w-50" >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSharp}
            alt="C#"
          />
          <Carousel.Caption>
            <h3>C# in 20 Days</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Java} class="d-block w-100" alt="Java"/>
  
          <Carousel.Caption>
            <h3>Java in 15 Days</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      </Container>
    );
  }

export default CourseSlider;