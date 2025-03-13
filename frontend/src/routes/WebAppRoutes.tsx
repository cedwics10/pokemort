import React from "react";
import { Routes, Route } from "react-router-dom";
import WebAppLayout from "../layouts/WebAppLayout";

import About from "../pages/webapp/About";

import Connexion from "../pages/webapp/Connexion";
import Contact from "../pages/webapp/Contact";

import DemarrerPartie from "../pages/webapp/DemarrerPartie";
import Home from "../pages/webapp/Home";

const WebAppRoutes: React.FC = () => {
  return (
    <WebAppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/demarrer" element={<DemarrerPartie />} />        
        <Route path="/contact" element={<Contact />} />        
      </Routes>
    </WebAppLayout>
  );
};

export default WebAppRoutes;
