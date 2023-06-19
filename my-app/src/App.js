import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';

let name=".....not found";

function App() {
  const [mode, setMode] = useState('dark'); //whether dark mode is enabled.

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
    <div className='container my-3'>
        <Textform heading="Enter the text"  mode={mode}/> 
        {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
