import logo from './logo.svg';
import './App.css';
import ValidatedLoginForm from './components/Login/Login';
import SignUp from './SignUp/SignUp';
import React from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import UserService from '../src/Service/UserService';
import CreateUser from './components/User/CreateUser';
import ListCandidateComponent from './components/Candidate/ListCandidateComponent';
 import HeaderComponent from './components/Candidate/HeaderComponent'
 import FooterComponent from './components/Candidate/FooterComponent'
 import CreateCandidateComponent from './components/Candidate/CreateCandidateComponent'
import UpdateCandidateComponent from './components/Candidate/UpdateCandidateComponent';
import Login from './components/Login/Login';
//import {BrowserRouter as Router, Route,Switch}from 'react-router-dom';
function App() {
  return (
    <Router>
  
      <HeaderComponent/>
   <div className="container">
     <Switch>
     {/* <SignUp/> */}
     {/* <ValidatedLoginForm/> */}
      <Route path="/" exact component={ListCandidateComponent}></Route>
       <Route path="/candidates" component={ListCandidateComponent}></Route>
       <Route path="/add-candidate" component={CreateCandidateComponent}></Route>
       <Route path="/update-candidate/:id" component={UpdateCandidateComponent}></Route>
 {/* <Route path="/login" exact component={Login}></Route>
 <Route path="/signup" exact component={SignUp}></Route> */}
 <Route path="/SignUp" component={SignUp}></Route>
 <Route path="/login" exact component={Login}></Route>
     </Switch>
   </div>
   <FooterComponent/>
  
  </Router>
  
    
  );
}

export default App;
