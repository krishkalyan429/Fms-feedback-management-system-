import {ADD_COURSE,UPDATE_COURSE,GET_ALL_COURSES,GET_SELECTED_COURSE ,REMOVE_SELECTED_COURSE,DISPLAY_MESSAGE,REDIRECT_TO_SHOW,REDIRECT_TO_UPDATE} from '../../actionTypes/CourseActionTypes';
const defaultState = {
    course : null,
    courseList : [],
    
    processing : false,
    redirectToUpdate : false,
    redirectToGET : false,
    redirectionId : 0,
    message:""
}


export default (state = defaultState,action) => {
    let newState = {...state};
    switch (action.type){
        case GET_SELECTED_COURSE :
            newState.course = action.course;
            newState.message = action.message;
            break;
        case DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.course = null;
            newState.redirectionId = action.redirectionId;
            break;
        case REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.course = null;
            newState.redirectionId = action.redirectionId;
            break;
        case GET_ALL_COURSES:
            newState.courseList = action.courseList;
            newState.message = action.message;
            break;
        
        default :
            newState = state;
    }
    return newState;
}