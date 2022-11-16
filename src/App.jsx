import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ChooseClass from './components/ChooseClass'
import Home from './components/Home'
import CharacterName from './components/CharacterName'
import Maps from './components/Maps'
import About from './components/About';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className='h-screen bg-gray-700'>
      <Routes>
        <Route path='/choose_name' element={<CharacterName/>}/>
        <Route path='/characters' element={<ChooseClass/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/maps' element={<Maps/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
      </Routes>
    </div>

  );
}

export default App;

