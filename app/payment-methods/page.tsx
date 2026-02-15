import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Methods - KEYVERSELY LLC",
  description:
    "Secure payment options for purchasing Microsoft software licenses from KEYVERSELY. We accept credit cards, debit cards, and PayPal.",
};

export default function PaymentMethodsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Methods
          </h1>
          <p className="text-xl text-blue-100">
            Safe, secure, and convenient ways to pay
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How Payment Works
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We want buying from us to be as easy and secure as possible. Here's
            what you need to know about paying for your digital licenses.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-gray-800">
              <strong>Security First:</strong> All payments are processed
              through secure, encrypted payment processors. We never see or
              store your full credit card details on our servers.
            </p>
          </div>
        </div>

        {/* Accepted Payment Methods */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Accept
          </h2>

          <div className="space-y-6">
            {/* Credit Cards */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Credit Cards
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We accept all major credit cards:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>American Express</li>
                    <li>Discover</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">
                    Your payment is processed instantly and your license is
                    delivered within minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Debit Cards */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Debit Cards
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Debit cards with Visa, Mastercard, or other major networks
                    work just like credit cards.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Make sure you have sufficient funds in your account before
                    checkout.
                  </p>
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    PayPal
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Pay with your PayPal balance, linked bank account, or cards
                    saved in PayPal.
                  </p>
                  <p className="text-gray-600 text-sm">
                    You'll be redirected to PayPal to complete your payment
                    securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Don't Accept */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Don't Accept
          </h2>

          <p className="text-gray-700 mb-4">
            To keep things simple and secure, we currently don't accept:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>
                <strong>Cryptocurrency</strong> - No Bitcoin, Ethereum, or other
                crypto
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>
                <strong>Bank transfers / Wire transfers</strong> - Too slow for
                instant digital delivery
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>
                <strong>Cash or checks</strong> - We're digital-only
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>
                <strong>Gift cards</strong> - Can't verify legitimacy
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>
                <strong>Money orders</strong> - Not compatible with instant
                delivery
              </span>
            </li>
          </ul>

          <p className="text-gray-600 text-sm mt-4">
            If you need an alternative payment method for bulk orders, contact
            us to discuss options.
          </p>
        </div>

        {/* Security & Protection */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Payment Security
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                SSL Encryption
              </h3>
              <p className="text-gray-700">
                All payment information is transmitted using 256-bit SSL
                encryption - the same security banks use. Look for the padlock
                icon in your browser when checking out.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                PCI-DSS Compliant Processors
              </h3>
              <p className="text-gray-700">
                We use PCI-DSS Level 1 certified payment processors (the highest
                security standard). Your card details are processed securely and
                we never store your full card number.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Fraud Prevention
              </h3>
              <p className="text-gray-700">
                We use advanced fraud detection to protect both you and us.
                Occasionally, this might flag a legitimate transaction - if that
                happens, just contact us and we'll sort it out.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Your Card's Protection
              </h3>
              <p className="text-gray-700">
                Most credit cards offer zero-liability protection for
                unauthorized charges. Check with your card issuer for specific
                details about your coverage.
              </p>
            </div>
          </div>
        </div>

        {/* Currency & Pricing */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Currency & Pricing
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                All Prices in USD
              </h3>
              <p className="text-gray-700">
                All our prices are listed in US Dollars (USD). If you're paying
                with a non-USD card, your bank or card issuer will convert the
                amount at their exchange rate.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Foreign Transaction Fees
              </h3>
              <p className="text-gray-700">
                Your bank might charge a foreign transaction fee if you're
                outside the US. This fee comes from your bank, not us. Check
                with your bank if you're unsure about their fees.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Price = Final Price
              </h3>
              <p className="text-gray-700">
                The price you see at checkout is what you pay. We don't add
                hidden fees or surprise charges. (Your bank's fees, if any, are
                separate.)
              </p>
            </div>
          </div>
        </div>

        {/* Payment Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How Payment Works
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Choose Your Product
                </h3>
                <p className="text-gray-700">
                  Browse our catalog and add what you need to your cart.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Proceed to Checkout
                </h3>
                <p className="text-gray-700">
                  Review your order and enter your email address.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Enter Payment Details
                </h3>
                <p className="text-gray-700">
                  Choose your payment method and securely enter your
                  information.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Payment Processing
                </h3>
                <p className="text-gray-700">
                  Your payment is processed instantly through our secure payment
                  processor.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Instant Delivery
                </h3>
                <p className="text-gray-700">
                  Once payment clears, your license key is emailed to you within
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Failed Payments */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            If Your Payment Fails
          </h2>

          <p className="text-gray-700 mb-4">
            Sometimes payments get declined. Here are the most common reasons
            and what to do:
          </p>

          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-1">
                Insufficient Funds
              </h3>
              <p className="text-gray-700 text-sm">
                Make sure you have enough money in your account or available
                credit on your card.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-1">
                Incorrect Card Details
              </h3>
              <p className="text-gray-700 text-sm">
                Double-check your card number, expiration date, CVV, and billing
                address.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Card Expired</h3>
              <p className="text-gray-700 text-sm">
                Check your card's expiration date. Use a different card if yours
                has expired.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-1">
                Bank Fraud Prevention
              </h3>
              <p className="text-gray-700 text-sm">
                Your bank might block the transaction as suspicious. Call your
                bank to authorize the charge, then try again.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-1">
                International Card Issues
              </h3>
              <p className="text-gray-700 text-sm">
                Some banks block international transactions by default. Contact
                your bank to enable international purchases.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-4">
            Still having trouble? Email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 hover:underline"
            >
              support@keyversely.com
            </a>{" "}
            and we'll help troubleshoot.
          </p>
        </div>

        {/* Receipts & Invoices */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Receipts & Invoices
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Automatic Receipt
              </h3>
              <p className="text-gray-700">
                You'll get an email receipt immediately after your payment goes
                through. This includes your order details, payment amount, and
                transaction ID.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Need an Invoice?
              </h3>
              <p className="text-gray-700">
                For business purchases, we can provide a formal invoice. Email
                us at{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline"
                >
                  support@keyversely.com
                </a>{" "}
                with your order number and we'll send you one.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Lost Your Receipt?
              </h3>
              <p className="text-gray-700">
                Check your spam folder first. Still can't find it? Email us with
                your email address or order details and we'll resend it.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Questions About Payment?</h2>
          <p className="text-lg text-blue-100 mb-6">
            If you're having trouble with payment or have questions about our
            accepted methods, we're here to help.
          </p>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-6">
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-white hover:underline"
              >
                support@keyversely.com
              </a>
            </p>
            <p>
              <strong>Response Time:</strong> 2-3 business days
            </p>
          </div>

          <p className="text-blue-100 text-sm">
            <strong>Company:</strong> KEYVERSELY LLC
            <br />
            <strong>Address:</strong> 63 N Burritt Ave Rm 100 PMB 1180, Buffalo,
            Wyoming 82834, USA
            <br />
            <strong>EIN:</strong> 61-2315882
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
