import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import FrontUI from './Components/FrontUI.jsx';
import MainCourse from './Components/SideBarComponents/MainCourse';
import Starters from './Components/SideBarComponents/Starters';
import Form from './Components/Form';
import Cart from './Components/Cart';
import Update from './Components/Update';

const App = () => {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<FrontUI/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/front' element= {<FrontUI />} />
          <Route path='/cart' element= {<Cart />} />
          <Route path='/:id' element = {<Update />} />
          
        </Routes>
      </Router>
    
    
    </>
  );
};


export default App;
