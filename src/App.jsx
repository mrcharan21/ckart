import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/assets/admin.css'
import '../src/assets/users.css'

// Admin imports
import AdminLayout from './AdminLayout'
import AdminLogin from './Components/Admin/AdminLogin'
import ManageCustomers from './Components/Admin/Pages/ManageCustomers'
import AddCategory from './Components/Admin/Pages/AddCategory'
import AddSubcategory from './Components/Admin/Pages/AddSubcategory'
import AddProduct from './Components/Admin/Pages/AddProducts'
import ManageContacts from './Components/Admin/Pages/ManageContacts'
import ManageReviews from './Components/Admin/Pages/ManageReviews'
import ManageFeedback from './Components/Admin/Pages/ManageFeedback'
import ManageProducts from './Components/Admin/Pages/ManageProducts'

// User imports
import UsersLayout from './UsersLayout'
import MensProducts from './Components/Users/Pages/MensProducts'
import WomensProduct from './Components/Users/Pages/WomensProduct'
import Electronics from './Components/Users/Pages/Electronics'
import KidsProduct from './Components/Users/Pages/KidsProduct'
import HomeFurnitures from './Components/Users/Pages/HomeFurnitures'
import ContactUs from './Components/Users/Pages/ContactUs'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Panel routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-login/dashboard" element={<AdminLayout />} />
        <Route path="/admin-login/manage-customers" element={<ManageCustomers />} />
        <Route path="/admin-login/add-category" element={<AddCategory />} />
        <Route path="/admin-login/add-subcategory" element={<AddSubcategory />} />
        <Route path="/admin-login/add-products" element={<AddProduct />} />
        <Route path="/admin-login/manage-products" element={<ManageProducts />} />
        <Route path="/admin-login/managecontacts" element={<ManageContacts />} />
        <Route path="/admin-login/managereviews" element={<ManageReviews />} />
        <Route path="/admin-login/manage-feedback" element={<ManageFeedback />} />

        {/* User Panel routes */}
        <Route path="/" element={<UsersLayout />} />
        <Route path="/mens-product" element={<MensProducts />} />
        <Route path="/womens-product" element={<WomensProduct />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/kids-products" element={<KidsProduct />} />
        <Route path="/home-furniture" element={<HomeFurnitures />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}
