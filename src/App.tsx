import React, { useEffect } from "react";
import "./App.css";
import { Navbar, Sponsor } from "./components";
import { Header, Benefits, Classes, Contact } from "./container";
import Footer from "./container/Footer";
import { log } from "console";

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
