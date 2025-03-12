import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import WebAppRoutes from "./routes/WebAppRoutes";
import PokedexRoutes from "./routes/PokedexRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<WebAppRoutes />} />
      <Route path="/pokedex/*" element={<PokedexRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      { /* <Route path="*" element={<Navigate to="/" replace />} /> */ }
    </Routes>
  );
};

export default App;
