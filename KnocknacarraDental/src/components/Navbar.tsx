import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <ul className="flex justify-center space-x-4 p-4">
        <li>
          <a href="#section1" className="hover:text-blue-400">Section 1</a>
        </li>
        <li>
          <a href="#section2" className="hover:text-green-400">Section 2</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;