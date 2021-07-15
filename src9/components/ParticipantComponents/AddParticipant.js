import React from "react";
import { connect } from "react-redux";
import {  _displayMessage, _redirectToShow } from '../../actions/ParticipantAction';
import AddParticipantComponent from './AddParticipantComponent';
import ParticipantService  from "../../services/ParticipantService";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

const participantService = new ParticipantService();

class AddParticipant extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/participant/${this.props.redirectionId}`)
        return <div className = "ui container">
            <Header title="ADD PARTICIPANT" />
            <br/>
            <AddParticipantComponent message = {this.props.message} participant = {this.props.participant} onSubmit = {this.props.onSubmit}/>
            <br/><br/>
            <Footer></Footer>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        participant : state.participant.participant,
        message : state.participant.message,
        redirectToShow : state.participant.redirectToShow,
        redirectionId : state.participant.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (participant) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
               alert("Participant Added successfully.");
                dispatch(_redirectToShow(true,response.data.participantId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            participantService.addParticipant(participant,responseCallBack,catchCallBack );
        }
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddParticipant);