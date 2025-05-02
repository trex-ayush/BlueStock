import React from "react";
import Feature from "./Feature";
import OnTheGoSection from "./OnTheGoSection";
import Matter from "./Matter";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Matter />
      <Feature />
      <OnTheGoSection />
    </div>
  );
};

export default Home;
