/*import React from "react";
import ReactDOM from "react-dom";
import { BookingProvider } from "./context/BookingContext";
import { ToastContainer } from "react-toastify";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <BookingProvider>
      <App />
      <ToastContainer />
    </BookingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./app";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BookingProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </BookingProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
