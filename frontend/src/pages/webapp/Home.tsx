import React from "react";
import WebAppLayout from "../../layouts/WebAppLayout";

const Home: React.FC = () => {
  return (
    <WebAppLayout>
      <section className="home">
        <h1>Welcome to the WebApp</h1>
        <p>This is the main homepage of the application.</p>
      </section>
    </WebAppLayout>
  );
};

export default Home;
