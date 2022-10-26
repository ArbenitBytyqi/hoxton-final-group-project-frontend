import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/home">
        <img src="..\knowledge.png" className="logo"></img>
      </Link>
      <div>
      </div>
      <div className="my-account">
        <p>My account</p>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
    </header>
  );
}
