"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Apa itu Buku Berea?",
    answer:
      "Buku Berea adalah bahan pembelajaran Alkitab yang digunakan untuk pertumbuhan iman jemaat.",
  },
  {
    question: "Apakah buku dapat dibaca secara online?",
    answer:
      "Ya, seluruh buku dapat dibaca langsung melalui website.",
  },
  {
    question: "Apakah website ini gratis?",
    answer:
      "Ya, seluruh konten dapat diakses secara gratis.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <span>{active === index ? "-" : "+"}</span>
          </button>

          {active === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}