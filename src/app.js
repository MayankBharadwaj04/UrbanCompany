// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAsProfessional from "./pages/RegisterAsProfessional";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import ServicesListPage from "./pages/ServiceListPage";

const App = () => {
  const { isLoggedIn } = React.useContext(AuthContext);

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/register-as-professional"
          element={<RegisterAsProfessional />}
        />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
            {/* Add the new route for the ServicesListPage */}
            <Route path="/services/:service" element={<ServicesListPage />} />
          </>
        ) : (
          // If not logged in, redirect to login page
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
