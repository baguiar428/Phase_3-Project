// import './App.css'; //Prety sure this isn't needed...
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { GrGamepad } from "react-icons/gr";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="grid h-screen place-items-center">
      <HomeIcon icon={<GrGamepad size='140'/>} />
    </div>
  );
}

const HomeIcon = ({icon}) => (
  <div className="home-icon">
    {icon}
  </div>
)

      // {/* <Router> */}
      //   {/* <SideBar /> */}
      // {/* </Router> */}
      // {/* <Routes> */}
      //   {/* <Route path='/characters' element={<ChooseClass/>}/> */}
      //   {/* <Route path='/characters/:id' element={} /> */}
      // {/* </Routes> */}


export default App;

