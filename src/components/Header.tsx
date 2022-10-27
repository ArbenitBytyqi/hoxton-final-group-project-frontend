import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Header({ currentUser, setCurrentUser }: any) {
  const navigate=useNavigate()
  return (
    <header>
      <Link to="/home">
        <img src="..\knowledge.png" className="logo"></img>
      </Link>
      <div>
      </div>
      {!currentUser ? <Link to="/login">Log In</Link> : <div className="my-account">
        <p>{currentUser.fullname}</p>
        <span className="material-symbols-outlined">account_circle</span>
        {currentUser.role ? <Link to="/admin">Edit</Link> : null}
        {currentUser ? <button onClick={() => {
          setCurrentUser(null)
          localStorage.removeItem("token")
          navigate("/home")
        }}>Sign Out</button> : null}
      </div>}
    </header>
  );
}
