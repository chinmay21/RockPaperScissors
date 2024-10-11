import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Game from './components/Game';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/game' Component={Game}/>
    </Routes>
  );
}

export default App;
