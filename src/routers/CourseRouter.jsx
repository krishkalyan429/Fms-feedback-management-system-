import course from "../components/coursecomponent/CourseList";
import { Route, Switch } from "react-router-dom";
import AddCourse from "../components/coursecomponent/AddCourse";
import UpdateCourse from "../components/coursecomponent/UpdateCourse";
import Nav from "../components/Nav";

function CourseRouter(){ 
     return(
        <div>
     
        <Nav />
          <Switch>
            <Route path="/course" component={course}  exact/>
            <Route path="/addcourse" component={AddCourse}  exact />
            <Route  path="/updatecourse/:id" component={UpdateCourse} exact/>
          </Switch>
        </div>
     );
}

export default CourseRouter;