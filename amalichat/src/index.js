import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import {store}  from './redux/store'
 import {Provider} from 'react-redux'
// import {legacy_createStore as createStore} from 'redux';
// //  Store

//Action
// const increement =()=>{
//   return{
//     type:'Increment'
//   }
// }
// const decrement =()=>{
//   return{
//     type:'Decrement'
//   }
// }
// //Reducer
// const counter = (state=0, action)=>{
//   switch(action.type){
//     case 'Increment':
//       return state+1;
//     case 'Decrement':
//         return state-1;
//   }
// }

// let store = createStore(counter);

// store.subscribe(()=> console.log(store.getState()));



// //Dispatch
// store.dispatch(increement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
