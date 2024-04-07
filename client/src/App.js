import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import Chapters from "./Pages/Chapters";
import Search from "./Pages/Search";
import ChapterImage from "./Pages/ChapterImage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/chapters/:id" element={<Chapters />} />
        <Route path="/chapter/:id" element={<ChapterImage />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
