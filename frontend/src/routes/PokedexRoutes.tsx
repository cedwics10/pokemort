import React from "react";
import { Routes, Route } from "react-router-dom";

import PokedexLayout from "../layouts/PokedexLayout.tsx";
import List from "../pages/pokedex/List.tsx";
import Details from "../pages/pokedex/Details.tsx";

const PokedexRoutes: React.FC = () => {
  return (
    <PokedexLayout>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </PokedexLayout>
  );
};

export default PokedexRoutes;
