import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Users/Header";
import Content from "./Components/Users/Content";
import MensProducts from "./Components/Users/Pages/MensProducts";
import WomensProduct from "./Components/Users/Pages/WomensProduct";
import Electronics from "./Components/Users/Pages/Electronics";
import KidsProduct from "./Components/Users/Pages/KidsProduct";
import HomeFurnitures from "./Components/Users/Pages/HomeFurnitures";
import CourselComponent from "./Components/Users/Pages/CourselComponent";

export default function UsersLayout({ cartItems, onAddToCart }) {
  return (
    <>
      <Header cartItems={cartItems} />
      <div className="container mx-auto px-4">
        <Content
          cartItems={cartItems}
          onAddToCartClick={onAddToCart}
          onLogin={() => alert("Login clicked")}
        />
        {/* ✅ Pass data to nested routes */}
        <Outlet context={{ cartItems, handleAddToCart: onAddToCart }} />
        <CourselComponent />
        <MensProducts />
        <WomensProduct />
        <Electronics />
        <KidsProduct />
        <HomeFurnitures />
      </div>
    </>
  );
}
