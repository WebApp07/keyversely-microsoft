import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Policy - KEYVERSELY LLC",
  description:
    "Return and exchange policy for digital Microsoft software licenses purchased from KEYVERSELY LLC.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Return Policy</h1>
          <p className="text-xl text-blue-100">
            Last Updated: February 14, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        {/* Digital Products Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Important: Digital Products Cannot Be "Returned&quot;
          </h2>
          <p className="text-gray-800 mb-3">
            We sell <strong>digital software licenses</strong>, not physical
            products. Once you receive your license key via email, we cannot
            take it back or "return" it like you would with a physical item.
          </p>
          <p className="text-gray-800">
            However, we do offer <strong>refunds and replacements</strong> in
            certain situations. This page explains when you're eligible for a
            refund and how the process works.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How Returns Work for Digital Products
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Since digital licenses can't be physically returned, our "return
            policy" is really about:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Refunds
              </h3>
              <p className="text-gray-700 text-sm">
                Getting your money back if there's a legitimate problem with
                your purchase
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Replacements
              </h3>
              <p className="text-gray-700 text-sm">
                Getting a working license key if the one we sent you doesn't
                work
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-4">
            For complete details on refunds, see our{" "}
            <a
              href="/refund-policy"
              className="text-blue-600 hover:underline font-semibold"
            >
              Refund Policy
            </a>
            . This page focuses on the return process and what's eligible.
          </p>
        </div>

        {/* What Qualifies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            When You Can Return (Get Refunded)
          </h2>

          <p className="text-gray-700 mb-4">
            You can request a refund in these situations:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                We Sent the Wrong Product
              </h3>
              <p className="text-gray-700 text-sm">
                You ordered Windows 11 Pro but received Windows 11 Home? That's
                our mistake. We'll refund you or send the correct product - your
                choice.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                The License Key Doesn't Work
              </h3>
              <p className="text-gray-700 text-sm">
                If the key is invalid, already used (before you got it), or
                doesn't activate properly - we'll replace it first. If the
                replacement doesn't work either, you get a full refund.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                We Never Delivered Your License
              </h3>
              <p className="text-gray-700 text-sm">
                If we completely failed to send you anything within 24 hours
                (and it's not in your spam), you'll get a full refund.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Duplicate Charge
              </h3>
              <p className="text-gray-700 text-sm">
                If we accidentally charged you twice for the same order, we'll
                refund the duplicate immediately.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pre-Activation Cancellation
              </h3>
              <p className="text-gray-700 text-sm">
                If you realize you made a mistake BEFORE activating the license,
                contact us immediately. We might be able to process a
                return/refund. Once activated, this option is gone.
              </p>
            </div>
          </div>
        </div>

        {/* What Doesn't Qualify */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            When You CANNOT Return
          </h2>

          <p className="text-gray-700 mb-4">
            We cannot accept returns or issue refunds in these situations:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                You Already Activated the License
              </h3>
              <p className="text-gray-700 text-sm">
                Once activated on your device, the license is used. We can't
                deactivate it or resell it. No returns after activation.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                You Bought the Wrong Product
              </h3>
              <p className="text-gray-700 text-sm">
                Accidentally ordered Office 2021 instead of Office 2024? Or Home
                instead of Pro? That's a buyer error, not a product defect. Once
                activated, no refund.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Changed Your Mind
              </h3>
              <p className="text-gray-700 text-sm">
                "I don't need this anymore" or "I found it cheaper elsewhere"
                after activation isn't grounds for a return.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                You Don't Like the Software
              </h3>
              <p className="text-gray-700 text-sm">
                If you don't like how Windows or Office works, that's a
                Microsoft product issue. We can't refund because you're unhappy
                with Microsoft's software.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Compatibility Issues
              </h3>
              <p className="text-gray-700 text-sm">
                If the software doesn't work on your specific hardware or
                conflicts with other programs, that's not our responsibility.
                Check system requirements before buying.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Microsoft Deactivated Your License
              </h3>
              <p className="text-gray-700 text-sm">
                If Microsoft deactivates your license because you violated their
                terms (like trying to use an OEM key on multiple devices),
                that's on you. No returns.
              </p>
            </div>
          </div>
        </div>

        {/* Return Window */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Return Window: 7 Days
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-800 text-lg mb-2">
              <strong>
                You have 7 days from the date of purchase to request a
                return/refund.
              </strong>
            </p>
            <p className="text-gray-700">
              After 7 days, we generally cannot process returns even for valid
              reasons. Don't wait - if something's wrong, contact us
              immediately.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Why Only 7 Days?
            </h3>
            <p className="text-gray-700 mb-3">
              Digital products are instantly delivered and immediately usable.
              Seven days is plenty of time to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Receive your license</li>
              <li>Activate it on your device</li>
              <li>Verify it works properly</li>
              <li>Contact us if there are any issues</li>
            </ul>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How to Return a Product
          </h2>

          <p className="text-gray-700 mb-4">
            Since there's nothing physical to ship back, the "return" process is
            simple:
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Contact Us Quickly
                </h3>
                <p className="text-gray-700 text-sm">
                  Email{" "}
                  <a
                    href="mailto:support@keyversely.com"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    support@keyversely.com
                  </a>{" "}
                  within 7 days of purchase with "Return Request" in the subject
                  line.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Provide Details
                </h3>
                <p className="text-gray-700 text-sm mb-2">Include:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Your order number</li>
                  <li>Product purchased</li>
                  <li>Clear explanation of why you're requesting a return</li>
                  <li>Whether you've activated the license yet</li>
                  <li>Screenshots of error messages (if applicable)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  We Review Your Request
                </h3>
                <p className="text-gray-700 text-sm">
                  We'll respond within 2-3 business days. We might ask for more
                  information to verify the issue. If your return qualifies,
                  we'll approve it.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Refund Processed
                </h3>
                <p className="text-gray-700 text-sm">
                  Approved refunds are processed within 5-10 business days back
                  to your original payment method. Your bank might take a few
                  extra days to show the credit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exchanges */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Can I Exchange Instead of Return?
          </h2>

          <p className="text-gray-700 mb-4">
            We don't do traditional "exchanges," but here's what we can do:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Defective License Replacement
              </h3>
              <p className="text-gray-700 text-sm">
                If your license key doesn't work, we'll send you a replacement
                key first before considering a refund. This is automatic - no
                need to ask.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Wrong Product (Not Yet Activated)
              </h3>
              <p className="text-gray-700 text-sm">
                If you bought the wrong product by mistake and haven't activated
                it yet, contact us immediately. We might be able to cancel the
                original order and issue a new one for the correct product.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Wrong Product (Already Activated)
              </h3>
              <p className="text-gray-700 text-sm">
                Once activated, we can't take it back or exchange it. You'd need
                to purchase the correct product separately. No refund on the
                already-activated license.
              </p>
            </div>
          </div>
        </div>

        {/* Partial Returns */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Partial Returns for Bulk Orders
          </h2>

          <p className="text-gray-700 mb-4">
            If you purchased multiple licenses in one order:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>We can refund individual unused, unactivated licenses</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Activated licenses cannot be refunded, even if part of a bulk
                order
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Contact us with details on which specific licenses you want to
                return
              </span>
            </li>
          </ul>
        </div>

        {/* No Restocking Fee */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Restocking Fees
          </h2>

          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-2">$0.00</h3>
            <p className="text-gray-800 text-lg font-semibold mb-2">
              No Restocking Fees
            </p>
            <p className="text-gray-700">
              Since digital products don't need to be "restocked," we never
              charge restocking fees. Approved refunds are always 100% of what
              you paid.
            </p>
          </div>
        </div>

        {/* EU Consumer Rights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            EU Consumer Rights (14-Day Withdrawal)
          </h2>

          <p className="text-gray-700 mb-4">
            If you're in the European Union, you typically have a 14-day right
            of withdrawal under EU law. However, for digital content:
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-gray-800 text-sm mb-2">
              <strong>Important:</strong> By purchasing and receiving your
              digital license, you explicitly agree to immediate delivery and
              waive your right of withdrawal under EU Consumer Rights Directive
              Article 16(m).
            </p>
            <p className="text-gray-700 text-sm">
              This is standard for digital content that is delivered
              immediately. Once you receive and activate your license, the
              withdrawal period no longer applies.
            </p>
          </div>

          <p className="text-gray-700 mt-4 text-sm">
            However, our standard 7-day return policy still applies for
            defective products, wrong products sent by us, or non-delivery
            issues.
          </p>
        </div>

        {/* Compare to Refund Policy */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Return Policy vs. Refund Policy
          </h3>
          <p className="text-gray-700 mb-3">
            Confused about the difference? Here's the deal:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Return Policy</strong> (this page): Explains the overall
              process of "returning" digital products and what qualifies
            </li>
            <li>
              <strong>Refund Policy:</strong> More detailed information about
              refund eligibility, timing, and procedures
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            Both pages cover similar ground, but the{" "}
            <a
              href="/refund-policy"
              className="text-blue-600 hover:underline font-semibold"
            >
              Refund Policy
            </a>{" "}
            has more comprehensive details.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Need to Return a Product?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Contact us within 7 days of purchase to start the return process. Be
            ready to explain the issue and provide your order number.
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
              <strong>Subject Line:</strong> Return Request - Order #[Your Order
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
