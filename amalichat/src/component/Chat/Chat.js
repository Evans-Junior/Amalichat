import React,{useEffect,useState,useRef} from 'react'
import './chat.css'
import Chats from './subs/Chats/Chats'
import Sidebar from './subs/Sidebar/Sidebar'
import io from "socket.io-client"


const socket=io("https://amalichat.herokuapp.com/",  { 
  withCredentials: false,
autoConnect:false,
   transports: ['websocket'],
  extraHeaders: {
    
   },
 }
)



 function Chat({userName}) {
  console.log('Refreshing',localStorage.getItem('sessionId'))
  console.log('This is the user from Login',userName)
  const sessionId=localStorage.getItem('sessionId')
  const [currentSelected,setCurrentSelected]=useState('')
  const [findMessage,setFindMessage]=useState('')
  // const socket=useRef()
  const [currentUser, setCurrentUser] = useState(userName);
const [clearData,setClearData]=useState('')
 

//  socket.auth={username:user}

 const handleChatChange=(chat)=>{
  setCurrentSelected(chat)
 }

 const message =(messages)=>{
  setFindMessage(messages)
}

// console.log('username username',username)
const auth =()=>{
  const username=userName.email
  // setSessionId(localStorage.getItem('sessionId'))
  if (username){
  socket.auth={username}
  // console.log('currentUser found')
  // socket.auth.username=currentUser
  }
  if(sessionId){
    socket.auth={sessionId}
    console.log('Session needed')
  }
  console.log('MysessionId',sessionId)
  return socket.connect()

}

useEffect(()=>{
  auth()
  console.log("Hello")
},[window.onload])





// useEffect(() => {
//   setSessionId(localStorage.getItem('sessionId'))
//   if(sessionId){
//     io.auth={sessionId}
//      socket=io("https://amalichat.herokuapp.com/")
//   }
//   else {//username
//     io.auth={currentUser}
//     socket = io("https://amalichat.herokuapp.com/");
//     // socket.current.emit("add-user", currentUser._id);
//   }
  
 
// }, [currentUser]);

// const accessChild = ()=>{
// refs.child.clearChat()
// }


  return (
    <div className='chathome'>
        <div className='chatcontainer'>

          <Sidebar socket={socket} getMessages={message} userName={currentUser} clearData={clearData}/>
          <Chats clickedMessage={findMessage} socket={socket} userName={currentUser} setClearData={setClearData}/>
 
        </div>
    </div>
  )
}

export default Chat