import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StartList from './pages/StartList';
import Footer from './webParts/footer/Footer';
import Header from './webParts/header/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start_list" element={<StartList />} />
      </Routes>
      <Footer />
    </div>
  );
}