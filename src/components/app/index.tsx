import React from "react";
import "./styles.css";
import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Projets from "../projets";
import Skills from "../skills";
import Contact from "../contact";
import Background from "../background";


export default function App() {
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}