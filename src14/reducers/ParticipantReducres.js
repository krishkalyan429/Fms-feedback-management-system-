// import {ADD_PARTICIPANT,UPDATE_SELECTED_PARTICIPANT,GET_ALL_PARTICIPANTS,GET_SELECTED_PARTICIPANT ,REMOVE_SELECTED_PARTICIPANT,DISPLAY_MESSAGE,REDIRECT_TO_SHOW,REDIRECT_TO_UPDATE} from '../actionTypes/ParticipantActionTypes';
// const defaultState = {
//     participantlist : null,
//     participantist : [],
//     processing : false,
//     redirectToUpdate : false,
//     redirectToShow : false,
//     redirectionId : 0,
//     message:""
// }


//  const participantReducer=(state = defaultState,action) => {
//     // let newState = {...state};
//     console.log(action);
//     switch(action.type){
//         case "GET_PARTICIPANT" :
//             state.participant = action.payload;
//             state.message = action.message;
//             break;
//         case UPDATE_SELECTED_PARTICIPANT :
//            state.participant = action.payload;
//            state.message = action.message;
//             break;
//         case REMOVE_SELECTED_PARTICIPANT :
//            state.participant = action.payload;
//            state.message = action.message;
//             break;
//         case ADD_PARTICIPANT :
//            state.participant = action.payload;
//            state.message = action.message;
//             break;
//         case DISPLAY_MESSAGE:
//            state.message = action.message;
//             break;
//         case REDIRECT_TO_UPDATE: 
//            state.redirectToUpdate = action.value;
//            state.product = null;
//            state.redirectionId = action.redirectionId;
//             break;
//         case REDIRECT_TO_SHOW:
//            state.redirectToShow = action.value;
//            state.product = null;
//            state.redirectionId = action.redirectionId;
//             break;
//         case GET_ALL_PARTICIPANTS:
//            state.participantlist = action.participantlist;
//            state.message = action.message;
//             break;
        
//         default :
//            state = state;
//     }
//     return state;
// }
// export default participantReducer;