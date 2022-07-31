// import React,{useEffect,useState,useRef} from 'react'
// import './chats.css'
// import  {MdPhone,FaUserAlt,FaSistrix,FaEllipsisH,FaPlus}  from "react-icons/fa";
// import  {FiPhone,FiVideo,FiMic,FiSmile,FiPaperclip}  from "react-icons/fi";
// import {AiTwotoneCheckCircle} from 'react-icons/ai'
// import Picker from "emoji-picker-react";
// // import socket from '../../../../socket';
// import uniqid from 'uniqid';
// import Options from '../options/Options';
// import Searchinput from '../options/Searchinput';
// import Welcome from './components/Welcome';
// import { BiBellMinus } from "react-icons/bi";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import ScrollToBottom from "react-scroll-to-bottom";

// export default function Chats({socket,clickedMessage}) {
// const [room, setRoom] = useState("");
// const [active,setAcive]=useState(true)
// const [message,setMessage]=useState([])
//  const [messageReceived,setMessageReceived]=useState([''])
// const scrollRef = useRef();
// const [time,setTime]=useState('')
// const [fromName,setFromName]=useState(false)
// const [fromTime,setFromTime]=useState([])
// const [fromMessage,setFromMessage]=useState([])
// const [fromData,setFromData]=useState([])
// const [nameCard,setNameCard] = useState("close");
// const [to,setTo] = useState(true);
// const [nextStage,setNextStage]=useState('')
// const [dataList,setDataList]=useState([])
// const [array, setArray] = useState([])
// const [arrivalMessage, setArrivalMessage] = useState(null);

// // const [users,setUsers] = useState('')
// const chatId=null
// const receiver=null

// const [showEmojiPicker, setShowEmojiPicker] = useState(false);
// const handleEmojiPickerhideShow = (event) => {
//   event.preventDefault()
// setShowEmojiPicker(!showEmojiPicker);
// };

//   const handleEmojiClick = (event, emojiObject) => {
//     event.preventDefault()
//     let message = message;
//     message += emojiObject.emoji;
//     setMessage(message).map(message=>{
//         return (
//             console.log(message)
//         )
//     })
// }
    
// // console.log('chats received',datacollected.username)

// const toastOptions = {
//   position: "bottom-right",
//   autoClose: 8000,
//   pauseOnHover: true,
//   draggable: true,
//   theme: "dark",
// };

// // useEffect(()=>{
// //   const info=()=>{
// //      setFromName(datacollected.username)
// //      const clickSent=fromData.message
// //      console.log('someone sent a message',clickSent)
// //      setFromMessage(clickSent)
// //   }
// //   info()
// // },[datacollected])

// useEffect(()=>{
// scrollRef.current?.scrollIntoView({behaviour:"smooth"});
// },[message])


//   // setTo(datacollected.username)

//   console.log('SesionId:',localStorage.getItem('sessionId'))
// // socket.auth={
// //   sessionId:localStorage.getItem('sessionId'),
  
// // }
// // socket.on('users',(users)=>{
// //     setUsers(users)
// //     console.log(users)
// // })
//    const sendMessage = (e)=>{
//     if(message==''){
//       toast.error(
//         "Message cannot be empty.",
//         toastOptions
//       );
//       return false;
//     }else{
//         e.preventDefault()
//         // const date = new Date()
//         //     setTime(date.getHours()+":"+date.getMinutes())
//         // //console.log('crossCheck',socket.emit("privateChat",{receiver:datacollected,message,date,chatId}))
       
//         //   const messagenow = {message,date}
//         //   console.log(messagenow)
//         //   const messageData = {
//         //     room: datacollected.email,
//         //     author: JSON.parse(localStorage.getItem('username')),
//         //     message: message,
//         //     time:
//         //       new Date(Date.now()).getHours() +
//         //       ":" +
//         //       new Date(Date.now()).getMinutes(),
//         //   };
//           setMessageReceived([...messageReceived,message])
//           setMessage("");
//           // const storevalue=JSON.stringify(message)
//           // localStorage.message=storevalue
//         }
//     };



//    // socket.on('error',(err)=>console.log('Error from Chats:',err))
// // socket.on('privateMessage',(receivedMessage)=>{
// //   setFromData(receivedMessage)

