import React,{useState,useEffect,useRef} from 'react'
import './sidebar.css'
import  {FaSistrix}  from "react-icons/fa";
import Sidebarchat from './Sidebarchat/Sidebarchat';
import Groupchat from './Sidebarchat/Groupchat';
import Creategroup from '../options/Creategroup/Creategroup';
import { BiBot,BiDotsHorizontalRounded } from "react-icons/bi";
import PropTypes from 'prop-types';
export default function Sidebar({socket,userName,getMessages,clearData}) {

const [users,setUsers]=useState([])
const [currentSelected, setCurrentSelected] = useState([]);
const [authUsers,setAuthUsers]=useState('')
const scrollRef = useRef();
const [userinfo,setUserInfo]=useState('')
const [currentMessages,setCurrentMessages]=useState('')
const userSessionId=localStorage.getItem('sessionId')
const [newUser,setNewUser]=useState('')
const [newMessage,setNewMessage]=useState('')

// setUserSessionId(localStorage.getItem('sessionId'))
console.log('userSessionId',userSessionId)
socket.on('session',(session)=>{
  // console.log('session:',session)
// socket.auth={sessionId:session.sessionId}
  localStorage.setItem('sessionId',session.sessionId)
})
useEffect(()=>{
// console.log('This is Socket',socket)
socket.on('users',(users)=>{
  console.log('This are users:',users)
    setUsers(users)
})
},[]) 

useEffect(()=>{
  scrollRef.current?.scrollIntoView({behaviour:"smooth"});
  },[newMessage])

socket.on('user connected', (user) => {
  
  const newUsers = [...users];
  newUsers.push(user);
  setNewUser(newUsers)
  setUsers([])
})
useEffect(()=>{
if (userName){
 
    // console.log('This is Socket',socket)
    socket.on('users',(users)=>{
      console.log('This are users:',users)
        setUsers(users)
    })   
}
if(userName && newUser){
  setUsers(newUser)
}
if (window.onload){
  
}
},[users,newUser,userName])  
//  if (userName && newUser){
//   useEffect(()=>{
//     // console.log('This is Socket',socket)
//     socket.on('users',(users)=>{
//       console.log('This are users:',users)
//         setUsers(users)
//     })
//     },[]) 
    
// }

// useEffect(()=>{
//  users===[] && newUser?  setUsers(newUser):setUsers(users)

//   console.log('Current Users',newUser)
// },[newUser,users])

console.log('Full house',users)
// useEffect( () => {
//   const user=  JSON.parse(localStorage.getItem('username'))
  // console.log('I am the user:', user)
//   const hello=()=>{
//     setUserName(  user)
//   }
//   hello()
// }, []);
const getId = async (index,receiver)=>{
  setCurrentSelected(await receiver);
  getMessages(receiver)
  
   console.log('Clicked data',receiver)
    socket.emit('selected-user',{
      sender: userinfo,
      receiver
    })
await clearData
 }

 socket.on('privateMessage',(receivedMessage)=>{
  setNewMessage(receivedMessage.from.userId)
  
    // setMessageReceived((preMessages)=>[...preMessages,receivedMessage.message])
  // console.log('I message data',messageData)
  console.log('I received',receivedMessage)
  
  })

  return (
    <div className='sidebarhome'>
        <div className='sidebarhead'>
            <BiBot size={30} className='personicon'/>
            <span className='currentUser'>{userName.email}</span>
            <Creategroup/>
            <BiDotsHorizontalRounded size={20} className='personicon'/> 
        </div>
        <div className='table'>
        <div className='sidebarbody' >
        {
        // userName!==users.slice(0,users.length).username &&
        users
        // .filter(
        //   contacts=>
        //    contacts.Slice(0,contacts.length).email!==userName
        // )
        .map((contacts,index)=>{
          
          return (
  
            <div key={index} onClick={()=>getId(index,contacts)}>
            <Sidebarchat  username={contacts.username} active={contacts.connected} currentSelected={currentSelected} newMessage={newMessage} socket={socket} myName={userName}/>
          </div>
          )})
          }
               

            {/* <Groupchat message={message} room={room}/> */}
            
            {/* <button className='searchbutton'><FaSistrix size={40}/></button> */}

        </div>
        </div>
        
        <div className='sidebarsearch'>
            <div className='searchcontainer'>
            <input className="header__searchInput" placeholder='Search or start a new chat' type="text"/>
            <FaSistrix className='searchhere' size={20}/>
            </div>
            
        </div>
    </div>
    )

}
