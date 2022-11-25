import { Routes, Route, Navigate } from "react-router-dom";
import { Crypto } from "../components/ExploreCoins/Crypto";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import FAQ from "../pages/Faq";
import Policy from "../pages/Policy";
import Support from "../pages/Support";
import Team from "../pages/Team";
import Wallet from "../pages/Wallet";

import Login from ".././components/Login_signUp/Login";
// import Signup from ".././components/Login_signUp/Signup"

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/support" element={<Support />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/coins" element={<Crypto />} />

      {/* 
      <Route path="/" element={<Signup />} /> */}

      {/* <Route path="/details" element={<Details />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
