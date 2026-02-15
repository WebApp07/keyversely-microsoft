import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service - KEYVERSELY LLC",
  description:
    "Terms of Service for purchasing digital Microsoft products from KEYVERSELY LLC.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100">
            Last Updated: February 14, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Basics</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to KEYVERSELY LLC. These terms explain how our service
            works, what we expect from you, and what you can expect from us. By
            buying from us, you're agreeing to these terms.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We've tried to keep this as straightforward as possible, but some
            legal language is unavoidable. If anything is unclear, reach out to
            us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 hover:underline"
            >
              support@keyversely.com
            </a>{" "}
            before making a purchase.
          </p>
        </div>

        {/* What You're Buying */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What You're Actually Buying
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Digital Product Licenses
          </h3>
          <p className="text-gray-700 mb-4">
            When you buy from us, you're purchasing a license to use Microsoft
            software. You're NOT buying the software itself - you're buying the
            right to use it under Microsoft's terms.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            What We Deliver
          </h3>
          <p className="text-gray-700 mb-4">
            After your payment clears, we'll email you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Your product key/license code</li>
            <li>Download links (if applicable)</li>
            <li>Basic activation instructions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Important License Info
          </h3>
          <p className="text-gray-700 mb-4">
            Different licenses have different rules. We'll tell you which type
            you're getting:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>OEM licenses:</strong> Usually tied to one device, can't
              be transferred
            </li>
            <li>
              <strong>Retail licenses:</strong> Can often be transferred between
              devices
            </li>
            <li>
              <strong>Volume licenses:</strong> May have specific organization
              requirements
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            The specific restrictions will be clearly stated on the product page
            before you buy.
          </p>
        </div>

        {/* Your Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Need From You
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Accurate Information
          </h3>
          <p className="text-gray-700 mb-4">
            Give us a real email address that you actually check. That's where
            your license will be sent. If you typo your email, we can't help you
            if the key goes to the wrong place.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            One License Per Purchase
          </h3>
          <p className="text-gray-700 mb-4">
            Each license is for your use only (or your business, depending on
            the license type). You can't:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Resell our licenses to other people</li>
            <li>Share your product key publicly</li>
            <li>Use the license on more devices than it allows</li>
            <li>Bypass Microsoft's activation systems</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Follow Microsoft's Rules
          </h3>
          <p className="text-gray-700 mb-4">
            You need to follow Microsoft's license terms for whatever product
            you buy. We're just the middleman - Microsoft's terms still apply to
            how you use the software.
          </p>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Payment & Pricing
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Prices</h3>
          <p className="text-gray-700 mb-4">
            All prices are in USD. The price you see at checkout is what you pay
            - no hidden fees from us. (Your bank or payment processor might add
            their own fees, but that's between you and them.)
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Payment Methods
          </h3>
          <p className="text-gray-700 mb-4">
            We accept the payment methods shown at checkout. Your payment needs
            to clear before we send your license.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Failed Payments
          </h3>
          <p className="text-gray-700 mb-4">
            If your payment doesn't go through, we won't deliver your license.
            Pretty straightforward.
          </p>
        </div>

        {/* Delivery */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How & When You Get Your License
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Delivery Time
          </h3>
          <p className="text-gray-700 mb-4">
            We aim to send your license within a few minutes to a few hours
            after your payment clears. Sometimes it takes up to 24 hours during
            busy periods or weekends.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Delivery Method
          </h3>
          <p className="text-gray-700 mb-4">
            Everything is sent via email to the address you provided at
            checkout. Check your spam folder if you don't see it in your inbox.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Problems With Delivery
          </h3>
          <p className="text-gray-700 mb-4">
            If you haven't received your license within 24 hours, email us.
            We'll resend it or figure out what went wrong.
          </p>
        </div>

        {/* Refunds */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Refunds & Returns
          </h2>

          <p className="text-gray-700 mb-4">
            Here's the deal with refunds for digital products:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            When You CAN Get a Refund
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>We sent you the wrong product key</li>
            <li>
              The key doesn't work and it's our fault (not a Microsoft issue)
            </li>
            <li>We didn't deliver anything at all</li>
            <li>You were charged twice by mistake</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            When You CAN'T Get a Refund
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>You already activated the license</li>
            <li>You bought the wrong product by mistake</li>
            <li>You changed your mind after receiving the key</li>
            <li>The license works but you don't like the software</li>
            <li>
              You violated Microsoft's terms and they deactivated your license
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            How to Request a Refund
          </h3>
          <p className="text-gray-700 mb-4">
            Email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 hover:underline"
            >
              support@keyversely.com
            </a>{" "}
            within 7 days of your purchase. Tell us what's wrong. If it's a
            valid refund reason, we'll process it within 5-10 business days back
            to your original payment method.
          </p>
        </div>

        {/* Warranties */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Warranties & Guarantees
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            What We Guarantee
          </h3>
          <p className="text-gray-700 mb-4">
            We guarantee that the product keys we send you are:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Genuine Microsoft licenses</li>
            <li>Unused at the time we send them to you</li>
            <li>Valid for activation (at the time of delivery)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            What We DON'T Guarantee
          </h3>
          <p className="text-gray-700 mb-4">
            We can't control what happens after you activate:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Microsoft's software working on your specific device</li>
            <li>Compatibility with your hardware or other software</li>
            <li>Future updates or support from Microsoft</li>
            <li>That you'll like the software</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <p className="text-gray-800">
              <strong>Legal Note:</strong> To the maximum extent permitted by
              law, we provide licenses "as is" without warranty of any kind.
              We're not liable for any indirect, incidental, or consequential
              damages from using or not being able to use the software.
            </p>
          </div>
        </div>

        {/* Liability Limits */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Liability Limits
          </h2>

          <p className="text-gray-700 mb-4">
            In plain English: If something goes wrong, the most you can get back
            from us is what you paid for the product. We're not responsible for
            any other losses, damages, or problems that might happen because of
            the software.
          </p>

          <p className="text-gray-700 mb-4">
            For example, if the software crashes your computer or causes data
            loss, that's a Microsoft issue, not ours. We just sell the license.
          </p>
        </div>

        {/* Account Termination */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            When We Can Refuse Service
          </h2>

          <p className="text-gray-700 mb-4">
            We can refuse to sell to you or cancel your order if:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>We suspect fraud or illegal activity</li>
            <li>You're trying to resell our licenses commercially</li>
            <li>You've violated these terms before</li>
            <li>You're abusing our refund policy</li>
            <li>You're harassing our staff</li>
          </ul>

          <p className="text-gray-700 mb-4">
            If we cancel your order before delivering your license, we'll refund
            your payment.
          </p>
        </div>

        {/* Privacy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Privacy
          </h2>

          <p className="text-gray-700 mb-4">
            We collect your email address and payment info to process your
            order. We don't sell your information to anyone. For full details,
            check our Privacy Policy.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Changes to These Terms
          </h2>

          <p className="text-gray-700 mb-4">
            We might update these terms occasionally. If we make major changes,
            we'll update the "Last Updated" date at the top. Your continued use
            of our service after changes means you accept the new terms.
          </p>

          <p className="text-gray-700 mb-4">
            For purchases already made, the terms in effect at the time of your
            purchase still apply to that specific transaction.
          </p>
        </div>

        {/* Disputes */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Disputes & Legal Stuff
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Try Talking to Us First
          </h3>
          <p className="text-gray-700 mb-4">
            If you have a problem, email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 hover:underline"
            >
              support@keyversely.com
            </a>
            . Most issues can be solved without lawyers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Governing Law
          </h3>
          <p className="text-gray-700 mb-4">
            These terms are governed by the laws of the State of Wyoming, USA.
            Any legal disputes will be handled in Wyoming courts.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Severability
          </h3>
          <p className="text-gray-700 mb-4">
            If any part of these terms is found to be unenforceable, the rest
            still applies.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Questions About These Terms?
          </h2>

          <p className="text-gray-700 mb-4">
            If anything is unclear or you need clarification before buying,
            reach out:
          </p>

          <div className="text-gray-700">
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-blue-600 hover:underline"
              >
                support@keyversely.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Business Name:</strong> KEYVERSELY LLC
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 63 N Burritt Ave Rm 100 PMB 1180,
              Buffalo, Wyoming 82834, USA
            </p>
            <p>
              <strong>EIN:</strong> 61-2315882
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
