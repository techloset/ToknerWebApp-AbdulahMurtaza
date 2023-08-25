import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home";

export default function CustomRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
