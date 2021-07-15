import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ParticipantRouter from "./routers/ParticipantRouter";
import FacultyRouter from "./routers/FacultyRouter";
import CourseRouter from "./routers/CourseRouter";
import ParticipantFeedbackRouter from "./routers/ParticipantFeedbackRouter";

function App() {
  return ( 
    <div className="App">
     <ParticipantRouter/>
     <FacultyRouter/>
     <CourseRouter/>
     <ParticipantFeedbackRouter/>
    </div>
  );
}

export default App;