import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import { toast } from "react-toastify";
import "../assets/booking.css";

const BookingPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedService = searchParams.get("service");

  const { addBooking } = useContext(BookingContext);

  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement the logic to handle the form submission with the selected service
    // For example, you can send the booking details to a backend server for processing.

    // Assuming the form data is valid, create a new booking object
    const newBooking = {
      service: selectedService,
      date: date,
      time: time,
      name: name,
      email: email,
      phone: phone,
      address: address,
    };

    // Add the new booking to the BookingProvider
    addBooking(newBooking);

    // Show toast message to indicate successful booking
    toast.success("Booking successful!");
    // Reset form fields to initial values
    setDate("");
    setTime("");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="booking-page">
      <h2>Booking Page</h2>
      <p>Selected Service: {selectedService}</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date-input">Select Date:</label>
          <input
            type="date"
            id="date-input"
            className="form-control"
            required
            min={today}
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time-input">Select Time:</label>
          <input
            type="time"
            id="time-input"
            className="form-control"
            required
            min={currentTime}
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            required
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
