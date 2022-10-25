import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BookDetails } from "./pages/BookDetails";
import { Homepage } from "./pages/Homepage";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/bookdetails" element={<BookDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
