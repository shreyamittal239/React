
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [ mode , setMode ] = useState('light');
  const toggleMode =()=> {
  if(mode=== 'light'){
    setMode('dark'); 
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode Enabled" , "success");

  } else {
    setMode('light');
    document.body.style.backgroundColor = ' white';
    showAlert("Light mode enabled", "success");
  }
  }


  const [ alert, setAlert ] = useState(null);

  const showAlert =( message , type ) => {
    setAlert({
    msg : message,
    type : type 
  })

  setTimeout(()=> {
    setAlert(null);
  },3000)
  }
 
  return (
    <>
<Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Textform showAlert={showAlert} heading="Enter the text to analyse"  mode={mode}></Textform> 
<About/>
</div>

    </>
  );
}

export default App; 
 
