import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled.

  const [alert, setalert] = useState(null); 

  const showalert = (message,type) =>{
    setalert(({
      msg:message,
      type: type
    }))

  }




  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
    }
  }

  return (
  <>
    <Navbar title="Nobody" about_test="About...." mode={mode} toggleMode={toggleMode} />
    
    <Alert  alertmessage={alert} ></Alert>



    <div className='container my-3'>
        <Textform heading="Enter the text"  mode={mode}/> 
    </div>


    
    
    </>
  );
}

export default App;
