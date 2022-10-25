import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="home">
        <input placeholder="search for a book"></input>
        </div>
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
