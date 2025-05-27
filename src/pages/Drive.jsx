import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import "./Drive.css";

const Drive = () => {
    const navigate = useNavigate();
  return (
    <motion.div
      className="drive-container"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5 }}
    >
      <header className="drive-header">
        <h2>Drive with Uber</h2>
        <p>Earn on your schedule. Drive when you want.</p>
      </header>

      <section className="drive-benefits">
        <h3>Why Drive with Uber?</h3>
        <div className="benefit-cards">
          <div className="benefit-card">
            <img
              src="https://img.icons8.com/ios-filled/64/000000/wallet--v1.png"
              alt="Earn Money"
            />
            <h4>Flexible Earnings</h4>
            <p>Choose your hours and make money on your terms.</p>
          </div>
          <div className="benefit-card">
            <img
              src="https://img.icons8.com/ios-filled/64/000000/car.png"
              alt="Drive Your Car"
            />
            <h4>Use Your Own Car</h4>
            <p>Drive your vehicle, no need for a company car.</p>
          </div>
          <div className="benefit-card">
            <img
              src="https://img.icons8.com/ios-filled/64/000000/support.png"
              alt="Support"
            />
            <h4>24/7 Support</h4>
            <p>We're here whenever you need help or guidance.</p>
          </div>
        </div>
      </section>

      <div className="drive-container">
      {/* ... info and benefits here ... */}
      <section className="drive-cta">
        <h3>Ready to start driving?</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/signup")}
        >
          Sign Up to Drive
        </button>
      </section>
    </div>
    </motion.div>
  );
};

export default Drive;
