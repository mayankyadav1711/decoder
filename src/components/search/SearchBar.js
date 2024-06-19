import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/repositories?q=${term}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search repositories"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-full border-none bg-black/30 px-6 py-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" /> */}
        </div>
        <button
          type="submit"
          className="ml-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/50 transition-colors duration-300 hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;