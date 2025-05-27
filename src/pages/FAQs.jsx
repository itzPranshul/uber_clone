import React, { useState } from "react";
import "./FAQs.css";

const faqData = [
  {
    question: "How do I book a ride?",
    answer:
      "Open the Uber app, enter your destination, select your ride type, and confirm your pickup location to book a ride.",
  },
  {
    question: "What is surge pricing?",
    answer:
      "Surge pricing happens during periods of high demand, where prices temporarily increase to encourage more drivers to get on the road.",
  },
  {
    question: "How do I pay for my ride?",
    answer:
      "You can pay using the payment method linked to your Uber account, such as credit/debit cards, PayPal, or Uber Cash.",
  },
  {
    question: "What should I do if I lose something in the car?",
    answer:
      "You can report lost items through the Uber app by selecting the ride and using the 'I lost an item' option to contact the driver.",
  },
  {
    question: "Is Uber safe?",
    answer:
      "Uber performs background checks on drivers, has in-app safety features, and 24/7 support to ensure rider and driver safety.",
  },
  {
    question: "Can I schedule a ride in advance?",
    answer:
      "Yes, you can schedule rides ahead of time through the Uber app to ensure a driver is available when you need one.",
  },
  {
    question: "How do I become an Uber driver?",
    answer:
      "You can sign up on the Uber website or app by providing necessary documents and completing a background check.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{item.question}</div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
