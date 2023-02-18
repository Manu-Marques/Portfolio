import React from "react";
import "./styles.css";
import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Projets from "../projets";
import Skills from "../skills";
import Experience from "../experience";
import Formations from "../formations";
import Footer from "../footer";
import Background from "../background";


export default function App() {
  return (
    <div className="App">
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/formations" element={<Formations />} />
      </Routes>
      <Background />
    </div>
  );
}