import React from "react";
import "./RidePage.css";

const RidePage = () => {
  return (
    <div className="ride-page">
      <header className="ride-header">
        <h1 className="logo">Uber</h1>
        <nav className="ride-nav">
          <a href="/">Home</a>
          <a href="#safety">Safety</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h2>Get a ride in minutes</h2>
          <p>Choose your ride and get going wherever life takes you.</p>
          <button className="ride-now-btn">Ride Now</button>
        </div>
        <div className="hero-image">
          <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_800,h_500/v1595958989/assets/39/e3de3a-60bd-4a34-a2e4-f155647a3f18/original/illo-rider-1.png" alt="Uber Ride" />
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <h3>Fast & Reliable</h3>
          <p>Get a ride within minutes, anytime, anywhere.</p>
        </div>
        <div className="feature">
          <h3>Safe Rides</h3>
          <p>All rides come with real-time tracking and driver verification.</p>
        </div>
        <div className="feature">
          <h3>Affordable</h3>
          <p>Choose from a range of vehicles that suit your budget.</p>
        </div>
      </section>

      <footer className="ride-footer">
        © {new Date().getFullYear()} Uber Technologies Inc. | All rights reserved
      </footer>
    </div>
  );
};

export default RidePage;
