import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        fetchURL="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        fetchURL="https://qtify-backend-labs.crio.do/albums/new"
      />
      <SongsSection />
    </div>
  );
}

export default App;
