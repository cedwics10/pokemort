import React from "react";
import { Routes, Route } from "react-router-dom";
import WebAppLayout from "../layouts/WebAppLayout";
/* import Home from "../pages/webapp/Home";
import About from "../pages/webapp/About"; */

const WebAppRoutes: React.FC = () => {
  return (
    <WebAppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </WebAppLayout>
  );
};

export default WebAppRoutes;
