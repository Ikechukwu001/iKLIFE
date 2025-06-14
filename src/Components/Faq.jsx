import { useState } from "react";

const faqs = [
  {
    question: "What is iKLIFE Pharmacy?",
    answer:
      "iKLIFE Pharmacy is a healthcare platform that provides access to essential medications, health products, and professional healthcare services.",
  },
  {
    question: "Do you offer prescription medications?",
    answer:
      "Yes, we offer a wide range of prescription medications. You can upload your prescription on our website or bring it to our pharmacy.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer delivery services for all orders placed through our platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl text-black font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-md transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
