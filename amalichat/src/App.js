import './App.css';
import React, {Suspense, lazy,useEffect,useState} from 'react'
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import Chat from './component/Chat/Chat';
// import socket from './socket';
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:3001");

// const socket = io.connect(process.env.MAIN_URL);

const Login =lazy(()=> import ('./component/Login/Login'))
function App() {
  const [work,setWork]=useState([])
  const [error, setError] = useState("");

// useEffect(()=>{
// const sessionId=localStorage.getItem('sessionId')
// console.log('here is the sessionId:',sessionId)
// // socket.auth = { sessionId };
// },[])
const control=(username)=>{
  setWork(username)

//  socket.auth = { work };

    // socket.on("connect_error", (err) => {
    //   if (err.toString().includes("valid email")) {
    //     return setError("Please provide a valid Email");
    //   }
    // });
  }

  console.log('Is working',work)
  // useEffect(()=>{
  //   const sessionId=localStorage.getItem('sessionId')
  //   console.log('here is the sessionId:',sessionId)
  //   socket.auth={sessionId}
  //   socket.connect();
  //   console.log('User is connected with session')
  // },[])
// useEffect(()=>{
//   window.onbeforeunload=()=>{
//     const sessionId=localStorage.getItem('username')
//     console.log('here is the sessionId:',sessionId)
//     socket.auth={sessionId:sessionId.email}
//     socket.connect();
//   }
// },[socket])


  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
      <Route exact path='/' element={<Login control={control}/>}/>
      <Route  path='/chat' element={<Chat userName={work}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
