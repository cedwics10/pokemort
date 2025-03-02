import React from "react";
import LogoImage from "../images/banner-image.jpg";

const HomeLogo = () => {
  return (
    <div className="col-lg-4 offset-lg-2">
      <div className="right-image">
        <img src={LogoImage} alt="Home Logo" />
        <span className="price">
          <a href="#" style={{ color: "white" }}>COMMENCER</a>
        </span>
      </div>
    </div>
  );
};

export default HomeLogo;
