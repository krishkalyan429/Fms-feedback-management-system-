import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ParticipantRouter from "./routers/ParticipantRouter";
import FacultyRouter from "./routers/FacultyRouter";

function App() {
  return ( 
    <div className="App">
    <ParticipantRouter/>
    <FacultyRouter/>
    </div>
  );
}

export default App;