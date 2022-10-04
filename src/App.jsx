import React from "react";
import Navigation from "./components/Navigation";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
