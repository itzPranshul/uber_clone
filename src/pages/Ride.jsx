import React, { useState } from "react";
import "./Ride.css";

const Ride = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("Economy");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickup || !destination) {
      alert("Please fill in both pickup and destination.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="ride-container">
      <h2>Book a Ride</h2>
      {!submitted ? (
        <form className="ride-form" onSubmit={handleSubmit}>
          <label>
            Pickup Location:
            <input
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
            />
          </label>

          <label>
            Destination:
            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </label>

          <label>
            Vehicle Type:
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              <option value="Economy">Economy</option>
              <option value="Premium">Premium</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </label>

          <button type="submit">Find Drivers</button>
        </form>
      ) : (
        <div className="ride-confirmation">
          <h3>Searching for drivers...</h3>
          <p>
            Pickup: <strong>{pickup}</strong>
          </p>
          <p>
            Destination: <strong>{destination}</strong>
          </p>
          <p>
            Vehicle Type: <strong>{vehicle}</strong>
          </p>
          <button onClick={() => setSubmitted(false)}>Book Another Ride</button>
        </div>
      )}
    </div>
  );
};

export default Ride;
