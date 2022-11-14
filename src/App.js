// import './App.css'; //Prety sure this isn't needed...
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      {/* <Router> */}
        <SideBar />
      {/* </Router> */}
      <Routes>
        <Route path='/characters' element={<ChooseClass/>}/>
        {/* <Route path='/characters/:id' element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