// // console.log('I received',receivedMessage)
// // console.log('I received',receivedMessage.message)

// // // setDataList([receivedMessage.message])
// // // setNextStage(receivedMessage.message)
// // // setSeen(...seen,nextStage)
// // // console.log('seen messages',seen)
// // //setArray(previous => [...previous, receivedMessage.message])
// // })

// useEffect(() => {
//   fromData && setTo(fromData.to);
//   console.log('checkself:',fromData.to)
// }, [fromData]);

// useEffect(() => {
//   fromData && setArray((prev) => [...prev, fromData.message]);
// }, [fromData]);

// useEffect(() => {
//   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// }, [array]);

//     // useEffect(()=>
//     // {
//     //   const see=localStorage.getItem('clicked data')
//     //   console.log(see)
//     // })


//     const getDateTime = () =>{
//         const date = new Date()
//             setTime(date.getHours()+":"+date.getMinutes())
//     }

//     // useEffect(()=>{
//     //     socket.on('receive_message',(data)=>{
//     //         console.log(data.message)
//     //         alert(data.message);
//     //     })
//     // },[socket]);


//     const sendChat = (event) => {
//         event.preventDefault();
//       };

//       const handleClickName =(e)=>{
//         e.preventDefault();
//         if (e.target !== e.currentTarget) {
//           return;
//         }
//         switch(nameCard){
//           case "open":
//             setNameCard("close");
//               break ;
//           case "close":
//             setNameCard("open");
//               break;
//           default : 
//           setNameCard("close");
//               break;
//         }
//       }
      

//   return (
//     <div className='chathome'>
//         <div className='chatheader'>
//             <span className='spacenotification'><BiBellMinus size={20}/></span>
//             <span className='space'>AMALICHAT</span>
//         </div>

//          {/* <Welcome /> */}
        
//         <div className='chatbody'>
//           <ToastContainer className='error' />
//             <div className='chatbodymain'>
//             <div className='seenchat'>
//                 <div className='scroll'>

//                 <div className="chat__body">
                        
//                            <ScrollToBottom>
//                             {
//                             array.map((m,index)=>{
//                               return(
//                                 <p key={uniqid()} ref={scrollRef} className="chat__message chat__left">
//                                    <span className="chat__name">{fromName}</span>
//                                    {m}
//                                   <span className="chat__timestamp">{new Date().toUTCString()}</span>
                            
//                                 </p>
//                               )
//                             })
                            
                             
//                             }
                        
                        
//                         {
//                        messageReceived.map((i)=>{
//                         return(
//                           <p key={uniqid()} ref={scrollRef} className="chat__message chat__reciever">
//                                  <span className="chat__name">You</span>
//                                  {i}
//                                  <span className="chat__timestamp">{time}
//                                  </span>
//                              </p>
//                         )})
//                     }
//                     </ScrollToBottom>
//                     </div>
                    
//                 </div>
                
//                 <div className="chat__footer">
                  
//                             <form onSubmit={sendMessage}>
//                             <FiPaperclip className='mesagechat' size={20}/>
//                            <FiSmile size={20} className='mesagechatsmile' onClick={handleEmojiPickerhideShow}/>
//                            {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
//                                 <input  placeholder="Type of message" className='' value={message} onChange={(e)=>{
//                                     setMessage(e.target.value);
//                                 }}
                                
//                                 type="text" />
//                                 <button type="summit">Send message</button>
//                                 <FiMic size={20} className='mesagechatmicriphone'/>
//                             <p className='sendbutton' onClick={sendMessage} >Send</p>
                            
//                             </form>
                            
//                         </div>

//             </div>
//             <div className='chatoptions '>
           

//               <div className='newbackbround'>
//               <FaUserAlt size={30} className='personicontow'/>
//             <div className="chat__headerInfo">
//                    <h3>{fromName}</h3>
//                    {active?
//                    <AiTwotoneCheckCircle size={10} className='active'/>:
//                    <p>Last seen at ...</p>
//                   }
//             </div>
//             <FiPhone size={30} className='callicon'/>
//             <FiVideo size={30} className='callicon'/>
//             <Searchinput/>
//             <Options/>
//               </div>
//             </div>

//             </div>
            
//         </div>
        
         
//     </div>
//   )
// }
