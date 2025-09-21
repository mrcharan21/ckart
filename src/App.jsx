import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/assets/admin.css'
import AdminLayout from './AdminLayout';
import AdminLogin from './Components/Admin/AdminLogin';

export default function App() {
  return (
    <>
    {/*Admin Panel*/}
    <Router>
      <Routes>
        <Route path='/' element={<AdminLogin />}/>
        <Route path='/admin-login/dashboard' element={<AdminLayout />}/>
      </Routes>
    </Router>


    {/*User Panel*/}
    {/* <Router>
      <Routes>

      </Routes>
    </Router> */}
    </>
  )
}
