import React from 'react'

export default function PlayerChange(props) {
  return (
    <div className='game-btns'>
        <button className='btnscomp' onClick={()=>{
            props.choice(PvP => props.pvc);
        }}>Player Vs. Computer</button>
        <button className='btnsperson' onClick={()=>{
            props.choice(PvP => props.pvc);
        }}>Player Vs. Player</button>
      </div>
  )
}
