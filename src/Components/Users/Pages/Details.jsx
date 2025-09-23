import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const outletContext = useOutletContext() || {};
  const handleAddToCart = outletContext.handleAddToCart;

  useEffect(() => {
    axios
      .get(`http://localhost:5001/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to fetch product details:", err));
  }, [id]);

  if (!product) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const addToCart = () => {
    if (typeof handleAddToCart === "function") {
      handleAddToCart(product, 1);
      alert("Added to cart!");
    } else {
      alert("Cart function not available.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white border rounded-lg shadow flex overflow-hidden">
      <div className="w-1/2 flex flex-col items-center p-8">
        <img src={typeof product.image === "string" ? product.image : ""} alt={product.name} className="h-80 w-auto object-contain mb-4" />
        <div className="flex w-full gap-4 mt-4">
          <button onClick={() => navigate("/mens-product")} className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded">
            Continue Shopping
          </button>
          <button onClick={addToCart} className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="text-3xl font-bold mb-4">{product.name}</div>
        <div className="text-xl text-green-700 font-semibold mb-2">Rs. {product.offerPrice}</div>
        <div className="text-base text-gray-500 line-through mb-2">MRP: {product.oldPrice}</div>
        <div className="my-4">{product.description}</div>
      </div>
    </div>
  );
}

export default Details;
