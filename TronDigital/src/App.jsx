import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TronVolt from "./pages/TronVolt";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tron-volt" element={<TronVolt />} />
    </Routes>
  );
}
