import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Content({ cartItems = [], onAddToCartClick, onLogin }) {
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => setSearch(e.target.value);

  const fetchSearchResults = async (query) => {
    console.log("Searching for:", query);
    // Add search API call here
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    fetchSearchResults(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchSearchResults(search);
    }
  };

  const navigateToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    setShowCart(false);
    navigate("/checkout"); // ✅ SPA navigation without refresh
  };

  return (
    <header className="flex items-center justify-between p-2 px-8 bg-white shadow-md relative">
      {/* Search Bar */}
      <div className="flex flex-1 justify-center items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder="Search for Products, Brands and More"
          className="w-[400px] p-2 px-4 border border-gray-200 rounded-l-lg text-base bg-gray-100 outline-none focus:border-blue-500"
        />
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Right Side: Login & Cart */}
      <div className="flex items-center gap-8 relative">
        {/* Login Button */}
        <button
          onClick={onLogin}
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
        >
          <FiUser size={20} />
          <span>Login</span>
        </button>

        {/* Cart */}
        <div className="relative">
          <button
            onClick={() => setShowCart((prev) => !prev)}
            className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
          >
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartItems.reduce((s, i) => s + (i.quantity || 1), 0)}
              </span>
            )}
            <span>Cart</span>
          </button>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 top-9 bg-white shadow-lg w-80 max-h-[420px] overflow-y-auto rounded-md z-50 p-3">
              <h4 className="font-bold mb-3">Cart Items</h4>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">No items in cart</p>
              ) : (
                <>
                  <ul className="list-none max-h-64 overflow-y-auto">
                    {cartItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="mb-3 border-b border-gray-200 pb-2 flex gap-2 items-center"
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                        <div className="flex-1">
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            {item.description || ""}
                          </div>
                          <div>Price: Rs. {item.offerPrice}</div>
                          {item.quantity && (
                            <div>Quantity: {item.quantity}</div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="font-bold text-lg border-t border-gray-300 pt-2 text-right">
                    Total: Rs.{" "}
                    {cartItems.reduce(
                      (total, item) =>
                        total + (item.offerPrice || 0) * (item.quantity || 1),
                      0
                    )}
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={navigateToCheckout}
                    className="mt-3 w-full py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700"
                  >
                    Next Go for Checkout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Content;
