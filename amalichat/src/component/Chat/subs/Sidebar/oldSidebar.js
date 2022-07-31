// import React,{useState,useEffect} from 'react'
// import './sidebar.css'
// import  {FaSistrix}  from "react-icons/fa";
// import Sidebarchat from './Sidebarchat/Sidebarchat';
// import Groupchat from './Sidebarchat/Groupchat';
// //import socket from '../../../../socket';
// import Creategroup from '../options/Creategroup/Creategroup';
// import { BiBot,BiDotsHorizontalRounded } from "react-icons/bi";

// export default function Sidebar({chatChange,getMessages,socket}) {
// console.log('We connect scoket',socket)
// const [users,setUsers]=useState([''])
// const [currentSelected, setCurrentSelected] = useState([]);
// const [authUsers,setAuthUsers]=useState('')
// const [userName,setUserName]=useState('')
// const [userinfo,setUserInfo]=useState('')
// const [currentMessages,setCurrentMessages]=useState('')
// useEffect( () => {
//   const user=  JSON.parse(localStorage.getItem('username'))
//   console.log('I am the user:', user)
//   const hello=()=>{
//     setUserName(  user)
//   }
//   hello()
// }, []);
// const getId = async (index,receiver)=>{

//    console.log('information',receiver)
//    console.log('position',index)
//   setCurrentSelected(await receiver);
//   chatChange(receiver)
  
//   console.log('lets go',receiver)
//   // dispatch(takeData(currentSelected))
//     // console.log('informationNow',currentSelected)

//     socket.emit('selected-user',{
//       sender: userinfo,
//       receiver
//     })
//     localStorage.setItem('clicked data',JSON.stringify(currentSelected))

// }

// console.log('mypeople',users[0].self)
// var newUsers = [];

// useEffect(()=>{
// //   let socket = openSocket(window.location.origin);
// //   if(socket.disconnected) { //on refresh this is true
// //     socket = openSocket(window.location.href);
// //     socket.open(); //this never seems to connect.
// // }
// console.log('ggg', socket.open())
// socket.on((data) => { //on refresh this is disconnected
// //do stuffc
// console.log('we are in',data)
// })
// },[])

// // if(localStorage.getItem('sessionId')){
// //      const sessionId=localStorage.getItem('sessionId')
// //   socket.auth={
// //     sessionId
// //   }
// //   // socket.connect()
// //   console.log('Connected')
// // }else{
// //   console.log('No session Id')
// // }

// socket.on('error',(error)=>
// console.log('error',error))




// socket.on('users',(users)=>{
//   setUsers(users)
//   console.log('Checkuers',users)
// })
// socket.on('session',(session)=>{
//   setUserInfo(session)
  
//   localStorage.setItem('sessionId',session.sessionId)
//   console.log('sessionlistener',session)
//   // socket.auth={
//   //   sessionId
//   // }
//   // console.log(session.sessionId)
// })

// socket.on('user connected',(connect)=>{
//   console.log('connectedUser',connect)
//   getMessages(connect)
//   setCurrentMessages(connect)
//   console.log( 'hEy', setCurrentMessages(connect)
//   )
// })

// // Get id and other info
// useEffect( ()=>{
// localStorage.setItem( 'clicked data',JSON.stringify(currentSelected))
// },[currentSelected])
// //  localStorage.setItem('clicked data',JSON.stringify(currentSelected))

// useEffect(()=>{
//   console.log('func socket_reconnect');
//   // socket.socket.reconnect();
//   const newdata=window.localStorage.getItem('list of users')
//   console.log('Jesus is King',newdata)
//   if (newdata!==null) setUsers(JSON.parse(newdata))
// },[socket])

// useEffect(()=>{
//   window.localStorage.setItem('list of users',JSON.stringify(users))
// },[users])

//   return (
//     <div className='sidebarhome'>
//         <div className='sidebarhead'>
//             <div className='sidebar_left'>
//             <BiBot size={30} className='personicon'/>
//             <span className='currentUser'>{userName.email}</span>
//             </div>
//             <div className='sidebar_right'>
//             {/* <FaPlus size={20} className='personicon' /> */}
//             <Creategroup/>
//             <BiDotsHorizontalRounded size={20} className='personicon'/>
           
               
            
//             </div>
//         </div>
//         <div className='table'>
//         <div className='sidebarbody' >
//         {
//         users.filter(contacts=>{
//           return contacts.self===true
//         }

//         )
//         .map((contacts,index)=>{
          
//           return (
  
//             <div key={index} onClick={()=>getId(index,contacts)}>
//             <Sidebarchat  username={contacts.username} active={contacts.connected} sentMessage={currentMessages}/>
//           </div>
//           )})}
               

//             {/* <Groupchat message={message} room={room}/> */}
            
//             {/* <button className='searchbutton'><FaSistrix size={40}/></button> */}

//         </div>
//         </div>
        
//         <div className='sidebarsearch'>
//             <div className='searchcontainer'>
//             <input className="header__searchInput" placeholder='Search or start a new chat' type="text"/>
//             <FaSistrix className='searchhere' size={20}/>
//             </div>
            
//         </div>
//     </div>
//     )

// }
