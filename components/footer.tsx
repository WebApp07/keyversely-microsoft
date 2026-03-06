// app/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/help-center", label: "Help Center" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact", label: "Contact Us" },
  { href: "/payment-methods", label: "Payment Methods" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/return-policy", label: "Return Policy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const LEGAL_NAME = "KEYVERSELY LLC";
  const DOMAIN_NAME = "ActualKeys.com";

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Microsoft Partner Badge */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Verified Partner
          </p>
          <a
            href="https://marketplace.microsoft.com/en-us/partners/f2266aa5-5704-4384-ad55-100cf2c530cb/overview"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Keyversely LLC Microsoft Partner Network Profile"
            className="group flex flex-col items-center gap-2 no-underline"
          >
            {/* CSS Badge — no image file needed */}
            <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-5 py-3 bg-white dark:bg-gray-800 shadow-sm group-hover:border-blue-500 transition">
              {/* Microsoft 4-color squares logo */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="0" width="10" height="10" fill="#F25022" />
                <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
                <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
                <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-gray-800 dark:text-gray-100 tracking-wide">
                  Microsoft Partner
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Partner ID: f2266aa5
                </span>
              </div>
            </div>
            <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:underline">
              View Official Partner Profile →
            </span>
          </a>
        </div>
      </div>

      {/* Legal Information Section - CRITICAL FOR GMC */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-3 text-center">
            {/* Copyright and Legal Name */}
            <p className="text-sm text-gray-700 dark:text-gray-300">
              © {currentYear} <strong>{LEGAL_NAME}</strong>. All Rights
              Reserved.
            </p>

            {/* Domain Operation (if different from legal name) */}
            {DOMAIN_NAME && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Operating at {DOMAIN_NAME}
              </p>
            )}

            {/* Business Address - REQUIRED FOR GMC */}
            <p className="text-xs text-gray-600 dark:text-gray-400">
              63 N Burritt Ave Rm 100 PMB 1180, Buffalo, Wyoming 82834, United
              States
            </p>

            {/* EIN - Adds Credibility */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
              EIN: 61-2315882
            </p>

            {/* Contact Email */}
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Email:{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                support@keyversely.com
              </a>
            </p>

            {/* Business Hours */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Support Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
            </p>

            {/* Microsoft Disclaimer */}
            <p className="text-xs text-gray-500 dark:text-gray-500 max-w-3xl mt-4">
              Microsoft, Windows, Office, and other Microsoft product names are
              trademarks or registered trademarks of Microsoft Corporation.{" "}
              {LEGAL_NAME} is an independent reseller and is not affiliated
              with, endorsed by, or sponsored by Microsoft Corporation.
            </p>
          </div>
        </div>
      </div>

      {/* Payment/Security Badges */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <span>🔒 Secure Payment</span>
            <span>•</span>
            <span>📧 Instant Delivery</span>
            <span>•</span>
            <span>✅ Digital License Keys</span>
            <span>•</span>
            <span>🛡️ SSL Encrypted</span>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Keyversely LLC",
            legalName: "KEYVERSELY LLC",
            url: "https://actualkeys.com",
            description:
              "Keyversely LLC is a registered Wyoming LLC and verified Microsoft Partner Network member, specializing in digital software license key distribution with instant delivery worldwide.",
            foundingDate: "2025",
            address: {
              "@type": "PostalAddress",
              streetAddress: "63 N Burritt Ave Rm 100 PMB 1180",
              addressLocality: "Buffalo",
              addressRegion: "WY",
              postalCode: "82834",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "support@keyversely.com",
              url: "https://actualkeys.com/contact",
              availableLanguage: "English",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            },
            sameAs: [
              "https://marketplace.microsoft.com/en-us/partners/f2266aa5-5704-4384-ad55-100cf2c530cb/overview",
            ],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
