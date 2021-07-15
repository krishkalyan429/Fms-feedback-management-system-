import {ADD_PARTICIPANT,UPDATE_SELECTED_PARTICIPANT,GET_ALL_PARTICIPANTS,GET_SELECTED_PARTICIPANT ,REMOVE_SELECTED_PARTICIPANT,DISPLAY_MESSAGE,REDIRECT_TO_SHOW,REDIRECT_TO_UPDATE} from '../actionTypes/participantActionTypes';
const defaultState = {
    participantlist : null,
    participantist : [],
    processing : false,
    redirectToUpdate : false,
    redirectToShow : false,
    redirectionId : 0,
    message:""
}


export default (state = defaultState,action) => {
    let newState = {...state};
    switch (action.type){
        case GET_SELECTED_PARTICIPANT :
            newState.participant = action.participant;
            newState.message = action.message;
            break;
        case UPDATE_SELECTED_PARTICIPANT :
            newState.participant = action.participant;
            newState.message = action.message;
            break;
        case REMOVE_SELECTED_PARTICIPANT :
            newState.participant = action.participant;
            newState.message = action.message;
            break;
        case ADD_PARTICIPANT :
            newState.participant = action.participant;
            newState.message = action.message;
            break;
        case DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.product = null;
            newState.redirectionId = action.redirectionId;
            break;
        case REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.product = null;
            newState.redirectionId = action.redirectionId;
            break;
        case GET_ALL_PARTICIPANTS:
            newState.participantlist = action.participantlist;
            newState.message = action.message;
            break;
        
        default :
            newState = state;
    }
    return newState;
}