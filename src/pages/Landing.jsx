import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Landing.css";

const Landing = () => {
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="landing-nav">
        <h1 className="logo">Uber</h1>
        <div className="nav-links">
          <Link to="/ride" className="nav-link">Ride</Link>
          <Link to="/drive" className="nav-link">Drive</Link>
          <Link to="/faqs" className="nav-link">FAQs</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <h2>Get there. Your day belongs to you.</h2>
          <p>Reliable rides, anytime, anywhere.</p>
          <div className="hero-buttons">
            <Link to="/ride" className="btn btn-primary">Book a Ride</Link>
            <Link to="/drive" className="btn btn-secondary">Drive with Uber</Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Car illustration"
          />
        </div>
      </section>

      <section className="features-section">
        <h3>Why choose Uber?</h3>
        <div className="features-cards">
          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/64/000000/time-machine.png" alt="Fast" />
            <h4>Fast & Reliable</h4>
            <p>Get a ride in minutes whenever you need it.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/64/000000/wallet--v1.png" alt="Affordable" />
            <h4>Affordable Prices</h4>
            <p>Transparent pricing with no hidden fees.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/64/000000/phone.png" alt="Support" />
            <h4>24/7 Support</h4>
            <p>Help is just a tap away with in-app support.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Uber. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Landing;
