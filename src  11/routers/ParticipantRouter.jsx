import { Container } from "@material-ui/core";
import Nav from "../components/Nav";
import { Route, Switch, Redirect } from "react-router-dom";
import AddParticipant from "../components/participantcomponent/AddParticipant"
import UpdateParticipant from "../components/participantcomponent/UpdateParticipant";
import ParticipantList from "../components/participantcomponent/ParticipantList";
import PageNotFound from "../components/PageNotFound"

function participantRouter() {
  return ( 
    <div >
      <Container>
        <Nav />
        <Switch>        
          <Route exact path="/updateparticipant/:id" component={UpdateParticipant} />
          <Route exact path="/addparticipant" component={AddParticipant} />
          <Route exact path="/participantlist" component={ParticipantList} />
          <Redirect exact from="/" to="/home" />
          {/* <Route exact component={PageNotFound} /> */}
        </Switch>
      </Container>
    </div>
  );
}

export default participantRouter;