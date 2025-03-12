import React from "react";
import PokedexHeader from "../components/pokedex/PokedexHeader";
import PokedexSidebar from "../components/pokedex/PokedexSidebar";

const PokedexLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pokedex-layout">
      <PokedexHeader />
      <div className="pokedex-content">
        <PokedexSidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default PokedexLayout;
