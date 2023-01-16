import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Dogs from "../components/Dogs";
import Dog from "../components/Dog";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dog/:id" element={<Dog />} />
    </Routes>
  </Router>
);
