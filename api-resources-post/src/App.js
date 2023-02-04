import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './components/Firebase';
import Login from './components/Login';
import DisplayPost from './components/DisplayPost'


function App() {
  const [presentuser, setPresentuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
      setPresentuser({
        uid: user.uid,
        email:user.email
      })
    }else{
      setPresentuser(null)
    }
    })
    
 },[])
  return (
    <div className="App">
      <center>
      {presentuser ? <DisplayPost presentuser={presentuser}/> :<Login/> }
      </center>
    </div>
  );
}

export default App;
