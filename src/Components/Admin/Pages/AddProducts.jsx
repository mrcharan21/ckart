import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

function AddProduct() {
  const [form, setForm] = useState({
    category: "",
    subcategory: "",
    name: "",
    oldPrice: "",
    offerPrice: "",
    image: "", // now a URL string
    qty: "",
    description: "",
    addedDate: ""
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    if (form.category) {
      const foundCategory = categories.find((cat) => cat.name === form.category);
      setSubcategories(foundCategory ? foundCategory.subcategories : []);
      setForm((prev) => ({ ...prev, subcategory: "" }));
    } else {
      setSubcategories([]);
      setForm((prev) => ({ ...prev, subcategory: "" }));
    }
  }, [form.category, categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/products", form, {
        headers: { "Content-Type": "application/json" }
      });
      alert("Product added successfully!");
      setForm({
        category: "",
        subcategory: "",
        name: "",
        oldPrice: "",
        offerPrice: "",
        image: "",
        qty: "",
        description: "",
        addedDate: ""
      });
      navigate("/admin-login/manage-products");
    } catch (err) {
      alert("Error: " + err.message);
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
          <div className="max-w-2xl w-full mx-auto my-8 p-8 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Add Addproducts here</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <select
                className="border p-2 rounded"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">-select category-</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <select
                className="border p-2 rounded"
                name="subcategory"
                value={form.subcategory}
                onChange={handleChange}
                required
                disabled={!form.category}
              >
                <option value="">-select Subcategory-</option>
                {subcategories.map((subcat) => (
                  <option key={subcat} value={subcat}>{subcat}</option>
                ))}
              </select>
              <input
                className="border p-2 rounded"
                name="name"
                placeholder="Product Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="border p-2 rounded"
                name="oldPrice"
                type="number"
                placeholder="Old price"
                value={form.oldPrice}
                onChange={handleChange}
                required
              />
              <input
                className="border p-2 rounded"
                name="offerPrice"
                type="number"
                placeholder="Offer price"
                value={form.offerPrice}
                onChange={handleChange}
                required
              />
              <input
                className="border p-2 rounded"
                name="image"
                type="text"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
                required
              />
              <input
                className="border p-2 rounded"
                name="qty"
                type="number"
                placeholder="Product QTY"
                value={form.qty}
                onChange={handleChange}
                required
              />
              <textarea
                className="border p-2 rounded"
                name="description"
                placeholder="Product Descriptions"
                value={form.description}
                onChange={handleChange}
                required
              />
              <input
                className="border p-2 rounded"
                name="addedDate"
                type="date"
                value={form.addedDate}
                onChange={handleChange}
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                type="submit"
              >
                AddProducts
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
