import React, { useContext } from "react";
import "../assets/profile.css";
import { BookingContext } from "../context/BookingContext";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { bookings } = useContext(BookingContext);
  const { userEmail } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <h2 className="profile-page-title">User Profile</h2>
      <p>Name : Rahul Sharma</p>
      <p>email : {userEmail}</p>
      <p>Phone : 123-456-789-1</p>
      <div className="profile-details">
        <h3 class="underline-text">My Bookings</h3>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} className="booking-item">
              <div className="label-value-pair">
                <span className="label">Service:</span>
                <span className="value">{booking.service}</span>
              </div>
              <div className="label-value-pair">
                <span className="label">Date:</span>
                <span className="value">{booking.date}</span>
              </div>
              <div className="label-value-pair">
                <span className="label">Time:</span>
                <span className="value">{booking.time}</span>
              </div>
              <div className="label-value-pair">
                <span className="label">Name:</span>
                <span className="value">{booking.name}</span>
              </div>
              <div className="label-value-pair">
                <span className="label">Address:</span>
                <span className="value">{booking.address}</span>
              </div>
              <div className="label-value-pair">
                <span className="label">Email:</span>
                <span className="value">{booking.email}</span>
              </div>
              <div className="label-value-pair">
                <span className="label">Phone:</span>
                <span className="value">{booking.phone}</span>
              </div>
              <p>
                ---------------------------------------------------------------------------
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
