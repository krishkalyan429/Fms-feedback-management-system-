import participantReducer from "./participantReducer";

import { combineReducers } from "redux";


const rootReducer = combineReducers({

  participant : participantReducer,
 
});

export default rootReducer;