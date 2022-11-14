// import './App.css'; //Prety sure this isn't needed...
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { GrGamepad } from "react-icons/gr";
import ChooseClass from './components/ChooseClass'
import Home from './components/Home'
import CharacterName from './components/CharacterName'
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path='choose_name' element={<CharacterName/>}/>
        <Route path='/characters' element={<ChooseClass/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  //   <div className="grid h-screen place-items-center">
  //     <HomeIcon icon={<GrGamepad size='140'/>} />
  //   </div>
  );
}

// const HomeIcon = ({icon}) => (
//   <div className="home-icon">
//     {icon}
//   </div>
// )

export default App;

