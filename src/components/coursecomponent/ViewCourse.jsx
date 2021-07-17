import React, { Component } from "react";
import CourseService from "../../services/CourseService";

class ViewCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
      course: {},
    };
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    CourseService.getCourseById(this.state.id).then((res) =>
      this.setState({ course: res.data })
    );
  }

  render() {
    return (
      <div style={{marginTop:"100px"}}>
        <div className="card col-md-6 offset-md-3" >
          <h3 className="text-center">View Course Details</h3>
           <div className="card-body">
             <div className="row text-left">
              <label>Course Name: </label>
                <div>{this.state.course.courseName}</div>
             </div>
              <div className="row text-left">
               <label>Course Description: </label>
                <div>{this.state.course.courseDescription}</div>
              </div>
             <div className="row text-left">
              <label>Duration: </label>
               <div>{this.state.course.duration}</div>
            </div> 
           </div>
         </div>
      </div>
    );
  }
}

export default ViewCourse;