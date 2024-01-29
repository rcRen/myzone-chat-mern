import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth/sign-up" element={<Register />} />
      <Route path="/auth/sign-in" element={<Login />} />
    </Routes>
  );
}

export default App;
