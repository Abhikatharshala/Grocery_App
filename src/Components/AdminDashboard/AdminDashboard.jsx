import React from 'react'
import MyNavbar from '../Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import './AdminDashboard.css'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard'>
           <MyNavbar/>
      <div className='admin-layout'>
        <Sidebar />
      <div className='content'>
          <Outlet /> {/* To render nested routes like /MyPostings */}
       </div>
      </div>
    </div>
  )
}
export  default AdminDashboard

