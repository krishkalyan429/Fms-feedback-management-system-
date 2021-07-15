const initialLoginState = {
        userId: "",
        role:"",
        loggedIn: false,
}

const loginReducer=(state=initialLoginState, action)=>{
    switch(action.type) {
        case "LOGIN": return {...state, ...action.payload }
        case "LOGOUT": return {...state, ...action.payload}
        default: return state;
    }

}

export default loginReducer;