import React from "react";
import { Routes, Route } from "react-router-dom";
import WebAppRoutes from "./routes/WebAppRoutes";
import PokedexRoutes from "./routes/PokedexRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/webapp/*" element={<WebAppRoutes />} />
      <Route path="/pokedex/*" element={<PokedexRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default App;
