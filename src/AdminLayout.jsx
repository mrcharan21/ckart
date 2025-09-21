import React from 'react'
import AdminHeader from './Components/Admin/AdminHeader'
import AdminSidebar from './Components/Admin/AdminSidebar'
import Dashboard from './Components/Admin/Dashboard'
import Footer from './Components/Admin/Footer'


export default function AdminLayout() {
  return (
    <>
    <AdminHeader />
    
    <div className="layout-container">
    <AdminSidebar />

    <div className="dashboard-scroll-container">
      {/* Content goes here */}
      <Dashboard />

        {/* Footer */}
        <Footer />
    
    </div>
    </div>
    </>
  )
}
