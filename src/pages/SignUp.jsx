import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (API call etc.)
    console.log("Driver Signup Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      className="signup-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Sign Up to Drive with Uber</h2>

      {!submitted ? (
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit phone number"
          />
          <input
            type="text"
            name="carModel"
            placeholder="Car Model"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <p className="thank-you-message">
          Thank you for signing up! We'll be in touch soon.
        </p>
      )}
    </motion.div>
  );
};

export default SignUp;
