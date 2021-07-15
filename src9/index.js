import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import store from './store/store';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

// // Create store
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
// ? a => a
// : window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(template, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
