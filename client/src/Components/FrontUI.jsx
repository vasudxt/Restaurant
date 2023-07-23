import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainCourse from './SideBarComponents/MainCourse';
import Starters from './SideBarComponents/Starters';
import Cart from './Cart';
import Bread from './SideBarComponents/Bread';
import Beverages from './SideBarComponents/Beverages';
import Sweets from './SideBarComponents/Sweets';

const FrontUI = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  const [selectedMenu, setSelectedMenu] = useState('Starters');
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  }
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleMenuClick={handleMenuClick} />
        <div className='flex-grow'>
          {selectedMenu === 'Starters' && <Starters />}
          {selectedMenu === 'MainCourse' && <MainCourse />}
          {selectedMenu === 'Bread' && <Bread />}
          {selectedMenu === 'Beverages' && <Beverages />}
          {selectedMenu === 'Sweets' && <Sweets />}
        </div>
        <div className='w-1/4 flex-shrink-0'>
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default FrontUI