import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import Navigation from "./Navigation";
import Profile from "./Profile";
import About from "./About";
import Experience from "./Experience";
import Projetos from "./Projetos";
import Footer from "./Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento por 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <div key="content">
            <Navigation />
            <Profile />
            <About />
            <Experience />
            <Projetos />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
