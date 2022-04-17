import React from "react";
import logo from '../abby.png';
import './Header.css';

class Header extends React.Component{
  render(){
    return (
      <div className="card">
        <div className="mainlogo">
          <h1>Life Style</h1>
          <img src={logo} height="30" width="45" alt="logo"/>
        </div>  
        <div id="egg">
          8 lucky eggs
        </div>
        <div id="tool">
            <h6>visual background tool</h6>	
            <h5>1. Click style.</h5>
            <h5>2. Copy to CSS.</h5>
        </div>
      </div>
      )
  }
}

export default Header

