import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import ActivitiesInitiatives from './components/ActivitiesInitiatives';
import Footer from './components/footer';
import TopHead from './components/TopHead'
import './App.css';

function App() {
  return (
    <div className="App">
      <TopHead />
      <Header />
      <SearchBar />
      <Banner />
      <ActivitiesInitiatives />
      <Footer/>
    </div>
  );
}

export default App;
