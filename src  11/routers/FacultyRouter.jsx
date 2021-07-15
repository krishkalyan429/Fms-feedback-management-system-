import Nav from "../components/Nav";
// import PageNotFound from "../components/PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import FacultyList from "../components/facultycomponent/FacultyList";
import AddFaculty from "../components/facultycomponent/AddFaculty";
import UpdateFaculty from "../components/facultycomponent/UpdateFaculty";
import { Container } from "@material-ui/core";
 
function FacultyRouter(){
    return(
        <div>
          <Container>
      <Nav />
    <Switch>
  <Route exact path="/facultylist" component={FacultyList} />
  <Route exact path="/addfaculty" component={AddFaculty} />
  <Route exact path="/updatefaculty/:id" component={UpdateFaculty} />
  {/* <Route  component={PageNotFound} /> */}
</Switch>
</Container>
</div>
    );
}
 
export default FacultyRouter;