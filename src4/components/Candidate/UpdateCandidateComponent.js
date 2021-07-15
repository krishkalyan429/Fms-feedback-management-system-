import React, { Component } from 'react';
import CandidateService from '../../Service/CandidateService';
class UpdateCandidateComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
 firstName:'',
 lastName:'',
 emailId:'',
 gender:'',
 age:'',
 phoneNumber:'',
  skills:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
       this.changeSkillsHandler=this.changeSkillsHandler.bind(this);
        this.updateCandidate = this.updateCandidate.bind(this);
    }
    componentDidMount(){
        CandidateService.getCandidateById(this.state.id).then((res)=>{
             let candidate = res.data;
             this.setState({
                 firstName: candidate.firstName,
                 lastName:candidate.lastName,
                 emailId:candidate.emailId,
                 gender:candidate.gender,
                 age:candidate.age,
                 phoneNumber:candidate.phoneNumber,
                 skills:candidate.skills
             });
        });
    }
    updateCandidate=(e)=>{
e.preventDefault();
     let candidate ={firstName: this.state.firstName,lastName: this.state.lastName,emailId: this.state.emailId,gender:this.state.gender,age:this.state.age,phoneNumber:this.state.phoneNumber,skills:this.state.skills};
     console.log('candidate=>'+JSON.stringify(candidate));
    //  CandidateService.createCandidate(candidate).then(res =>
    //     {
    //     this.props.history.push('/candidates');
    //     });
    CandidateService.updateCandidate(candidate,this.state.id).then(res=>{
      this.props.history.push('/candidates');
    });
    }
    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }
    changeGenderHandler=(event)=>{
        this.setState({gender: event.target.value});
    }
    changeAgeHandler=(event)=>{
        this.setState({age: event.target.value});
    }
    changePhoneNumberHandler=(event)=>{
        this.setState({phoneNumber: event.target.value});
    }
    changeSkillsHandler=(event)=>{
        this.setState({skills: event.target.value});
    }
    cancel(){
        this.props.history.push('/candidates');
    }
    render() {
        return (
            <div>
               <div className="container">
                 <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className="text-center">Update Candidate</h3>
                  <div className="card-body">
                      <form>
                          <div className="form-group">
                              <label>First Name:</label>
                              <input placeholder="First Name" name="firstName" className="form-control" 
                              value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                               </div>
                               <div className="form-group">
                              <label>Last Name:</label>
                              <input placeholder="Last Name" name="lastName" className="form-control" 
                              value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                               </div>
                               <div className="form-group">
                              <label>Email Id:</label>
                              <input placeholder="Email Id" name="emailId" className="form-control" 
                              value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                               </div>
                               <div className="form-group">
                              <label>Candidate Gender:</label>
                              <input placeholder="Gender" name="gender" className="form-control" 
                              value={this.state.gender} onChange={this.changeGenderHandler}/>
                               </div>
                               <div className="form-group">
                              <label>Candidate Age:</label>
                              <input placeholder="Age" name="age" className="form-control" 
                              value={this.state.age} onChange={this.changeAgeHandler}/>
                               </div>
                               <div className="form-group">
                              <label>Candidate PhoneNumber:</label>
                              <input placeholder="PhoneNumber" name="phonenumber" className="form-control" 
                              value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                               </div>
                               <div className="form-group">
                              <label>Candidate skills:</label>
                              <input placeholder="Skills" name="skills" className="form-control" 
                              value={this.state.skills} onChange={this.changeSkillsHandler}/>
                               </div>
                               <button className="btn btn-success" onClick={this.updateCandidate}>save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                      </form>
                  </div>
              </div>
                 </div>
               </div>
            </div>
        );
    }
}

export default UpdateCandidateComponent;