import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us - KEYVERSELY LLC | Authorized Microsoft Reseller",
  description:
    "Learn about KEYVERSELY LLC, your trusted source for genuine Microsoft digital products and software licenses. Authorized reseller based in Wyoming, USA.",
  keywords:
    "Microsoft reseller, software licenses, digital products, KEYVERSELY",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About KEYVERSELY LLC
          </h1>
          <p className="text-xl text-blue-100">
            Your Trusted Microsoft Digital Products Partner
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-6xl py-12">
        {/* Who We Are */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            KEYVERSELY LLC is a Wyoming-based digital products reseller
            specializing in genuine Microsoft software licenses and digital
            products. Founded in 2025, we are committed to providing our
            customers with authentic, licensed software solutions at competitive
            prices.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            As an authorized Microsoft reseller, we ensure that every product we
            deliver is 100% genuine and compliant with Microsoft's licensing
            terms. Our mission is to make quality software accessible to
            businesses and individuals while maintaining the highest standards
            of authenticity and customer service.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Genuine Microsoft Products
              </h3>
              <p className="text-gray-700">
                All our software licenses are authentic and sourced through
                authorized channels. We provide legitimate product keys with
                full Microsoft support eligibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Instant Digital Delivery
              </h3>
              <p className="text-gray-700">
                Receive your software licenses instantly via email after
                purchase. No waiting, no physical shipping - just immediate
                access to your products.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-700">
                As a direct reseller, we offer competitive prices on Microsoft
                software without compromising on authenticity or quality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Customer Support
              </h3>
              <p className="text-gray-700">
                Our dedicated support team is here to assist you with any
                questions about your purchase, installation, or activation.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Commitment
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  100% Authentic Products
                </h3>
                <p className="text-gray-700">
                  Every product we sell is genuine and comes with valid
                  licensing from Microsoft. We never sell counterfeit, pirated,
                  or unauthorized software.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-700">
                  We clearly disclose the type of license (OEM, retail, volume,
                  etc.) and any applicable restrictions or terms before you
                  purchase.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-700">
                  Your satisfaction is our priority. We provide clear policies,
                  responsive support, and reliable service to ensure a positive
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Company Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Business Details
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Legal Name:</strong> KEYVERSELY LLC
                </p>
                <p>
                  <strong>Formation Date:</strong> November 24, 2025
                </p>
                <p>
                  <strong>Entity Type:</strong> Limited Liability Company (LLC)
                </p>
                <p>
                  <strong>Formation State:</strong> Wyoming, USA
                </p>
                <p>
                  <strong>Status:</strong> Active/Good Standing
                </p>
                <p>
                  <strong>EIN:</strong> 61-2315882
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Address:</strong>
                  <br />
                  63 N Burritt Ave Rm 100 PMB 1180
                  <br />
                  Buffalo, Wyoming 82834
                  <br />
                  United States
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:support@keyversely.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@keyversely.com
                  </a>
                </p>
                <p>
                  <strong>Business Hours:</strong>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Classification */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Industry Classification
          </h2>
          <div className="text-gray-700">
            <p className="mb-2">
              <strong>NAICS Code:</strong> 454110 - Electronic Shopping and
              Mail-Order Houses
            </p>
            <p>
              <strong>Industry:</strong> Retail Trade - Digital Products
            </p>
          </div>
        </div>

        {/* Trust & Security */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Trust & Security
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At KEYVERSELY LLC, we understand the importance of trust when
            purchasing digital products online. That's why we:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Maintain full transparency about our business registration and
                contact information
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Provide clear and honest product descriptions with all
                applicable terms
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Offer responsive customer support to address any concerns or
                questions
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Follow all applicable laws and regulations for digital product
                sales
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Protect your personal information with industry-standard
                security measures
              </span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Our Products or Services?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Our team is here to help you find the right Microsoft software
            solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/search"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white"
            >
              Browse Products
            </a>
          </div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 max-w-6xl text-center text-gray-600 text-sm">
          <p className="mb-2">
            Microsoft, Windows, Office, and other Microsoft product names are
            trademarks or registered trademarks of Microsoft Corporation.
          </p>
          <p>
            KEYVERSELY LLC is an independent reseller and is not affiliated
            with, endorsed by, or sponsored by Microsoft Corporation.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
