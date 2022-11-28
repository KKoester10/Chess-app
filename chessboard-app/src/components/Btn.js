import React from 'react'
import './btn.css';

export default function Btn(props) {

  return (
    <button style={{background: props.background}}>{props.text}</button>
  )
}
