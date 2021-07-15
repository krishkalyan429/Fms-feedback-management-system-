import React from "react";

export default class AddCourseComponent extends React.Component{
    courseIdRef = React.createRef();
    corseNameRef = React.createRef();
    courseDescription= React.createRef();
    duration = React.createRef();
    
    
    constructor(props){
        super(props);
        this.state = {
            file: null
          }
          this.handleChange = this.handleChange.bind(this)
    }

    render(){
        let component=(<div  class="ui column stackable center page grid">
        <div class="three wide column"></div>
        <form onSubmit = {this.onSubmit} className = "ui ten wide column form segment">
            <div>
            <div className = "field">
                <label>
                COURSE ID: <input type="number" step="1" ref={this.courseIdRef}/><br/>
                </label><br/>
            </div>

            <div className = "field">
                <label>
                COURSE NAME: <input type="text" min="3" max="15" ref={this.courseNameRef}/>
               </label><br/>
            </div>
                
            <div className = "field">
                    <label>
                    COURSE DESCRIPTION: <input type="text" ref={this.courseDESCRIPTIONRef}/>
                </label><br/>
            </div>

            <div className = "field">
                    <label>
                DURATION: <input type="number" min="10" max="10" ref={this.DURATIONRef}/>
                </label><br/>
            </div>

            
                <button type="submit" className="ui left floated button primary">Add Course</button>
                <br/>
            </div>
        </form>
        </div>);
        return component;
    }  

    onSubmit = (event) => {
        event.preventDefault();
        const listCourses = Array.from(this.props);
        const course = {
            courseName : this.courseNameRef.current.value,
            description : this.descriptionRef.current.value,
           duration: this.durationRef.current.value,
           
            lisCourses : listCourses
        }
        this.props.onSubmit(course);
    }
    
    handleChange = (event) => {
        this.setState({   
            file: URL.createObjectURL(event.target.files[0])
        })
    }
   
}