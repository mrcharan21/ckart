import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOut({ cartItems, onPay }) {
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });
  const navigate = useNavigate();

  // Use offerPrice (or fallback to price) in calculations
  const getItemPrice = (item) => item.offerPrice || item.price || 0;
  const getItemQuantity = (item) => item.quantity || 1;
  
  const total = cartItems.reduce(
    (sum, item) => sum + getItemPrice(item) * getItemQuantity(item),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all details");
      return;
    }
    onPay(customer, cartItems, total);
    navigate("/"); // Navigate to main page after payment
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">No products in cart.</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Address"
              value={customer.address}
              onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
              className="w-full p-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Pay Now
            </button>
          </form>

          {/* Product Table */}
          <table className="min-w-full border text-left mb-6">
            <thead>
              <tr>
                <th className="px-2 py-1 border">Image</th>
                <th className="px-2 py-1 border">Product Name</th>
                <th className="px-2 py-1 border">Quantity</th>
                <th className="px-2 py-1 border">Price</th>
                <th className="px-2 py-1 border">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={item.id || item.name || idx}>
                  <td className="px-2 py-1 border">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "55px", height: "55px", objectFit: "cover" }}
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td className="px-2 py-1 border font-bold">{item.name}</td>
                  <td className="px-2 py-1 border">{getItemQuantity(item)}</td>
                  <td className="px-2 py-1 border">₹{getItemPrice(item)}</td>
                  <td className="px-2 py-1 border font-semibold">
                    ₹{getItemPrice(item) * getItemQuantity(item)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="font-bold text-xl text-right mb-4">
            Sum of Subtotal Rs.{total}/-
          </div>
        </>
      )}
    </div>
  );
}
