import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/Servicecard";
import "../assets/styles.css";

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: "Electrician",
      description: "Professional electricians for all your electrical needs.",
      image: "/images/electrician.jpg",
    },
    {
      id: 2,
      title: "Plumber",
      description: "Expert plumbers to fix your plumbing issues.",
      image: "/images/plumber.webp",
    },
    {
      id: 3,
      title: "Mechanic",
      description: "Skilled mechanics for all your vehicle repairs.",
      image: "/images/mechanic.jpg",
    },
    {
      id: 4,
      title: "Home_Cleaner",
      description: "Reliable home cleaners to keep your space tidy.",
      image: "images/homeCleaning.webp",
    },
    {
      id: 5,
      title: "Salon_Services",
      description: "Professional salon services for your beauty needs.",
      image: "images/salon.webp",
    },
    {
      id: 6,
      title: "Appliance_Repair",
      description: "Quick and efficient appliance repair services.",
      image: "images/applianceRepair.jpeg",
    },
    {
      id: 7,
      title: "Bathroom_Cleaner",
      description: "Thorough bathroom cleaning for a sparkling space.",
      image: "/images/bathroomCleaner.webp",
    },
    {
      id: 8,
      title: "Painter",
      description: "Skilled painters for all your painting projects.",
      image: "images/painter.jpeg",
    },
    {
      id: 9,
      title: "Gardening_Services",
      description:
        "Professional gardening services to beautify your outdoor space.",
      image: "images/gardening.jpeg",
    },
    {
      id: 10,
      title: "Pest_Control",
      description:
        "Effective pest control solutions for a pest-free environment.",
      image: "images/pestControl.webp",
    },
    {
      id: 11,
      title: "Carpet_Cleaning",
      description: "Thorough carpet cleaning to remove dirt and stains.",
      image: "images/carpetCleaning.webp",
    },
    {
      id: 12,
      title: "Catering_Services",
      description: "Delicious catering services for your special events.",
      image: "images/cateringServices.jpeg",
    },
    {
      id: 13,
      title: "Fitness_Trainer",
      description:
        "Experienced fitness trainers to help you achieve your fitness goals.",
      image: "images/fitness.jpeg",
    },
    {
      id: 14,
      title: "Event_Planning",
      description:
        "Professional event planning services for memorable occasions.",
      image: "images/eventPlanning.jpeg",
    },
    {
      id: 15,
      title: "Interior_Design",
      description: "Creative interior design services to transform your space.",
      image: "images/interiorDesign.jpeg",
    },
  ];
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Urban Company</h1>
        <p>Professional services at your fingertips</p>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.title.toLowerCase()}`}
            >
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
