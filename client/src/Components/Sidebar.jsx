import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, handleMenuClick }) => {
    
    return (
      <div
        className={`border-r-2 border-gray-200 fixed inset-y-0 left-0 bg-white w-50 py-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
             <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-xl font-semibold mb-4 text-center">Menu</h2>
      <ul className="space-y-2 px-4">
        
        <li>
        <Link to="/" className="text-black font-semibold block py-2 px-4 hover:bg-gray-100" onClick={() => handleMenuClick('Starters')}>
              Starters
            </Link>
        </li>
        <li>
        <Link to="/" className="text-black font-semibold block py-2 px-4  hover:bg-gray-100" onClick={() => handleMenuClick('MainCourse')}>
              Main Course
            </Link>
        </li>
        <li>
        <Link to="/" className="text-black font-semibold block py-2 px-4  hover:bg-gray-100" onClick={() => handleMenuClick('Breads')}>
              Breads
            </Link>
          </li>
        <li>
        <Link to="/" className="text-black font-semibold block py-2 px-4  hover:bg-gray-100" onClick={() => handleMenuClick('Sweets')}>
              Sweets
            </Link>
        </li>
        <li>
        <Link to="/" className="text-black font-semibold block py-2 px-4  hover:bg-gray-100" onClick={() => handleMenuClick('Beverages')}>
              Beverages
            </Link>
        </li>
        <li>
          <a href="/form" className="text-black font-bold block bg-green-500 mt-8 py-2 px-4  hover:bg-green-700">
            Add Dish
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar