"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How will I receive my product?",
    answer:
      "You will receive your product key and download instructions via email. Delivery is typically within 5-30 minutes after payment clears, with a maximum of 24 hours. Check your spam folder if you don't see it right away!",
  },
  {
    question: "How do I install the software?",
    answer:
      "Detailed installation instructions are included in the email with your product key. The email will also include official Microsoft download links. If you need help, contact us at support@keyversely.com (Mon-Fri, 9 AM - 6 PM EST).",
  },
  {
    question: "Is the software compatible with my device?",
    answer:
      "Check the product description for system requirements and compatibility details. Each product page lists which operating systems and hardware are supported. If you're unsure, email us before purchasing to confirm compatibility.",
  },
  {
    question: "What happens if I lose my product key?",
    answer:
      "No problem! Contact us at support@keyversely.com with your order number or the email address you used for purchase. We'll resend your license key within 1-2 business days.",
  },
  {
    question: "Can I return or get a refund?",
    answer:
      "We offer refunds within 7 days of purchase for defective products, wrong products sent by us, or non-delivery. Once a license is activated, refunds are generally not available. See our Refund Policy and Return Policy pages for complete details.",
  },
  {
    question: "Can I send the software as a gift?",
    answer:
      "Yes! Purchase using your email address, then forward the license key and instructions to the recipient. The product key will work for whoever activates it first. For business gifting or bulk orders, contact us for assistance.",
  },
  {
    question: "Can I get help with activation issues?",
    answer:
      "Yes, we can help with license-related activation issues. Contact us at support@keyversely.com (Mon-Fri, 9 AM - 6 PM EST). For software bugs or technical problems with Microsoft products, you'll need to contact Microsoft Support directly.",
  },
  {
    question: "Can I install on multiple devices?",
    answer:
      "It depends on the license type. OEM licenses work on one device only. Retail licenses can sometimes be transferred between devices. Volume licenses have their own rules. Always check the product description or contact us before purchasing.",
  },
  {
    question: "Do you offer bulk pricing or business orders?",
    answer:
      "Yes! For orders of 10+ licenses, contact us at support@keyversely.com with your requirements. We can provide volume pricing and formal invoices for business purchases.",
  },
  {
    question: "Are your licenses genuine?",
    answer:
      "Yes, 100%. Every license we sell is an authentic Microsoft license sourced through authorized channels. We never sell pirated, cracked, or counterfeit software. All product keys are valid and eligible for Microsoft activation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All payments are processed securely through encrypted payment processors. We do not accept cryptocurrency or wire transfers.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Since we deliver digitally via email, we can serve customers worldwide instantly. There are no shipping fees and no geographic restrictions on delivery. However, make sure the Microsoft product you're buying is compatible with your region.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">
        Frequently Asked Questions (FAQs)
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Quick answers to common questions about ordering and using our digital
        products
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left flex justify-between items-center p-4 font-medium transition-colors ${
                openIndex === index
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200"
              } focus:outline-none`}
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 dark:text-gray-300 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Help Section */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Still Have Questions?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Check our detailed{" "}
          <a
            href="/help-center"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Help Center
          </a>{" "}
          or contact us at{" "}
          <a
            href="mailto:support@keyversely.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@keyversely.com
          </a>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Support Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
        </p>
      </div>
    </section>
  );
}
