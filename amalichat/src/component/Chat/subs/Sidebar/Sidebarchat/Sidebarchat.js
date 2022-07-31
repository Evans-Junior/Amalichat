import React,{useState,useEffect} from 'react'
import './sidebarchat.css'
import {FaUserAlt} from "react-icons/fa"
import socket from '../../../../../socket'
import { BiBot,BiUserCircle } from "react-icons/bi";

export default function Sidebarchat({username,id,active,newMessage,myName,currentSelected}) {

  const [message,setMessage] = useState('')
  const [messageId,setMessageId]=useState('')
  useEffect(()=>{
    console.log('new messageid:',newMessage)
    },[newMessage])
console.log('Selected person:',currentSelected)

  return (
    <div key={id} className='sidebarchathome' >
        <div className='sidebar_info'>
        <div className='first'>
        <BiUserCircle size={50} className='personicon'/>
        <div className='inside'>
        <h2  className='name'>{username}</h2>
        <div>{currentSelected.userId===newMessage ?

        <p className='second_message'>{newMessage.message}</p>:<p className='first_message'>Send a message</p>
        }
        </div>
        </div>
        </div>
        <div className='time'>
        {new Date().toUTCString()}
        </div>
        </div>
    </div>
  )
}
