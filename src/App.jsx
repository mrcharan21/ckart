import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/assets/admin.css";
import "../src/assets/users.css";

// Admin imports (unchanged)
import AdminLayout from "./AdminLayout";
import AdminLogin from "./Components/Admin/AdminLogin";
import ManageCustomers from "./Components/Admin/Pages/ManageCustomers";
import AddCategory from "./Components/Admin/Pages/AddCategory";
import AddSubcategory from "./Components/Admin/Pages/AddSubcategory";
import AddProduct from "./Components/Admin/Pages/AddProducts";
import ManageContacts from "./Components/Admin/Pages/ManageContacts";
import ManageReviews from "./Components/Admin/Pages/ManageReviews";
import ManageFeedback from "./Components/Admin/Pages/ManageFeedback";
import ManageProducts from "./Components/Admin/Pages/ManageProducts";

// User imports (updated)
import UsersLayout from "./UsersLayout";
import MensProducts from "./Components/Users/Pages/MensProducts";
import WomensProduct from "./Components/Users/Pages/WomensProduct";
import Electronics from "./Components/Users/Pages/Electronics";
import KidsProduct from "./Components/Users/Pages/KidsProduct";
import HomeFurnitures from "./Components/Users/Pages/HomeFurnitures";
import ContactUs from "./Components/Users/Pages/ContactUs";
import Details from "./Components/Users/Pages/Details";
import CheckOut from "./Components/Users/Pages/CheckOut";
import Content from "./Components/Users/Content";

export default function App() {
  // single source of truth for cart
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart: increase quantity if exists
  const handleAddToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + qty } : p
        );
      }
      // ensure product has quantity
      return [...prev, { ...product, quantity: qty }];
    });
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((p) => p.id !== productId));
  };

  // Update quantity (set)
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity: newQty } : p))
    );
  };

  // Handler when user pays on checkout page
  const handlePay = (customerDetails, items, total) => {
    // Example: you'd call your backend/payment gateway here
    alert(`Payment successful! Total Paid: Rs. ${total}`);
    // Clear cart after payment
    setCartItems([]);
  };

  return (
    <Router>
      <Routes>
        {/* Admin Panel routes (unchanged) */}
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

        {/* User Panel routes nested inside UsersLayout */}
        <Route
          path="/"
          element={
            <UsersLayout
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          }
        >
          {/* <Route index element={<Content />} /> */}
          <Route path="mens-product" element={<MensProducts />} />
          <Route path="womens-product" element={<WomensProduct />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="kids-products" element={<KidsProduct />} />
          <Route path="home-furniture" element={<HomeFurnitures />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="details/:id" element={<Details />} />
          <Route
            path="checkout"
            element={
              <CheckOut
                cartItems={cartItems}
                onPay={handlePay}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
