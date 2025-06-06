// import About from './About'
import Navbar from './components/Navbar';
import About  from './components/About';
import TextForms from './TextForms';
import { useState } from 'react';
import Alert from './components/Alert';
import './App.css'; 
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App=()=>{
const[mode,setMode]=useState('light');//wheather darkmode is enable or not
const[alert,setAlert]=useState(null); 

const showAlert=(message,type)=>{
  setAlert({
   msg:message,
   type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#0dcaf0';
    showAlert("Enabled Dark mode","success")
    // document.title='Textutils-Darkmode'

  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Enabled light mode","success")
    //  document.title='Textutils-Lightmode'
  }
}
    
return (
  <>
    <Router>   
      <Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route 
               path="/about"
              element={<About  mode={mode}/>}
            />
            <Route
              path="/"
              element={<TextForms showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter" mode={mode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  </>
);

}
export default App
