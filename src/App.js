import './App.css';
import Header from "./component/Header"
import Egg from "./component/Egg"
import GRADIENTS from './gradients.js';
import Avatar from './component/Avatar';
import Button from './component/Button';
import Footer from './component/Footer';

function App() {
  return (
    <div>
    <Header  />
    <div className="inputarea">
    <Egg id="option1" name="1" background={{background:GRADIENTS[0].background}} value={GRADIENTS[0].background}/>
    <Egg id="option2" name="2" background={{background:GRADIENTS[1].background}} value={GRADIENTS[1].background}/>
    <Egg id="option3" name="3" background={{background:GRADIENTS[2].background}} value={GRADIENTS[2].background}/>
    <Egg id="option4" name="4" background={{background:GRADIENTS[3].background}} value={GRADIENTS[3].background}/>
    <Egg id="option5" name="5" background={{background:GRADIENTS[4].background}} value={GRADIENTS[4].background}/>
    <Egg id="option6" name="6" background={{background:GRADIENTS[5].background}} value={GRADIENTS[5].background}/>
    <Egg id="option7" name="7" background={{background:GRADIENTS[6].background}} value={GRADIENTS[6].background}/>
    <Egg id="option8" name="8" background={{background:GRADIENTS[7].background}} value={GRADIENTS[7].background}/>
    <Button />
    </div>
    <Footer />
    <Avatar />
    </div>
  );
}

export default App;