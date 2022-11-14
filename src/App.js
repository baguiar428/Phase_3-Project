// import './App.css'; //Prety sure this isn't needed...
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <Router>
        <SideBar />
      </Router>
    </div>
  );
}

export default App;
