import React, { useState } from 'react';
import './Searchbar.css'; // Import your CSS file

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    // You can pass the search term to a parent component using props.onSearch(searchTerm)
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
      {/* Optional: Add an icon for search functionality */}
    </div>
  );
}

export default SearchBar;
