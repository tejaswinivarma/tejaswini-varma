import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Hero, About, Services, Products, Careers, Contact, Footer } from "./components";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;