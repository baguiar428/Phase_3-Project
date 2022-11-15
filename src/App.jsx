// import './App.css'; //Prety sure this isn't needed...
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { GrGamepad } from "react-icons/gr";
import ChooseClass from './components/ChooseClass'
import Home from './components/Home'
import CharacterName from './components/CharacterName'
import SideBar from "./components/SideBar";
import About from './components/About';

function App() {
  return (
    <div className='h-screen bg-gray-700'>
      <Routes>
        <Route path='/choose_name' element={<CharacterName/>}/>
        <Route path='/characters' element={<ChooseClass/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>

  );
}

export default App;

