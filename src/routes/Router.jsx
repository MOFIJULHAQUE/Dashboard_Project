import { Routes, Route, Navigate } from "react-router-dom";
import { Crypto } from "../components/exploreCoins/Crypto";
import { HistoryChart } from "../components/histroryChart/HistoryChart";
import { Investment } from "../components/investmentPlane/Investment";
import { MainChart } from "../components/mainChart/MainChart";
import { MonthlyChart } from "../components/monthlyChart/MonthlyChart";

import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import FAQ from "../pages/Faq";
import Policy from "../pages/Policy";
import Support from "../pages/Support";
import Team from "../pages/Team";
import Wallet from "../pages/Wallet";
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
      <Route path="/mainChart" element={<MainChart />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/historyChart" element={<HistoryChart />} />
    <Route path = "/monthly" element ={<MonthlyChart />} />
    </Routes>
  );
};

export default Router;
