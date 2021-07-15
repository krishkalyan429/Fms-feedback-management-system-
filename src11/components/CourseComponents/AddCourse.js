import React from "react";
import { connect } from "react-redux";
import {  _displayMessage } from '../../actions/CourseAction'
import AddCourseComponent from './AddCourseComponent';
import CourseService from '../../services/CourseServices/CourseService'
// import Header from '../pages/Header';
// import Footer from '../pages/Footer';
const courseService = new CourseService();
class AddCourse extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/course/get-by-id/${this.props.redirectionId}`)
        return <div className = "ui container">
            {/* <Header title="ADD COURSE" /> */}
            
            <br/>
            <AddCourseComponent message = {this.props.message} course = {this.props.course} onSubmit = {this.props.onSubmit}/>
            <br/><br/>
            {/* <Footer></Footer> */}
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        course: state.course.course,
        message : state.course.message,
        redirectToShow : state.course.redirectToShow,
        redirectionId : state.course.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (course) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
               alert("Course Added successfully.");
                dispatch(_redirectToShow(true,response.data.courseId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            courseService.addCourse(course,responseCallBack,catchCallBack );
        }
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCourse);