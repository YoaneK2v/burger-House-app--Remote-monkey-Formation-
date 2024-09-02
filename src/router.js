import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exat path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
