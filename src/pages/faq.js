import React, { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = [
    {
      question: "How can I place an order?",
      answer:
        "To place an order, simply browse our collection of artworks and click on the item you wish to purchase. Then, click the 'Add to Cart' button and follow the checkout process to complete your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard) for secure and convenient payments.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "No, currently we do not offer international shipping to many countries. Please check our shipping page for a list of available destinations.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Delivery times may vary depending on your location and the selected shipping method. Typically, orders are processed and shipped within 1-3 business days.",
    },
    {
      question: "What is your return and exchange policy?",
      answer:
        "We have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within 30 days for a refund or exchange. Please review our Returns & Exchanges page for detailed instructions.",
    },
    {
      question: "Can I cancel my order after it has been placed?",
      answer:
        "If your order has not been shipped yet, you may request a cancellation. Contact our customer support team as soon as possible to assist you with the cancellation process.",
    },
    {
      question: "Do you offer gift wrapping services?",
      answer:
        "Yes, we offer gift wrapping services for an additional fee. During the checkout process, you can select the gift wrapping option and add a personalized message.",
    },
    {
      question: "Are the artworks original and authentic?",
      answer:
        "Yes, all our artworks are original pieces created by talented artists.",
    },
    {
      question: "Can I request a custom artwork or commission an artist?",
      answer:
        "Absolutely! We welcome custom artwork requests and commissions. Please contact our customer support team to discuss your specific requirements.",
    },
    {
      question: "Do you offer framing options for the artworks?",
      answer:
        "Currently, we do not offer framing services. However, many of our artworks come unframed, allowing you to choose a frame that complements your style.",
    },
    {
      question: "What if the artwork I receive is damaged during shipping?",
      answer:
        "In the rare event that your artwork arrives damaged, please take photos of the packaging and artwork, and contact our customer support team immediately. We will arrange a replacement or refund for you.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery.",
    },
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes, we often run special promotions and discounts. Sign up for our newsletter to stay informed about our latest offers.",
    },
    {
      question: "What is your customer support contact information?",
      answer:
        "You can reach our customer support team via email at swethakeerthipati@gmail.com or through our contact form on the website.",
    },
    {
      question: "Can I sell my artwork on your platform?",
      answer:
        "We are always interested in collaborating with talented artists. If you are an artist interested in selling your artwork on our platform, please reach out to us with your portfolio and details.",
    },
    {
      question: "Can I sign up for updates on new artworks and promotions?",
      answer:
        "Absolutely! You can subscribe to our newsletter to receive updates on new artworks, exclusive promotions, and upcoming events.",
    },
  ];

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  const filteredData = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-400 rounded-md px-4 py-2 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredData.map((item, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => handleQuestionClick(index)}
            className="w-full flex justify-between items-center bg-gray-100 p-4 rounded-md"
          >
            <h4 className="text-xl font-bold">{item.question}</h4>
            <span className="text-gray-500">
              {expandedQuestion === index ? "-" : "+"}
            </span>
          </button>
          {expandedQuestion === index && (
            <p className="text-gray-600 px-4 py-2 mt-2 bg-gray-100 rounded-md">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
