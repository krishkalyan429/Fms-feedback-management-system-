import counterReducer from "./counterReducer";
import productsReducer from "./productReducer";
import loginReducer from './loginReducer';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  counter: counterReducer,
  fakestore: productsReducer,
  account: loginReducer,
});

export default rootReducer;
