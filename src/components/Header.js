import React from 'react';
import { Link } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons';
import SearchBar from './search/SearchBar';

function Header() {
  return (
    <header
      aria-label="Site Header"
      className=" top-0 left-0 right-0 z-50 bg-neutral-900 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
          to="/"
        >
          CodeSplain
        </Link>

        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-6 text-sm text-gray-300">
              <li>
                <SearchBar />
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <AuthButtons />
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;