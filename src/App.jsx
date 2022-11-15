// import './App.css'; //Prety sure this isn't needed...
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { GrGamepad } from "react-icons/gr";
import ChooseClass from './components/ChooseClass'
import Home from './components/Home'
import CharacterName from './components/CharacterName'
import Maps from './components/Maps'
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path='/choose_name' element={<CharacterName/>}/>
        <Route path='/characters' element={<ChooseClass/>}/>
        <Route path='/maps' element={<Maps/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>

  );
}

export default App;

