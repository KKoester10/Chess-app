import React from 'react'
import { Chessboard } from 'react-chessboard'
import './../../index.css'
import ChessApp from './chessgame'
import { Link } from 'react-router-dom'
import io from 'socket.io-client';
import Home from '../chatpages/home'
import { useState } from 'react';
import Chat from '../chatpages/chat'
const socket = io.connect('http://localhost:4000');


export default function ChessGame(){
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [roomJoined, setRoomJoined] = useState(false);  

  const handleJoinRoom = (joined) => {
    setRoomJoined(joined)
  }

    return <>
    
    <div className='game-btns'>
        <button className='btnscomp'>Play A Computer</button>
        <button className='btnsperson'>Play A Person</button>
        {/* <Btn background={"orange"} text={"Play A Computer"}/>
        <Btn background={"blue"} text={"Play A Person"} /> */}
        
      </div>
     
      <div className='chessboard'>
        <div className='chessitsself'>
    <ChessApp />  </div> {roomJoined ? <Chat username={username} room={room} socket={socket}/> : <Home username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
                roomJoined={setRoomJoined}
                />}
    </div>
        <div class='history-box'>
          
        </div>

    </>
}
