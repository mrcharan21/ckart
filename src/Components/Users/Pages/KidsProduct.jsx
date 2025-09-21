import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";

function KidsProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/products?category=kidsproducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch kids products:", err));
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-50 pb-10 pt-2 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 pl-2 pt-4">
            Best of Kids Products
          </h2>
          <div className="flex overflow-x-auto gap-6 p-4 bg-white rounded shadow mb-8">
            {products.length === 0 ? (
              <div className="text-center text-gray-400">No products found.</div>
            ) : (
              products.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="min-w-[220px] bg-gray-50 border rounded-md shadow hover:scale-105 transition p-4 flex flex-col items-center"
                >
                  <img
                    src={typeof product.image === "string" ? product.image : ""}
                    alt={product.name}
                    className="h-36 w-36 object-contain mb-2"
                  />
                  <div className="font-semibold">{product.name}</div>
                  <div className="font-bold text-red-700">
                    Rs. {product.offerPrice}
                    <span className="text-sm line-through text-gray-500 ml-2">
                      {product.oldPrice}
                    </span>
                  </div>
                  <div className="mt-2">
                    <button className="bg-pink-700 hover:bg-pink-800 text-white px-3 py-1 rounded text-sm">
                      AddToCart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <h3 className="text-lg font-semibold mb-2 pl-2">All Kids Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.length === 0 ? (
              <div className="text-center col-span-full text-gray-400">No products found.</div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-lg shadow p-4 flex flex-col items-center"
                >
                  <img
                    src={typeof product.image === "string" ? product.image : ""}
                    alt={product.name}
                    className="h-32 w-32 object-contain mb-2"
                  />
                  <div className="font-semibold mb-1 text-center">{product.name}</div>
                  <div className="text-green-700 font-semibold">
                    Rs. {product.offerPrice}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">
                    From {product.oldPrice ? product.oldPrice : "-"}
                  </div>
                  <button className="bg-pink-700 hover:bg-pink-800 text-white px-3 py-1 rounded text-sm">
                    AddToCart
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default KidsProduct;
