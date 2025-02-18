import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold capitalize">Welcome to my simple portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/home" 
              className="text-white text-lg hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-white text-lg hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-white text-lg hover:text-gray-400 transition duration-300"
            >
              Weather App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
