import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopHead from './components/TopHead';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import FooterTop from './components/FooterTop';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopHead />
        <Header />
        <Routes>
          <Route path="/" element={<><Banner /><About /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <FooterTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
