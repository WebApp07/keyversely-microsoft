// app/components/Footer.tsx
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
  const LEGAL_NAME = "KEYVERSELY LLC"; // Your legal business name
  const DOMAIN_NAME = "ActualKeys.com"; // Your chosen domain (or leave blank if same as legal name)

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

      {/* Optional: Payment/Security Badges */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <span>🔒 Secure Payment</span>
            <span>•</span>
            <span>📧 Instant Delivery</span>
            <span>•</span>
            <span>✅ Genuine Licenses</span>
            <span>•</span>
            <span>🛡️ SSL Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
