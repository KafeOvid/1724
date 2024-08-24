import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search - Keyword, Phrase" />
      <button>Search</button>
      <button>Advanced Search</button>
    </div>
  );
};

export default SearchBar;
