// import React,{useEffect,useState,useRef} from 'react'
// import './chat.css'
// import Chats from './subs/Chats/Chats'
// import Sidebar from './subs/Sidebar/Sidebar'
// import io from "socket.io-client"


// const socket=io.connect("https://amalichat.herokuapp.com/")

// export default function Chat() {
//   const [currentSelected,setCurrentSelected]=useState('')
//   const [sentMessage,setSentMessage]=useState('')
//   // const socket=useRef()
//   const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));
// const [sessionId,setSessionId]=useState(null)
 



//  const handleChatChange=(chat)=>{
//   setCurrentSelected(chat)
//  }

//  const message =(messages)=>{
//   setSentMessage(messages)
// }


// console.log('Page Refresh')
// setSessionId(localStorage.getItem('sessionId'))
// if (sessionId){
// socket.auth={sessionId}
// console.log('sessionId found')
// socket.auth.username=currentUser
// }else{
//   socket.auth={currentUser}
//   console.log('User found')
// }



// // useEffect(() => {
// //   setSessionId(localStorage.getItem('sessionId'))
// //   if(sessionId){
// //     io.auth={sessionId}
// //      socket=io("https://amalichat.herokuapp.com/")
// //   }
// //   else {//username
// //     io.auth={currentUser}
// //     socket = io("https://amalichat.herokuapp.com/");
// //     // socket.current.emit("add-user", currentUser._id);
// //   }
  
 
// // }, [currentUser]);



//   return (
//     <div className='chathome'>
//         <div className='chatcontainer'>

//           <Sidebar chatChange={handleChatChange} getMessages={message} socket={socket} />
//           <Chats datacollected={currentSelected} receivedMessage={sentMessage} socket={socket}/>
 
//         </div>
//     </div>
//   )
// }
