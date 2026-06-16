
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [ mode , setMode ] = useState('light');

  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-priamry');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }
  const toggleMode =(cls)=> {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+ cls)
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
    <Router>
<Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
   
     <Routes>
  <Route
    path="/"
    element={
      <Textform
        showAlert={showAlert}
        heading="Enter the text to analyse"
        mode={mode}
      />
    }
  />

  <Route
    path="/about"
    element={<About />}
  />
    </Routes>
  </div>
 </Router>
    </>
  );
}

export default App; 
 
