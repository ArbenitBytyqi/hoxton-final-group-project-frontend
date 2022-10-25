import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/home">
        <h3>NAME OF LIBRARY</h3>
      </Link>
      <div className="my-account">
        <p>My account</p>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
    </header>
  );
}
