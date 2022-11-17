import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ChooseClass from './components/ChooseClass'
import Home from './components/Home'
import CharacterName from './components/CharacterName'
import Maps from './components/Maps'
import Adventure from './components/Adventure'
import About from './components/About';
import Leaderboard from './components/Leaderboard';
import Battle from './components/Battle'
import BattleResult from './components/BattleResult'

function App() {
  return (
    <div className='h-screen bg-gray-700'>
      <Routes>
        <Route path='/choose_name' element={<CharacterName/>}/>
        <Route path='/characters' element={<ChooseClass/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/maps' element={<Maps/>}/>
        <Route path='/maps/:id' element={<Adventure/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/battle' element={<Battle/>}/>
        <Route path='/battle_result' element={<BattleResult />}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>

  );
}

export default App;

