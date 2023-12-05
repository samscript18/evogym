import React from "react";
import "./App.css";
import { Navbar, Sponsor } from "./components";
import { Header, Benefits, Classes, Contact, Footer } from "./container";

function App() {
  return (
    <div className="App bg-gray-20">
      <Navbar />
      <Header />
      <Sponsor />
      <Benefits />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
