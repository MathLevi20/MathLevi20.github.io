import React from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import About from "./About";
import Experience from "./Experience";
import Projetos from "./Projetos";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <About />
      <Experience />
      <Projetos />
      <Footer />
    </div>
  );
}

export default Home;
