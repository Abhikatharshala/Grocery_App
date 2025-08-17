import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {


  return (
  <div className='sidebar'>
  
          <div className='sidebar-data'>
           
    
      <Link to="/AdminDashboard/Postdata" onClick={toggleSidebar}>PostData</Link>
        <Link to="/AdminDashboard/MyPostings" onClick={toggleSidebar}>MyPostings</Link>
          </div>
  
   
    </div>
  );
};

export default Sidebar;

