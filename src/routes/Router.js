import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import Faq from "../pages/Faq";
import Policy from "../pages/Policy";
import Team from "../pages/Team";
import Support from "../pages/Support";
import Wallet from "../pages/Wallet";

import Login from "../components/Login_signUp/Login";
import RedirectToDashboard from "../components/Login_signUp/RedirectToDashboard";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/faq/*" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/support" element={<Support />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/redirectedhere" element={<RedirectToDashboard />} />
    </Routes>
  );
};

export default Router;
