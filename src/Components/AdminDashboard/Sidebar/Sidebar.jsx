import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {


  return (
  <div className='sidebar'>
          <div className='sidebar-data'>
      <Link to="/AdminDashboard/Postdata">PostData</Link>
        <Link to="/AdminDashboard/MyPostings">MyPostings</Link>
          </div>
  
   
    </div>
  );
};

export default Sidebar;

