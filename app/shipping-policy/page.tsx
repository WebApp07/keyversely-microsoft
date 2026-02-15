import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy - KEYVERSELY LLC",
  description:
    "Digital delivery policy for Microsoft software licenses. Instant email delivery worldwide with no shipping fees.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xl text-blue-100">
            Instant digital delivery worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        {/* Digital Products Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Important: We Sell Digital Products Only
          </h2>
          <p className="text-gray-800 mb-2">
            All our products are{" "}
            <strong>digital licenses delivered via email</strong>. There is no
            physical shipping involved. You will not receive anything in the
            mail.
          </p>
          <p className="text-gray-800">
            Your product key and download instructions are sent electronically
            to your email address immediately after your payment is processed.
          </p>
        </div>

        {/* How Delivery Works */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How Digital Delivery Works
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  You Place Your Order
                </h3>
                <p className="text-gray-700">
                  Choose your product, add it to cart, and complete checkout
                  with your email address and payment information.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Payment Is Processed
                </h3>
                <p className="text-gray-700">
                  Your payment goes through our secure payment processor. This
                  typically takes a few seconds to a minute.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Instant Email Delivery
                </h3>
                <p className="text-gray-700">
                  Once payment clears, you'll automatically receive an email
                  containing:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Your product license key</li>
                  <li>Download links (if applicable)</li>
                  <li>Activation instructions</li>
                  <li>Order receipt and confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Timeframe */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Delivery Timeframe
          </h2>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Standard Delivery: 5 Minutes - 2 Hours
              </h3>
              <p className="text-gray-700">
                Most orders are delivered within <strong>5-30 minutes</strong>{" "}
                after payment clears. During busy periods, it might take up to 2
                hours.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Maximum Delivery Time: 24 Hours
              </h3>
              <p className="text-gray-700">
                If you haven't received your license within 24 hours, something
                went wrong. Contact us immediately and we'll resend it or
                resolve the issue.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Why Delivery Times Vary
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Payment verification:</strong> Some payments require
                  additional verification
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>High order volume:</strong> Peak times may cause
                  slight delays
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Weekend/holiday orders:</strong> May take longer to
                  process
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Email delivery issues:</strong> Occasionally emails
                  get delayed by mail servers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Worldwide Delivery */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Worldwide Digital Delivery
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                We Ship Everywhere (Digitally)
              </h3>
              <p className="text-gray-700 mb-3">
                Because we deliver via email, we can serve customers anywhere in
                the world. There are no geographic restrictions on delivery.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>🌍 Available in all countries</li>
                <li>📧 No customs, no delays, no border issues</li>
                <li>⚡ Same instant delivery regardless of location</li>
                <li>💰 No international shipping fees</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> While we can deliver to any country, make
                sure the Microsoft product you're buying is compatible with your
                region. Some licenses have regional restrictions imposed by
                Microsoft, not by us.
              </p>
            </div>
          </div>
        </div>

        {/* No Shipping Fees */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Shipping Costs
          </h2>

          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-green-700 mb-2">$0.00</h3>
            <p className="text-gray-800 text-lg font-semibold mb-2">
              Free Delivery on All Orders
            </p>
            <p className="text-gray-700">
              Digital delivery means zero shipping costs. The price you see is
              the price you pay - no hidden fees, no shipping charges, no
              handling fees.
            </p>
          </div>

          <p className="text-gray-700 mt-4">
            Whether you're ordering from next door or across the world, delivery
            is always free and instant.
          </p>
        </div>

        {/* Didn't Receive Your Order */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Didn't Receive Your License?
          </h2>

          <p className="text-gray-700 mb-4">
            If you haven't received your license within 2 hours, here's what to
            do:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Step 1: Check Your Spam/Junk Folder
              </h3>
              <p className="text-gray-700 text-sm">
                90% of "missing" emails are in spam. Check your spam, junk,
                promotions, or social folders. Look for emails from{" "}
                <strong>support@keyversely.com</strong> or{" "}
                <strong>noreply@keyversely.com</strong>.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Step 2: Verify Your Email Address
              </h3>
              <p className="text-gray-700 text-sm">
                Double-check the email address you entered at checkout. If you
                typed it wrong, the license went to the wrong place.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Step 3: Wait a Bit Longer
              </h3>
              <p className="text-gray-700 text-sm">
                If it's only been an hour, give it another hour. Sometimes email
                servers are slow.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Step 4: Contact Us
              </h3>
              <p className="text-gray-700 text-sm">
                Still nothing after 24 hours? Email us at{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  support@keyversely.com
                </a>{" "}
                with your order number or payment confirmation. We'll resend
                your license immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Wrong Email Address */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What If I Entered the Wrong Email?
          </h2>

          <p className="text-gray-700 mb-4">
            If you made a typo in your email address at checkout, contact us as
            soon as possible:
          </p>

          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">1.</span>
              <p className="text-gray-700">
                Email{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline"
                >
                  support@keyversely.com
                </a>{" "}
                from the <strong>correct</strong> email address
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">2.</span>
              <p className="text-gray-700">
                Include your order number, payment confirmation, or transaction
                ID
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">3.</span>
              <p className="text-gray-700">
                Tell us the wrong email you accidentally entered
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">4.</span>
              <p className="text-gray-700">
                We'll verify you're the actual buyer and resend to the correct
                email
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <p className="text-gray-800 text-sm">
              <strong>Security Note:</strong> We need to verify you're the
              actual purchaser before sending to a different email address. This
              protects both you and us from fraud.
            </p>
          </div>
        </div>

        {/* Resending Your License */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Lost or Deleted Your Email?
          </h2>

          <p className="text-gray-700 mb-4">
            We can resend your license anytime. Here's how:
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">
              Email{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-blue-600 hover:underline"
              >
                support@keyversely.com
              </a>{" "}
              with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Your order number (if you have it)</li>
              <li>Email address used for purchase</li>
              <li>Approximate date of purchase</li>
              <li>Product name you purchased</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We'll look up your order and resend the license within 1-2
              business days.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-gray-800 text-sm">
              <strong>Pro Tip:</strong> Save your license email somewhere safe
              (like a password manager or a "Software Licenses" folder). You
              might need it in the future for reinstallation.
            </p>
          </div>
        </div>

        {/* No Physical Products */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What You Will NOT Receive
          </h2>

          <p className="text-gray-700 mb-4">
            To be absolutely clear, you will <strong>not</strong> receive:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Physical CD, DVD, or USB drive</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Product box or packaging</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Paper certificate or license card</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Physical mail or package delivery</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>
                Tracking number (because there's no physical shipment)
              </span>
            </li>
          </ul>

          <p className="text-gray-700 mt-4">
            Everything is 100% digital. Your license key and instructions arrive
            via email only.
          </p>
        </div>

        {/* Download Instructions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Downloading the Software
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                We Send Download Links
              </h3>
              <p className="text-gray-700">
                Along with your license key, we'll include official Microsoft
                download links in your delivery email. These links take you
                directly to Microsoft's servers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Always Download from Microsoft
              </h3>
              <p className="text-gray-700">
                For security reasons, always download Microsoft software from
                Microsoft's official website. Never download from third-party
                file sharing sites or torrents.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Download Size & Speed
              </h3>
              <p className="text-gray-700">
                Microsoft software downloads can be large (1-5 GB or more).
                Download speed depends on your internet connection, not our
                delivery. The download itself has nothing to do with us - it
                comes directly from Microsoft's servers.
              </p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Support Availability
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Automatic Delivery (24/7)
              </h3>
              <p className="text-gray-700">
                License delivery is fully automated and happens 24/7, including
                weekends and holidays. You can order anytime.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Customer Support Hours
              </h3>
              <p className="text-gray-700 mb-2">
                If you need to contact us about a delivery issue:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST
                </li>
                <li>
                  <strong>Saturday - Sunday:</strong> Closed
                </li>
              </ul>
              <p className="text-gray-700 mt-2">
                Messages received outside business hours will be answered on the
                next business day.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Delivery Problems?</h2>
          <p className="text-lg text-blue-100 mb-6">
            If you haven't received your license within 24 hours, or if you're
            having any delivery issues, contact us right away.
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
            <p className="mb-2">
              <strong>Subject:</strong> Delivery Issue - Order #[Your Order
              Number]
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
