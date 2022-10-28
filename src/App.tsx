import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Admin } from "./pages/Admin";
import { Author } from "./pages/Author";
import { BookDetails } from "./pages/BookDetails";
import { Cart } from "./pages/Cart";
import { Homepage } from "./pages/Homepage";
import { LogIn } from "./pages/LogIn";
import { PageNotFound } from "./pages/PageNotFound";
import { Reviews } from "./pages/Reviews";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6677/books`)
      .then((resp) => resp.json())
      .then((data) => setAllBooks(data));

    if (localStorage.token) {
      fetch("http://localhost:6677/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            setCurrentUser(data.user);
            console.log(data.user);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Homepage allBooks={allBooks} setSelectedBook={setSelectedBook} />
            }
          />
          <Route path="/admin" element={<Admin setAllBooks={setAllBooks} />} />
          <Route
            path="/bookdetails"
            element={
              <BookDetails
                selectedBook={selectedBook}
                setSelectedAuthor={setSelectedAuthor}
              />
            }
          />
          <Route
            path="/reviews"
            element={
              <Reviews
                selectedBook={selectedBook}
                setAllBooks={setAllBooks}
                setSelectedBook={setSelectedBook}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/author"
            element={<Author selectedAuthor={selectedAuthor} />}
          />
          <Route
            path="/login"
            element={<LogIn setCurrentUser={setCurrentUser} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
