import React from "react";
import { Routes, Route } from "react-router-dom";
/* import PokedexLayout from "../layouts/PokedexLayout";
import List from "../pages/pokedex/List";
import Details from "../pages/pokedex/Details"; */

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
