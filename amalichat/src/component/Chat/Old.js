// import React,{useEffect,useState,useRef} from 'react'
// import './chat.css'
// import Chats from './subs/Chats/Chats'
// import Sidebar from './subs/Sidebar/Sidebar'
// import {io} from "socket.io-client"
// import { useNavigate } from 'react-router-dom'


// export default function Chat() {
//   const navigate= useNavigate()
//   const [currentSelected,setCurrentSelected]=useState('')
//   const [sentMessage,setSentMessage]=useState('')
//   const socket=useRef()
//   const [currentUser, setCurrentUser] = useState(undefined);
// const [sessionId,setSessionId]=useState(null)
//   // const [checkAuth,setCheckAuth]=useState('')

// // console.log('datacollected',currentSelected)
// // const [nowDataGotten,setNowDataGotten]=useState('')
//  const handleChatChange=(chat)=>{
//   setCurrentSelected(chat)
//  }

//  const message =(messages)=>{
//   setSentMessage(messages)
// }

// useEffect(async () => {
//   if (!localStorage.getItem('username')) {
//     navigate("/");
//   } else {
//     setCurrentUser(
//       await JSON.parse(
//         localStorage.getItem('username')
//       )
//     );
//   }
// }, []);

// // console.log('check socket:',socket)

// // setCurrentUser(localStorage.getItem('username'))
// useEffect(() => {
//   // setSessionId(localStorage.getItem('sessionId'))
//  // socket=io("https://amalichat.herokuapp.com/")

//   if(currentUser){
//     socket=io("https://amalichat.herokuapp.com/")
//      io.auth={currentUser}
//   }
//   console.log('final socket:',socket)
  
 
// }, [currentUser]);




//   return (
//     <div className='chathome'>
//         <div className='chatcontainer'>

//           <Sidebar chatChange={handleChatChange} getMessages={message} socket={socket}/>
//           <Chats datacollected={currentSelected} receivedMessage={sentMessage}/>
 
//         </div>
//     </div>
//   )
// }
