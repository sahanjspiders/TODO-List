import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
// import {Routes ,Route, BrowserRouter} from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect/dist/core';


function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
  {/* <Navbar/> */}
    <Routes>
      <Route  path='/'  element={ <Home/> } />
      <Route  path='About'  element={ <About/> } />
      <Route path='Projects' element={<Projects/>}></Route>
    </Routes>
  
  </BrowserRouter>  
  
    </div>
  );
}

export default App;
