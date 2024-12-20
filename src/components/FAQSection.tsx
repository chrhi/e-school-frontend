"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  category?: string;
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  category,
}: FAQItemProps) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-6 text-left flex items-center justify-between gap-4 hover:text-orange-500 transition-colors"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="font-medium text-lg">{question}</span>
      {isOpen ? (
        <ChevronUp className="flex-shrink-0 text-orange-500" />
      ) : (
        <ChevronDown className="flex-shrink-0" />
      )}
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-gray-600 leading-relaxed">{answer}</p>
      {category && (
        <span className="inline-block mt-4 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
          {category}
        </span>
      )}
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      category: "Getting Started",
      question: "How do I get started with the courses?",
      answer:
        "Getting started is easy! Simply create an account, browse our course catalog, and enroll in any course that interests you. Once enrolled, you'll have immediate access to all course materials, including video lectures, assignments, and community discussions.",
    },
    {
      category: "Payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For corporate training, we also offer invoice-based payments and custom payment plans.",
    },
    {
      category: "Certificates",
      question: "Are the certificates recognized by employers?",
      answer:
        "Yes! Our certificates are industry-recognized and valued by employers worldwide. They validate your skills and knowledge in specific areas, and can be shared directly on LinkedIn or added to your resume.",
    },
    {
      category: "Course Access",
      question: "How long do I have access to a course after purchasing?",
      answer:
        "Once you purchase a course, you have lifetime access to all its content. This includes any future updates to the course material, ensuring you always have access to the most current information.",
    },
    {
      category: "Support",
      question: "What kind of support is available if I need help?",
      answer:
        "We offer comprehensive support through multiple channels: 24/7 email support, live chat during business hours, community forums, and direct messaging with instructors. Our support team typically responds within 24 hours.",
    },
    {
      category: "Refunds",
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, you can request a full refund within 30 days of enrollment, no questions asked.",
    },
  ];

  return (
    <section className="py-16 px-4 mb-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our platform, courses, and
            learning experience.
          </p>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              category={faq.category}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
