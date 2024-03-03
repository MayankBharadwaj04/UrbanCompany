import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../assets/login.css";
import Footer from "../components/Footer";

const Login = () => {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    } else {
      setError("Please provide both email and password.");
    }
  };

  // Redirect to home page if already logged in
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-page">
      <h1>Urban Company</h1>
      <h4>Home services, On demand.</h4>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Register here
          </Link>
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
