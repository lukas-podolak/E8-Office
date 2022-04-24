import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import StartList from './pages/StartList';
import Footer from './webParts/footer/Footer';
import Header from './webParts/header/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/results" element={
          <Results />
        } />
        <Route path="/results/2022" element={
          <Results season={"2022"} />
        } />
        <Route path="/startList" element={
          <StartList />
        } />
        <Route path="*" element={
          <Home />
        } />
      </Routes>
      <Footer />
    </div>
  );
}