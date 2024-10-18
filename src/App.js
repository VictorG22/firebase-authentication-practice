import React from "react";
import "./App.css";
import { auth } from "./firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.messagr);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <nav>
            <div className="icon">|||</div>
            <div className="separation">
              <div className="logo">
                <span className="bold">Frontend</span> Simplified
              </div>
              {loading ? (
                <ul>
                  <li>
                    <button className="skeleton__btn"></button>
                  </li>
                  <li className="skeleton__btn">
                    <button className="skeleton__btn"></button>
                  </li>
                  <li className="skeleton__btn">
                    <button className="skeleton__btn"></button>
                  </li>
                </ul>
              ) : user.email ? (
                <div>
                  <button className="btn user__photo" onClick={logout}>
                    {user.email[0].toUpperCase()}
                  </button>
                </div>
              ) : (
                <ul>
                  <li className="btn">
                    <button onClick={login}>Login</button>
                  </li>
                  <li className="btn">
                    <button onClick={logout}>Logout</button>
                  </li>
                  <li className="btn">
                    <button className="purple__btn" onClick={register}>
                      Register
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default App;
