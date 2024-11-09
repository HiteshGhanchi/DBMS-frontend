// import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">MyWebsite</h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-500 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Profile Circle */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-white">
              G
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 hover:text-gray-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
          Home
        </a>
        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
          About
        </a>
        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
          Services
        </a>
        <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
