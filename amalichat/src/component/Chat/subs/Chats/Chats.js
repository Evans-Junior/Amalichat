import {useEffect,useState,useRef} from 'react'
import './chats.css'
import  {MdPhone,FaUserAlt,FaSistrix,FaEllipsisH,FaPlus}  from "react-icons/fa";
import  {FiPhone,FiVideo,FiMic,FiSmile,FiPaperclip}  from "react-icons/fi";
import {AiTwotoneCheckCircle} from 'react-icons/ai'
import Picker from "emoji-picker-react";
import uniqid from 'uniqid';
import Options from '../options/Options';
import Searchinput from '../options/Searchinput';
import Welcome from './components/Welcome';
import { BiBellMinus } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import ScrollToBottom from "react-scroll-to-bottom";
// import { format } from "timeago.js";

 export default function Chats({socket,clickedMessage,userName,setClearData}) {
const [room, setRoom] = useState("");
const [active,setAcive]=useState(true)
const [message,setMessage]=useState([])
const [messageReceived,setMessageReceived]=useState([])
const scrollRef = useRef();
const [time,setTime]=useState('')
const [fromName,setFromName]=useState('')
const [sent,setSent]=useState([])
const [fromMessage,setFromMessage]=useState([])
const [fromData,setFromData]=useState([])
const [received,setReceived] = useState([]);
const [to,setTo] = useState(true)
const [clickedPerson,setClickedPerson]=useState()
const [dataList,setDataList]=useState([])
const [array, setArray] = useState([])
const [arrivalMessage, setArrivalMessage] = useState(null);
const [showEmojiPicker, setShowEmojiPicker] = useState(false);
const chatId=null
const handleEmojiPickerhideShow = (event) => {
  event.preventDefault()
setShowEmojiPicker(!showEmojiPicker);
};

  const handleEmojiClick = (event, emojiObject) => {
    event.preventDefault()
    let message = message;
    message += emojiObject.emoji;
    setMessage(message).map(message=>{
        return (
            console.log(message)
        )
    })
}
    

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

// useEffect(()=>{
//   const info=()=>{
//      setFromName(clickedMessage.username)
//      const clickSent=fromData.message
//      console.log('someone sent a message',clickSent)
//      setFromMessage(clickSent)
//   }
//   info()
// },[clickedMessage,fromData])

useEffect(()=>{
scrollRef.current?.scrollIntoView({behaviour:"smooth"});
},[message])





   const sendMessage = async (e)=>{
    if(message===''){
      toast.error(
        "Message cannot be empty.",
        toastOptions
      );
      return false;
    }else{

        e.preventDefault()

await socket.emit("privateChat",{receiver:clickedMessage,message,time,chatId})

          setMessageReceived(message)
          setMessage("");
        const msgs =[...messageReceived];
        msgs.push({fromSelf:true, message:message})
        setMessageReceived(msgs)
        return true;
        }
      
    };

    useEffect(()=>{

    },[sendMessage])

   socket.on('error',(err)=>console.log('Error from Chats:',err))
   useEffect(()=>{
socket.on('privateMessage',(receivedMessage)=>{
setFromData(receivedMessage.from.username)
setArrivalMessage({fromSelf: false, message: receivedMessage.message})
setFromMessage(receivedMessage.from.userId)
  // setMessageReceived((preMessages)=>[...preMessages,receivedMessage.message])
// console.log('I message data',messageData)
console.log('I received',receivedMessage)
console.log('I received userid',fromMessage)
})
})

console.log('Clicked person in Chat:',clickedMessage)



useEffect(() => {
  // const messages =[...messageReceived]
  // messages.push(fromData.message)
  arrivalMessage && setMessageReceived(pre=>[...pre,arrivalMessage]);
  localStorage.setItem('message',messageReceived.message)
}, [arrivalMessage]);

useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messageReceived]);

