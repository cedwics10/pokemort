import React from "react";

const WebAppFooter: React.FC = () => {
  return (
    <footer className="webapp-footer">
      <p>&copy; {new Date().getFullYear()} My WebApp. All rights reserved.</p>
    </footer>
  );
};

export default WebAppFooter;
