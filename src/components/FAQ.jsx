import React, { useState } from "react";

const FAQ = () => {
  const faqsCustomer = [
    {
      question: "How much does it cost to use the platform?",
      answer: "Posting an event is completely free for customers!",
    },
    {
      question: "How do I know I’m getting the best deal?",
      answer:
        "Compare bids based on price, reviews, and services offered to make the right choice.",
    },
  ];

  const faqsForResturent = [
    {
      question: "What’s the cost for restaurants?",
      answer: "Restaurants pay a small fee only when their bid is accepted.",
    },
    {
      question: "Can I customize my bids?",
      answer:
        "Yes! Highlight your unique services, special menus, and pricing options.",
    },
  ];

  // Separate active indexes for customers and restaurants
  const [activeIndexCustomer, setActiveIndexCustomer] = useState(null);
  const [activeIndexRestaurant, setActiveIndexRestaurant] = useState(null);

  const toggleCustomerFAQ = (index) => {
    setActiveIndexCustomer(activeIndexCustomer === index ? null : index);
  };

  const toggleRestaurantFAQ = (index) => {
    setActiveIndexRestaurant(activeIndexRestaurant === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mb-10">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
        FAQ
      </h2>

      {/* FAQs for Customers */}
      <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
        For Customers:
      </h3>
      {faqsCustomer.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 flex justify-between items-start"
        >
          <div className="flex-1">
            <button
              onClick={() => toggleCustomerFAQ(index)}
              className="text-left w-full text-lg font-semibold text-gray-800"
            >
              {faq.question}
            </button>
            {activeIndexCustomer === index && (
              <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
            )}
          </div>
          <button
            onClick={() => toggleCustomerFAQ(index)}
            className="text-purple-700 font-extrabold text-[24px] hover:text-purple-700"
          >
            {activeIndexCustomer === index ? "−" : "+"}
          </button>
        </div>
      ))}

      {/* FAQs for Restaurants */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
          For Restaurants:
        </h3>
        {faqsForResturent.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 flex justify-between items-start"
          >
            <div className="flex-1">
              <button
                onClick={() => toggleRestaurantFAQ(index)}
                className="text-left w-full text-lg font-semibold text-gray-800"
              >
                {faq.question}
              </button>
              {activeIndexRestaurant === index && (
                <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
              )}
            </div>
            <button
              onClick={() => toggleRestaurantFAQ(index)}
              className="text-purple-700 font-extrabold text-[24px] hover:text-purple-700"
            >
              {activeIndexRestaurant === index ? "−" : "+"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
