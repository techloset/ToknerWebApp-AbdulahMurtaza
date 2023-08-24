import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Takenomics from "./Takenomics";
import OurTeam from "./OurTeam";

export default function CustomRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="takenomics" element={<Takenomics />} />
          <Route path="ourTeam" element={<OurTeam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
