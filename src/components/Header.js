import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import AuthButtons from "./auth/AuthButtons";
import SearchBar from "./search/SearchBar";
import logo from "./electron-1.svg";
import { FaReact } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800"
    >
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <motion.div variants={iconVariants} whileHover="hover">
            <FaReact className="text-blue-400 text-5xl" />
          </motion.div>
          <Link
            className="text-3xl font-extrabold bg-clip-text coolfont text-white"
            to="/"
          >
            DeCoder
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <SearchBar />
          <nav></nav>
          <AuthButtons />
        </div>

        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMenuOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden bg-gray-900 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <SearchBar />
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Pricing
          </a>
          <a
            href="#docs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Docs
          </a>
          <div className="px-3 py-2">
            <AuthButtons />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
