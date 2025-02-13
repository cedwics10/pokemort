import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'bootstrap/dist/css/bootstrap.css';

import './user/design/fontawesome.css'
import './user/design/templatemo-lugx-gaming.css';
import './user/design/owl.css';
import './user/design/animate.css';
import './user/design/flex-slider.css'

import 'swiper/swiper-bundle.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './User/index/Index';
import About from './user/about/about';
import Pokedex from './user/pokedex/Pokedex';

import Register from './user/register/register';
import Start from './user/start/Start';

import Head from './user/design/head/head';
import Header from './user/design/header/header';

import Footer from './user/design/footer/Footer';


function App() {
  return (
    <Router>
      <html>
        <head>
          <Head />
        </head>
        <body>
          <header className="header-area header-sticky">
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/start" element={<Start />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </Router>
  );
}

export default App;
