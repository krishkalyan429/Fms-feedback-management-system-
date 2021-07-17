import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:'',
                name:'',
                hiredate: '',
                job: '',
                salary: ''
        }
        this.changeEmployeeNameHandler= this.changeEmployeeNameHandler.bind(this);
        this.changeHiredateHandler= this.changeHiredateHandler.bind(this);
        this.changeJobHandler = this.changeJobHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }     

    saveEmployee = (e)=>{
        e.preventDefault();
        let employee ={ id: null, name: this.state.name, hiredate: this.state.hiredate,
            job: this.state.job, salary: this.state.salary
        };
        console.log(JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        })
    }  
    
    cancel(){
        this.props.history.push('/employees');
    }

    changeEmployeeNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }

    changeHiredateHandler = (event) =>{
        this.setState({hiredate: event.target.value});
    }

    changeJobHandler = (event) =>{
        this.setState({job: event.target.value});
    }

    changeSalaryHandler = (event) =>{
        this.setState({salary: event.target.value});
    }

   

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter Employee Name</label>
                                        <input placeholder="Employee Name" name="name"
                                            className="form-control" value = {this.state.name} 
                                            onChange = {this.changeEmployeeNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Employee Hiredate(yyyy-mm-dd)</label>
                                        <input placeholder="Hireddate" name="hiredate"
                                            className="form-control" value = {this.state.hiredate} 
                                            onChange = {this.changeHiredateHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Employee Job</label>
                                        <input placeholder="Employee Job" name="job"
                                            className="form-control" value = {this.state.job} 
                                            onChange = {this.changeJobHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Employee Salary</label>
                                        <input placeholder="Employee Salary" name="salary"
                                            className="form-control" value = {this.state.salary} 
                                            onChange = {this.changeSalaryHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveEmployee}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default CreateEmployeeComponent;