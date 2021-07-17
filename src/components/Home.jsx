import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseSlider from "../components/courseSlider";
import { Container } from "@material-ui/core";

class Home extends Component {
    render() { 
        return ( 
          
 <div>
  <Container className="mt-10 w-50">
  <div disply="flex" marginTop="500">
  < CourseSlider />
  
  </div> 
  </Container>
</div>
         );
    }
}
 
export default Home;