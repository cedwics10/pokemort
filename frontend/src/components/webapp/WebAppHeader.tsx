import React from "react";
import { Link } from "react-router-dom";

const WebAppHeader: React.FC<{ pageName?: string }> = ({ pageName = "My WebApp" }) => {
  return (
    <header className="webapp-header">
      <div className="logo">
        <h1>{pageName}</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pokedex">Pokedex</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default WebAppHeader;
