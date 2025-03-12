import React from "react";
import WebAppHeader from "../components/webapp/WebAppHeader";
import WebAppFooter from "../components/webapp/WebAppFooter";

const WebAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="webapp-layout">
      <WebAppHeader />
      <main>{children}</main>
      <WebAppFooter />
    </div>
  );
};

export default WebAppLayout;
