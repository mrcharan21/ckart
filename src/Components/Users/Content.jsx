import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import axios from "axios";

function Content({ onLogin, onCart, onSearchResults }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchSearchResults = async (query) => {
    try {
      // Assuming your backend supports filtering via q parameter for search keyword
      const res = await axios.get(`http://localhost:5001/products?q=${query}`);
      if (onSearchResults) onSearchResults(res.data);
    } catch (error) {
      console.error("Search API error:", error);
      if (onSearchResults) onSearchResults([]);
    }
  };

  const handleButtonClick = () => {
    fetchSearchResults(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearchResults(search);
    }
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 32px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* Search bar with button */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder="Search for Products, Brands and More"
          style={{
            width: "400px",
            padding: "8px 16px",
            border: "1px solid #eee",
            borderRadius: "8px 0 0 8px",
            fontSize: "16px",
            background: "#f7f9fa",
            outline: "none",
          }}
        />
        <button
          onClick={handleButtonClick}
          style={{
            padding: "9px 16px",
            backgroundColor: "#2874f0",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "0 8px 8px 0",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Search
        </button>
      </div>

      {/* Right actions */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "32px" }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            color: "#222",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
          }}
          onClick={onLogin}
        >
          <FiUser size={20} /> Login
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#222",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
          }}
          onClick={onCart}
        >
          <FiShoppingCart size={20} /> Cart
        </button>
      </div>
    </header>
  );
}

export default Content;
