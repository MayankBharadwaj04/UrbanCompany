import React from "react";
import "../assets/about.css";
import customerImage1 from "../assets/images/customer1.jpg";
import customerImage2 from "../assets/images/customer2.jpeg";
import customerImage3 from "../assets/images/customer3.jpg";

const About = () => {
  return (
    <div className="about-page">
      <h2>About Urban Company</h2>
      <p>
        Urban Company is a technology platform that connects customers to
        service professionals for various household services. Founded in 2014 as
        UrbanClap, the company offers services such as home cleaning, plumbing,
        electrical repairs, beauty services, and more.
      </p>
      <p>
        With a network of trained and verified professionals, Urban Company aims
        to provide reliable and convenient services to customers across cities
        in India and other countries.
      </p>

      <h3>Contact Information:</h3>
      <p>
        For any inquiries or assistance, you can contact us using the following
        details:
      </p>

      <p>
        <strong>Email:</strong> urbancustomercare@example.com
      </p>
      <p>
        <strong>Phone:</strong> +91 235-071-111-1
      </p>

      <h3>Customer Reviews</h3>
      <div className="reviews-container">
        <div className="review">
          <img src={customerImage1} alt="Customer 1" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            justo eget purus convallis malesuada. Integer sit amet tincidunt
            sapien."
          </p>
          <p>- Customer 1</p>
        </div>
        <div className="review">
          <img src={customerImage2} alt="Customer 2" />
          <p>
            "Aliquam vitae magna a sem vestibulum auctor. Curabitur id sapien
            risus."
          </p>
          <p>- Customer 2</p>
        </div>
        <div className="review">
          <img src={customerImage3} alt="Customer 3" />
          <p>
            "Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas."
          </p>
          <p>- Customer 3</p>
        </div>
      </div>
    </div>
  );
};

export default About;
