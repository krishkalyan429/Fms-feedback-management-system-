import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ParticipantRouter from "./routers/ParticipantRouter";
import FacultyRouter from "./routers/FacultyRouter";
import CourseRouter from "./routers/CourseRouter";
import ParticipantFeedbackRouter from "./routers/ParticipantFeedbackRouter";
import Footer from "./components/Footer";

function App() {
  return ( 
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
     <ParticipantRouter/>
     <FacultyRouter/>
     <CourseRouter/>
     <ParticipantFeedbackRouter/>
   
     </div>
   
     </div>
     <Footer/>
    </div>
  );
}

export default App;