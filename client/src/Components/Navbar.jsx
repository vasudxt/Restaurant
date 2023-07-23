import React from 'react'

const Navbar = ({ cartItems,  toggleSidebar }) => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <div>
            <button
              onClick={toggleSidebar}
              className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              |||
            </button>
          </div>
          <div className='py-1 m'>

          </div>
    
        </div>
      </nav>
    );
  };
  
  export default Navbar;