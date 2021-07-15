import React from "react";

export default class AddParticipantComponent extends React.Component{
    participantIdRef = React.createRef();
    participantNameRef = React.createRef();
    addressRef= React.createRef();
    mobileRef = React.createRef();
    emailRef=React.createRef();
    
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
                PARTICIPANT ID: <input type="number" step="1" ref={this.participantIdRef}/><br/>
                </label><br/>
            </div>

            <div className = "field">
                <label>
               PARTICIPANT NAME: <input type="text" min="3" max="15" ref={this.participantNameRef}/>
               </label><br/>
            </div>
                
            <div className = "field">
                    <label>
                Address: <input type="text" ref={this.addressRef}/>
                </label><br/>
            </div>

            <div className = "field">
                    <label>
                Mobile: <input type="number" min="10" max="10" ref={this.mpbileRef}/>
                </label><br/>
            </div>

            <div className = "field">
                <label>
                    EMAIL:
                    <input type="text" ref={this.emailRef}/>
             </label><br />
            </div>
                <button type="submit" className="ui left floated button primary">Add Participant</button>
                <br/>
            </div>
        </form>
        </div>);
        return component;
    }  

    onSubmit = (event) => {
        event.preventDefault();
        const listParticipants = Array.from(this.props);
        const participant = {
            participantName : this.participantRef.current.value,
            address : this.addressRef.current.value,
            mobile : this.mobileRef.current.value,
            email : this.emailRef.current.value,
            listParticipants : listParticipants
        }
        this.props.onSubmit(participant);
    }
    
    handleChange = (event) => {
        this.setState({   
            file: URL.createObjectURL(event.target.files[0])
        })
    }
   
}