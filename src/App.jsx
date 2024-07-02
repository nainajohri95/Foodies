import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <div className="bg-white dark:">
        <Navbar />
        <Hero />
        <Services />
      </div>
    </>
  );
};

export default App;
