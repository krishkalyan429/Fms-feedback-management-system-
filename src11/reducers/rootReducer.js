import courseReducer from './CourseReducers/CourseReducer';

import { combineReducers } from "redux";


const rootReducer = combineReducers({

 courseReducer : courseReducer,
 
});

export default rootReducer;