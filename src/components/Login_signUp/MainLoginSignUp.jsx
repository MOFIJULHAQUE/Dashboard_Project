import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

import RedirectToDashboard from "./RedirectToDashboard";
const MainLoginSignUp = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={ <Signup />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/redirectedhere" element={<RedirectToDashboard />} /> */}
      </Routes>
      {/* <Login /> */}
    </>
  );
};

export default MainLoginSignUp;
