import React from "react";
import "../assets/serviceCard.css";

const ServiceCard = ({ service }) => {
  const { title, description, image, randomCity } = service;

  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3 className="service-title">{title}</h3>
      <p>{description}</p>
      {/*<p className="service-city">City: {randomCity}</p>*/}
    </div>
  );
};

export default ServiceCard;
