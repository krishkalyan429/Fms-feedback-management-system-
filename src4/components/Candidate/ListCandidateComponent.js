import React, { Component } from 'react';
import CandidateService from '../../Service/CandidateService';

class ListCandidateComponent extends Component {
   constructor(props){
       super(props)
       this.state={
         candidates:[]  
       }
       this.addCandidate =this.addCandidate.bind(this);
       this.editCandidate=this.editCandidate.bind(this);
       this.deleteCandidate=this.deleteCandidate.bind(this);
   }
   deleteCandidate(id){
    CandidateService.deleteCandidate(id).then( res=>{
     this.setState({candidates: this.state.candidates.filter(candidate => candidate.id !==id)});
    });
   }
   
   editCandidate(id){
this.props.history.push(`/update-candidate/${id}`);
   }
   componentDidMount(){
       CandidateService.getCandidates().then((res)=>{
           this.setState({candidates:res.data});
       });
   }
   addCandidate(){
       this.props.history.push('/add-candidate');
   }
    render() {
        return (
            <div>
                <h2 className="text-center">Candidates List</h2>
                <div className="row"></div>
                <button className="btn btn-primary " onClick={this.addCandidate}>Add Candidate</button>
                <div className="row"></div>
                
                
                <table className="table table-striped table-border">
<thead>
    <tr>
        <th>Candidate First Name</th>
        <th>Candidate Second Name</th>
        <th>Candidate Email Id</th>
        <th>Candidate Gender</th>
        <th>Candidate Age</th>
        <th>Candidate phoneNumber</th>
        <th>Candidate Skills</th>
        <th>Actions</th>
    </tr>
</thead>
            <tbody>
                {
                    this.state.candidates.map(
                        candidate =>
                        <tr key ={candidate.id}>
                      <td> {candidate.firstName}</td>
                      <td> {candidate.lastName}</td>
                      <td> {candidate.emailId}</td>
                      <td>{candidate.gender}</td>
                      <td>{candidate.age}</td>
                      <td>{candidate.phoneNumber}</td>
                      <td>{candidate.skills}</td>
                      <td>
                          <button onClick={()=>this.editCandidate(candidate.id)} className="btn btn-info">Update</button>
                          <button  onClick={()=>this.deleteCandidate(candidate.id)} className="btn btn-danger">Reject</button>
                      </td>
                        </tr>
                    )
                }
                </tbody>  
              
                </table>
            </div>
        );
    }
}

export default ListCandidateComponent;