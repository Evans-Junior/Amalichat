import React,{useState} from 'react'
import './sidebarchat.css'
import {FaUserFriends} from "react-icons/fa"



export default function Groupchat() {

  return (
    <div className='sidebarchathome' >
        <div className='sidebar_info'>
        <div className='first'>
        <FaUserFriends size={30} className='personicon'/>
        <div className='inside'>
        <h2 className='name'>AmaChat Group</h2>
        <p>This is the last message JJ JJ JJ JJ JJ J JJ JJ JJ jj jj jj </p>
        </div>
        </div>
        <div className='time'>
        {new Date().toUTCString()}
        </div>
        
        
        </div>
    </div>
  )
}
