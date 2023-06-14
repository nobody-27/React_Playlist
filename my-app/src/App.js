import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

let name=".....not found";

function App() {
  return (

  <>
 
    <Navbar title="Nobody" about_test="About...." />
    <div className='container my-3'>
        <Textform heading="enter the text" /> 
    </div>
    
    </>
  );
}

export default App;
