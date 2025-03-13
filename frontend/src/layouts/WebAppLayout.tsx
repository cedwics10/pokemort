import {React, useEffect} from "react";
import WebAppHeader from "../components/webapp/WebAppHeader";
import WebAppFooter from "../components/webapp/WebAppFooter";

function setPageTitle(title: string) : void {
  useEffect(() => {
    document.title = 'My Page Title';
  }, [title]);
}

const WebAppLayout: React.FC<{ children: React.ReactNode, title?: string }> = ({ children, title = "Pokémort - Votre premier jeu" }) => {
  setPageTitle(title);
  return (
      <div className="webapp-layout">
        <WebAppHeader />
        <main>{children}</main>
        <WebAppFooter />
      </div>
  );
};

export default WebAppLayout;