import React from "react";
//import "../assets/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Urban Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
