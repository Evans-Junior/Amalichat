import React, { useState, useEffect } from "react";
import styled from "styled-components";


export default function Welcome() {
  const [userName, setUserName] = useState("Evans");
 
  useEffect( () => {
    const user=  JSON.parse(localStorage.getItem('username'))
    console.log('I am the user:', user)
    const hello=()=>{
      setUserName(  user)
    }
    hello()
  }, []);


  return (
    <Container>
      <div className="conta">
      <img src='/images/robot.gif' alt="" />
      <h3>
        Welcome, <span>{userName.email}!</span>
      </h3>
      <h4>Please select a chat to Start messaging.</h4>
      </div>
     
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
margin:10px;
  background-size: auto, auto;
  position: center;
  max-width: 600px;
  max-height:400px;

  margin: auto 0px auto 0px;
  color: #000000; 
  border-radius:20px;
  margin:auto 0px auto 0px;
  opacity:0.7;
  flex:1;
  flex-direction: column;
  img {
    height: 20rem;
    position:relative;
    top:-30px;
  }
  span {
    margin-top:10px;
    font-size:20px;
    font-family:Montserrat;
    color: #5ccdad;
  }
  h3{
    position:relative;
    right:-60px;
    top:-100px;
 
    width:200px;
    display: flex;  
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;

  }
  h4{
    position:relative;
    right:-15px;
    top:-70px;
  }
  .conta{
        border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
  }
`;
