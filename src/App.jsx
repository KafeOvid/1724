import React from 'react';
import TopHead from './components/TopHead';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import FooterTop from './components/FooterTop';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopHead />
      <Header />
      <Banner />
      <About /> 
      <FooterTop />
      <Footer/>
    </div>
  );
}

export default App;
