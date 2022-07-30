// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');        // whether darkmode is enable or not!
  const [alert, setAlert] = useState(null)      // this value inside () is by default value  <-----important-------|
  
  const showAlert = (message, type) =>{                                     //<-------- msg alert starts here
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);                                                              //<-------- msg alert ends here
  }


  // dark mode 
  const toggleMode = () =>{                                            //<----- dark mode starts form here
  if(mode === 'light'){
    setMode('dark')
    document.body.style.background = '#1f2937'
    showAlert(" Dark mode has been enabled", "success ")
  }  
  else{
    setMode('light')
    document.body.style.background = 'white'
    showAlert(" Light mode has been enabled", "success ")

  }
  }                                                                     //<----- dark mode ends here

  return (
    <>
    {/* navbar  */}
      <Navbar title = "TextUtils" AboutText = "About Us" mode = {mode} toggleMode = {toggleMode}/> 
      {/* alert  */}
    <Alert alert = {alert}/>
      <div className="container my-3" >
      </div>
        <TextForm Heading = "Enter The Text To Analyse Below" mode = {mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
