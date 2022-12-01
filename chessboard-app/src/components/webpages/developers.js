import React, { useState } from "react";
import "./../../index.css";
import JacobKresak from './../images/JacobKresak.jpg';
import profilepic from './../images/profilepic.jpg'
import headshot from './../images/headshot.png';
import unknown from './../images/unknown.png';
import { Link } from "react-router-dom";




export default function Developers(){
  return (
  <>
  <h1 className='header'>Meet The Development Team</h1>
  <div className = 'developers'>
  
 <div>
 <img src={profilepic}></img>
 <p>KOLTON KOESTER<br />
 https://github.com/KKoester10<br/>
 https://www.linkedin.com/in/kkoester10/<br/>
 </p>
  </div>
  <div>
  <img src={headshot}></img>
  <p>SKIP TOWNSEND<br />
  https://github.com/skiptownsend<br/>
  https://www.linkedin.com/in/skiptownsend/<br/>
 </p>
  </div>
  <div>
  <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFUpksLgaQjWw/profile-displayphoto-shrink_800_800/0/1662396897053?e=1674691200&v=beta&t=tticW78PzVgeXVfM7s8C9s4vIJA1OTGfaSeXUIxYZG0' alt=""></img>
  <p>KEVIN DAGES<br />
  https://github.com/Kevin-Dages<br/>
  https://www.linkedin.com/in/kevin-dages/<br/>
 </p>
  </div>
  <div>
  <img src={JacobKresak}></img>
  <p>JACOB KRESAK<br />
  https://github.com/jkresak101<br/>
  https://www.linkedin.com/in/jacob-kresak/<br/>
 </p>
  </div>
  <div>
  <img src={unknown}></img>
  <p>ABUUKAR ABUKKAR <br />
  https://github.com/abuukar90<br/>
  https://www.linkedin.com/in/abuukar-abuukar-44a489174/<br/>
 
 </p>
  </div>
 
 
 
 
 
 
 
 
 
 
 </div>


    

  {
    /* <h2>Kolton Koester</h2>
    <h2>Skip Townsend</h2>
    <h2>Kevin Dages</h2>
    <h2>Jacob Kresak</h2>
    <h2>Abuukar Abukkar</h2> */
  }
</>)}
