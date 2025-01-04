import React from "react";
import "../App.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const logout = async () => {
    try {
      const response = await fetch(`http://localhost:8768/user/logout`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearers ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="navbar">
      <h1>FRIENDSBOOK</h1>
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="search friends"
      />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