// let data = [
//   {
//     "userId": clickedMessage.userId,
//     "sent": message,
//     "Received": fromData.message,
//     "Time": new Date(Date.now()).getHours() +
//     ":" +
//     new Date(Date.now()).getMinutes()
//   },
//   {
//     "userId": "purple",
//     "sent": "minivan",
//     "Received": new Date('2017-01-03'),
//     "Time": new Date(Date.now()).getHours() +
//     ":" +
//     new Date(Date.now()).getMinutes()
//   }, 
// ]

// let person = {
//   "userId": clickedMessage.userId,
//     "sent": message,
//     "Received": fromData.message,
//     "Time": new Date(Date.now()).getHours() +
//     ":" +
//     new Date(Date.now()).getMinutes()
//  }
//  data.push(person);

    useEffect(()=>{
        socket.on('receive_message',(data)=>{
            console.log('Here is data',data.message)
            alert(data.message);
        })
    });


useEffect(()=>{
  setFromName(clickedMessage.username)
  const userClicked= JSON.stringify(fromName)
  localStorage.setItem('clickedUser',userClicked)
if(fromName!==localStorage.getItem('clickedUser')){
setMessageReceived([])
}

},[clickedMessage])
   console.log('Whose name:',fromData)
   socket.on('old_message',message=>console.log('old message',message))

  // const clearChat=()=>{
  //   messageReceived=[]
  // }
// useEffect(()=>{

//     setClearData(setMessageReceived([]))

//  },[setClearData])
console.log('messages:',messageReceived)

  return (
    <div className='chathome'>
         <div className='chatheader'>
             <span className='spacenotification'><BiBellMinus size={20}/></span>
             <span className='space'>AMALICHAT</span>
         </div>

         {clickedMessage===''? <Welcome />:
        
        <div className='chatbody'>
          <ToastContainer className='error' />
            <div className='chatbodymain'>
            <div className='seenchat'>
                <div className='scroll'>
                <div className="chat__body">
                          {/* {clickedMessage.userId===fromMessage?
                       messageReceived.map((i)=>{
                        return(
                          <p key={uniqid()} ref={scrollRef} className="chat__message chat__reciever">
                                 <span className="chat__name">You</span>
                                 {i}
                                 <span className="chat__timestamp">{time}
                                 </span>
                             </p>
                        )}):''
                    } */}
                       {messageReceived.map((message) => {
          return (
            <div ref={scrollRef} key={uniqid()}>
              <div
                className={`messagee ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content">
                  {message.message}
                  {/* <p>{messageReceived.map((message)=>{return (message.message)})}</p> */}
                </div>
              </div>
            </div>
          );
        })}  
                            

                    
                    </div>
                    
                </div>
                
                <div className="chat__footer">
                  
                            <form onSubmit={sendMessage}>
                            <FiPaperclip className='mesagechat' size={20}/>
                           <FiSmile size={20} className='mesagechatsmile' onClick={handleEmojiPickerhideShow}/>
                           {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                                <input  placeholder="Type of message" className='' value={message} onChange={(e)=>{
                                    setMessage(e.target.value);
                                }}
                                
                                type="text" />
                                <button type="summit">Send message</button>
                                <FiMic size={20} className='mesagechatmicriphone'/>
                            <p className='sendbutton' onClick={sendMessage} >Send</p>
                            
                            </form>
                            
                        </div>

            </div>
            <div className='chatoptions '>
           

              <div className='newbackbround'>
              <FaUserAlt size={30} className='personicontow'/>
            <div className="chat__headerInfo">
                   <h3>{fromName}</h3>
                   {active?
                   <AiTwotoneCheckCircle size={10} className='active'/>:
                   <p>Last seen at ...</p>
                  }
            </div>
            <FiPhone size={30} className='callicon'/>
            <FiVideo size={30} className='callicon'/>
            <Searchinput/>
            <Options/>
              </div>
            </div>

            </div>
            
        </div>
        }
         
    </div>
  )
 }
