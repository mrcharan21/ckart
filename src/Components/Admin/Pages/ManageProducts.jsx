import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import { FaTrashAlt } from "react-icons/fa";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5001/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  };

  // Delete product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://localhost:5001/products/${id}`)
        .then(() => fetchProducts())
        .catch((err) => alert("Failed to delete product: " + err.message));
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="flex h-[calc(100vh-56px)] bg-gray-50">
        <div className="w-64 bg-white border-r h-full">
          <AdminSidebar />
        </div>
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto bg-white rounded shadow p-6">
            <h1 className="text-2xl mb-4 font-semibold">Manage All Products</h1>
            <div className="mb-2 text-lg font-semibold text-blue-900">
              Manage Products details
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">#</th>
                    <th className="border p-2">categoryName</th>
                    <th className="border p-2">subcategoryName</th>
                    <th className="border p-2">PName</th>
                    <th className="border p-2">Oldprice</th>
                    <th className="border p-2">Offerprice</th>
                    <th className="border p-2">Image</th>
                    <th className="border p-2">qty</th>
                    <th className="border p-2">Descriptions</th>
                    <th className="border p-2">Added Date</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="11" className="p-4 text-center">No products found.</td>
                    </tr>
                  ) : (
                    products.map((product, index) => (
                      <tr key={product.id || product.name}>
                        <td className="border p-2 text-center">{index + 1}</td>
                        <td className="border p-2">{product.category}</td>
                        <td className="border p-2">{product.subcategory}</td>
                        <td className="border p-2">{product.name}</td>
                        <td className="border p-2">{product.oldPrice}</td>
                        <td className="border p-2">{product.offerPrice}</td>
                        <td className="border p-2 text-center">
                          {product.image && typeof product.image === "string" ? (
                            <img
                              src={product.image}
                              alt="product"
                              className="h-16 w-16 object-contain mx-auto"
                            />
                          ) : (
                            <span>No Image</span>
                          )}
                        </td>
                        <td className="border p-2">{product.qty}</td>
                        <td className="border p-2">{product.description}</td>
                        <td className="border p-2">{product.addedDate}</td>
                        <td className="border p-2 text-center">
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageProducts;
