import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../store/Search';
import { Search } from 'lucide-react';
import './SearchInput.css';

const placeholders = [
  'Search for t-shirts...',
  'Search for pants...',
  'Search for electronics...',
  'Search for shoes...',
  'Search for home decor...'
];

const SearchInput = () => {
  const navigate = useNavigate();
  const { searchItem, setSearchItem } = useSearch();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const placeholderInterval = setInterval(() => {
      setFadeClass('fade-out');  // Start fade-out

      setTimeout(() => {
        setCurrentPlaceholder((prev) => {
          const currentIndex = placeholders.indexOf(prev);
          const nextIndex = (currentIndex + 1) % placeholders.length;
          return placeholders[nextIndex];
        });
        setFadeClass('fade-in');  // Start fade-in after fade-out completes
      }, 500); // This should match the duration of the fade-out animation
    }, 3000);

    return () => clearInterval(placeholderInterval); // Cleanup on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Searching for:', searchItem.keyword);
    try {
      const response = await fetch(`https://food-5mu1.onrender.com//api/v1/product/search/${searchItem.keyword}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Search results:', data);
      setSearchItem({ ...searchItem, result: data });
      navigate('/searcher');
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" role="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className={`form-control search-input ${fadeClass}`}
          placeholder={currentPlaceholder}
          aria-label="search"
          value={searchItem.keyword}
          onChange={(e) => setSearchItem({ ...searchItem, keyword: e.target.value })}
        />
        <button type="submit" className="btn search-btn">
          <Search size={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
