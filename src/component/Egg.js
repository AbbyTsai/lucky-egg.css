import React from "react";
import './Egg.css';

class Egg extends React.Component{
  constructor(props){
    super(props);
    this.handleChane=this.handleChane.bind(this);
  }
  handleChane(event){
    document.getElementById('picture').style.setProperty('background',event.target.value);
  };
  render(){
  return(
    <div id={this.props.id} className="backgroundinput" style={this.props.background}>
            <p>{this.props.name}</p>
    <input type='radio' className="inputradio" value={this.props.value} onClick={this.handleChane}/> 
    </div>
  )
}
}

export default Egg
