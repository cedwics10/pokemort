/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './User/Index/Index';
import About from './User/About/About';


function App() {
  return (
    <Router>
      <div>
        <h1>Pokémort</h1>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
