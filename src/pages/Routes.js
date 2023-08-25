import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";

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
