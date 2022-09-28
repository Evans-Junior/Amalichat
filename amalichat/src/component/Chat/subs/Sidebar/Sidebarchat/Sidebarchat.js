import React,{useState,useEffect} from 'react'
import './sidebarchat.css'
import {FaUserAlt} from "react-icons/fa"
import socket from '../../../../../socket'
import { BiBot,BiUserCircle } from "react-icons/bi";

export default function Sidebarchat({username,id,socket,newMessage,myName,currentSelected}) {

  const [message,setMessage] = useState('')
  const [to,setTo]=useState('')
  const[time,setTime]=useState('')
socket.on('privateMessage', (receive_message)=>{
setMessage(receive_message.message)
const to=receive_message.to.email
const time=receive_message.from.time
setTo(to)
setTime(time)
const msgs=[...message]
msgs.push({person:to,message:receive_message.message})
setMessage(msgs)
console.log(receive_message.to.email)
})


  return (
    <div key={id} className='sidebarchathome' >
        <div className='sidebar_info'>
        <div className='first'>
        <BiUserCircle size={50} className='personicon'/>
        <div className='inside'>
        <h2  className='name'>{username}</h2>
        <div>{
        // username===to?
        // <p className='second_message'>{message}</p>:<p className='first_message'>Send a message</p>
        message.map((message)=>{
          if (message.person===username){
            return <p className='second_message'>{message.message}</p>;
          }
          else if(message.person!==username){
            return <p className='first_message'>Send a message</p>
          }
        })
        }
        </div>
        </div>
        </div>
        <div className='time'>
        {username===to && time}
        </div>
        </div>
    </div>
  )
}
