import { useState } from 'react';
import React from "react";
import './Button.css';

function Button() {
    const [text, setText]=useState('copy'); 
    function handleClick(){
      setText('copied');
      setTimeout(()=>{
        setText('copy');
      },1000);
      const styles=document.getElementById('picture').style.background;
      navigator.clipboard.writeText(styles);
    }
    return(
    <div id='picture'>
      <button id='copyButton' onClick={handleClick}>{text}</button>
    </div>
    )
}

export default Button;
