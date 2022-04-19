import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './webParts/footer/Footer';
import Header from './webParts/header/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <Container>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </Container>
  );
}