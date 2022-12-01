import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import "./index.css";
import Developers from "./components/webpages/developers";
import AboutChess from "./components/webpages/learn";
import ChessGame from "./components/webpages/chesspage";
import io from "socket.io-client";
import Home from "./components/chatpages/home";
import Chat from "./components/chatpages/chat";
import { useState } from "react";

const socket = io.connect("http://localhost:4000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/chessgame" element={<ChessGame />} />
        <Route exact path="/thedevelopers" element={<Developers />} />
        <Route exact path="/aboutchess" element={<AboutChess />} />
      </Routes>
      <>
        <div className="chatapplication">
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                  username={username}
                  setUsername={setUsername}
                  room={room}
                  setRoom={setRoom}
                  socket={socket}
                />
              }
            />

            <Route
              path="/chat"
              element={<Chat username={username} room={room} socket={socket} />}
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}
export default App;
