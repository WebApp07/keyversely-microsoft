"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40" aria-label="Site footer">
      <div className="container mx-auto px-6 py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Column 1 — Company Info & Registration */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Keyversely LLC</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Keyversely LLC is a registered US-based digital software reseller
              and verified member of the Microsoft Partner Network. We provide
              digital license keys with instant ESD delivery worldwide.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li><span className="font-semibold text-foreground">Entity ID:</span> 2025-001824045</li>
              <li><span className="font-semibold text-foreground">Entity Type:</span> LLC</li>
              <li><span className="font-semibold text-foreground">State:</span> Wyoming — Active / Good Standing</li>
              <li><span className="font-semibold text-foreground">Formed:</span> November 24, 2025</li>
            </ul>
          </div>

          {/* Column 2 — Microsoft Partner Badge */}
          <div className="flex flex-col items-center justify-start gap-4 pt-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Verified Partner
            </p>
            <a
              href="https://marketplace.microsoft.com/en-us/partners/f2266aa5-5704-4384-ad55-100cf2c530cb/overview"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Keyversely LLC Microsoft Partner Network Profile"
              className="flex flex-col items-center gap-2 group border border-border rounded-xl p-4 hover:border-blue-400 transition"
            >
              <Image
                src="/images/partners/microsoft-partner.png"
                alt="Microsoft Partner Network – Keyversely LLC Reseller CSP"
                width={140}
                height={48}
                className="transition group-hover:scale-105"
              />
              <span className="text-xs font-semibold text-blue-600 group-hover:underline">
                Partner ID: f2266aa5
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition">
                View Official Partner Profile →
              </span>
            </a>

            {/* Payment Methods */}
            <div className="mt-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Secure Payments
              </p>
              <div className="flex gap-2 items-center justify-center flex-wrap">
                <span className="text-xs bg-muted border border-border rounded px-2 py-1 font-medium">Stripe</span>
                <span className="text-xs bg-muted border border-border rounded px-2 py-1 font-medium">PayPal</span>
                <span className="text-xs bg-muted border border-border rounded px-2 py-1 font-medium">Visa</span>
                <span className="text-xs bg-muted border border-border rounded px-2 py-1 font-medium">Mastercard</span>
              </div>
            </div>
          </div>

          {/* Column 3 — Policy Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Policies</h3>
            <nav aria-label="Footer policy links">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy-policy" title="Keyversely Privacy Policy" className="hover:text-foreground transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" title="Terms and Conditions" className="hover:text-foreground transition">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" title="Refund Policy" className="hover:text-foreground transition">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/return-policy" title="Return Policy" className="hover:text-foreground transition">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/delivery-return" title="Delivery Information" className="hover:text-foreground transition">
                    Delivery Information
                  </Link>
                </li>
                <li>
                  <Link href="/warranty-policy" title="Warranty Policy" className="hover:text-foreground transition">
                    Warranty Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies-policy" title="Cookies Policy" className="hover:text-foreground transition">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground block mb-0.5">Email</span>
                <a href="mailto:support@keyversely.com" className="hover:text-foreground transition">
                  support@keyversely.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground block mb-0.5">Phone</span>
                <a href="tel:+13077856160" className="hover:text-foreground transition">
                  +1 (307) 785-6160
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground block mb-0.5">WhatsApp</span>
                <a
                  href="https://wa.me/13077856160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  +1 (307) 785-6160
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground block mb-0.5">Address</span>
                63 N Burritt Ave, Rm 100 PMB 1180<br />
                Buffalo, Wyoming 82834<br />
                United States
              </li>
            </ul>

            {/* Trust Signals */}
            <div className="mt-5">
              <h3 className="font-semibold text-sm mb-2">Trust &amp; Security</h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>✔ Registered Wyoming LLC</li>
                <li>✔ Microsoft Partner Network Member</li>
                <li>✔ Encrypted Payment Processing</li>
                <li>✔ Instant ESD Digital Delivery</li>
                <li>✔ 24/7 Customer Support</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {currentYear} Keyversely LLC. All rights reserved.</p>
          <p className="text-xs text-center">
            Digital software license keys — secure payment, instant ESD delivery worldwide.
          </p>
          <nav aria-label="Footer company links" className="flex gap-4 text-xs">
            <Link href="/about" className="hover:text-foreground transition">About Us</Link>
            <Link href="/contact" className="hover:text-foreground transition">Contact</Link>
            <Link href="/faqs" className="hover:text-foreground transition">FAQs</Link>
          </nav>
        </div>

      </div>

      {/* JSON-LD Structured Data — GMC Compliant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Keyversely LLC",
            url: "https://keyversely.com",
            logo: "https://keyversely.com/wp-content/uploads/2026/02/logo-1111.png",
            description:
              "Keyversely LLC is a registered Wyoming LLC and verified Microsoft Partner Network member. We specialize in digital software license key distribution with instant ESD delivery worldwide.",
            legalName: "Keyversely LLC",
            foundingDate: "2025",
            address: {
              "@type": "PostalAddress",
              streetAddress: "63 N Burritt Ave, Rm 100 PMB 1180",
              addressLocality: "Buffalo",
              addressRegion: "WY",
              postalCode: "82834",
              addressCountry: "US",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-307-785-6160",
                contactType: "customer support",
                email: "support@keyversely.com",
                availableLanguage: "English",
                contactOption: "TollFree",
              },
            ],
            sameAs: [
              "https://facebook.com/keyversely",
              "https://instagram.com/keyversely",
              "https://marketplace.microsoft.com/en-us/partners/f2266aa5-5704-4384-ad55-100cf2c530cb/overview",
            ],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
