import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Navbar from './components/navBar';

function App(){
  const location = useLocation();
  console.log(location);

  const handleInit = async(main)=>{
    await loadFull(main) 
  }

  const renderParticleJsInHomePage=location.pathname==="/";
  return (
    <div className="App">
      {}
      {renderParticleJsInHomePage && (
        <Particles id="particles" init={handleInit}/>
      )}
      
      {}
      <Navbar/>
      {}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;
