/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './User/Index/Index';
import About from './user/about/about';
import Pokedex from './user/pokedex/Pokedex';

import Register from './user/register/register';
import Start from './user/start/Start';

function App() {
  return (
    <Router>
      <div>
        <h1>Pokémort</h1>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
