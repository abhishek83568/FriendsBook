import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const Links = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Links;
