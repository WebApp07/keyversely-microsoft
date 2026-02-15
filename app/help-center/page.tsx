import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Help Center - KEYVERSELY LLC",
  description:
    "Get answers to common questions about purchasing and activating Microsoft software licenses from KEYVERSELY.",
};

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-blue-100">
            Quick answers to common questions
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="container mx-auto px-4 max-w-4xl py-8">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-gray-800">
            <strong>Can't find what you're looking for?</strong> Email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 hover:underline font-semibold"
            >
              support@keyversely.com
            </a>{" "}
            and we'll help you out.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-12">
        {/* Ordering & Payment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ordering & Payment
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How do I place an order?
              </h3>
              <p className="text-gray-700">
                Browse our products, add what you want to your cart, and
                checkout. You'll need to provide your email address and payment
                info. Once payment clears, we'll email your license key.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept major credit cards (Visa, Mastercard, American
                Express), debit cards, and PayPal. All payments are processed
                securely through our payment provider.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Is it safe to enter my credit card info?
              </h3>
              <p className="text-gray-700">
                Yes. We use SSL encryption and don't store your full credit card
                details on our servers. Your payment is processed by a
                PCI-compliant payment processor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Why was my payment declined?
              </h3>
              <p className="text-gray-700">
                Common reasons: insufficient funds, card expired, billing
                address doesn't match what your bank has on file, or your bank
                flagged it as suspicious. Try again or contact your bank. If you
                keep having issues, email us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I pay with cryptocurrency?
              </h3>
              <p className="text-gray-700">
                Not currently. We only accept traditional payment methods listed
                above.
              </p>
            </div>
          </div>
        </div>

        {/* License Delivery */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            License Delivery
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                When will I receive my license?
              </h3>
              <p className="text-gray-700">
                Usually within a few minutes to a few hours after payment.
                During busy times or weekends, it might take up to 24 hours.
                Check your spam folder if you don't see it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                I haven't received my license yet. What do I do?
              </h3>
              <p className="text-gray-700 mb-2">
                First, check your spam/junk folder. Still nothing? Email us at{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline"
                >
                  support@keyversely.com
                </a>{" "}
                with your order number. We'll resend it or figure out what went
                wrong.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                I entered the wrong email address. Can you resend it?
              </h3>
              <p className="text-gray-700">
                Yes, but we'll need to verify you're the actual buyer. Email us
                with your order details, payment confirmation, and the correct
                email address. We'll send it to the right place.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What if I accidentally delete the email with my license?
              </h3>
              <p className="text-gray-700">
                No worries. Email us with your order number and we'll resend
                your license key.
              </p>
            </div>
          </div>
        </div>

        {/* Product Keys & Activation */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Product Keys & Activation
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                My product key isn't working. What should I do?
              </h3>
              <p className="text-gray-700 mb-2">Before panicking, try these:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>
                  Double-check you typed it correctly (no spaces, exact
                  characters)
                </li>
                <li>
                  Make sure you're installing the right version (Home vs Pro,
                  32-bit vs 64-bit)
                </li>
                <li>Try the online activation instead of phone activation</li>
                <li>Restart your computer and try again</li>
              </ul>
              <p className="text-gray-700">
                Still not working? Email us with the exact error message you're
                seeing and your order number. We'll help troubleshoot or replace
                the key if it's actually defective.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I use the same key on multiple computers?
              </h3>
              <p className="text-gray-700">Depends on the license type:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  <strong>OEM licenses:</strong> No. One device only, can't be
                  transferred.
                </li>
                <li>
                  <strong>Retail licenses:</strong> Usually one device at a
                  time, but can be transferred if you deactivate it on the old
                  device.
                </li>
                <li>
                  <strong>Volume licenses:</strong> Depends on the specific
                  license terms.
                </li>
              </ul>
              <p className="text-gray-700 mt-2">
                The product page will tell you which type you're buying.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How do I activate my software?
              </h3>
              <p className="text-gray-700 mb-2">
                Basic steps (varies by product):
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-2">
                <li>
                  Install the software (download from Microsoft if needed)
                </li>
                <li>
                  Open the software and look for "Activate" or "Enter Product
                  Key"
                </li>
                <li>Type in your product key exactly as provided</li>
                <li>Follow the on-screen instructions</li>
              </ol>
              <p className="text-gray-700">
                We'll include specific activation instructions with your license
                delivery email.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Where do I download the software?
              </h3>
              <p className="text-gray-700">
                Download directly from Microsoft's official website. We'll
                include the download link in your delivery email. Never download
                Microsoft software from sketchy third-party sites.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                My license says it's already in use. Why?
              </h3>
              <p className="text-gray-700">
                This shouldn't happen with our new licenses. If it does, email
                us immediately with the error message. This could indicate a
                problem on our end, and we'll replace the key.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I upgrade from Home to Pro with my key?
              </h3>
              <p className="text-gray-700">
                No. A Home license key only works for Home edition. If you need
                Pro, you'll need to purchase a Pro license separately.
              </p>
            </div>
          </div>
        </div>

        {/* Refunds & Returns */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Refunds & Returns
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I get a refund?
              </h3>
              <p className="text-gray-700 mb-2">
                It depends. We CAN refund if:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>We sent you the wrong product</li>
                <li>The key doesn't work and it's actually our fault</li>
                <li>We didn't deliver anything at all</li>
                <li>You were charged twice by mistake</li>
              </ul>
              <p className="text-gray-700 mb-2">We CAN'T refund if:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>You already activated the license</li>
                <li>You bought the wrong product by mistake</li>
                <li>You changed your mind</li>
                <li>You don't like the software</li>
                <li>
                  Microsoft deactivated it because you violated their terms
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How do I request a refund?
              </h3>
              <p className="text-gray-700">
                Email{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline"
                >
                  support@keyversely.com
                </a>{" "}
                within 7 days of purchase. Include your order number and explain
                what's wrong. If it's a valid refund reason, we'll process it
                within 5-10 business days.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                I bought the wrong product. Can I exchange it?
              </h3>
              <p className="text-gray-700">
                If you haven't activated the key yet, email us right away. We
                might be able to swap it for the correct product. Once it's
                activated, we can't exchange it.
              </p>
            </div>
          </div>
        </div>

        {/* Product Questions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Product Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Are your licenses genuine?
              </h3>
              <p className="text-gray-700">
                Yes. Every license we sell is an authentic Microsoft license. We
                don't sell pirated, cracked, or counterfeit software. All our
                keys are sourced through legitimate channels.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What's the difference between OEM and Retail licenses?
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>OEM (Original Equipment Manufacturer):</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Tied to one specific device permanently</li>
                <li>Can't be transferred to another computer</li>
                <li>Usually cheaper</li>
                <li>Support from hardware manufacturer, not Microsoft</li>
              </ul>
              <p className="text-gray-700 mb-2 mt-3">
                <strong>Retail:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Can be transferred to different devices (one at a time)</li>
                <li>Direct support from Microsoft</li>
                <li>More flexible, usually more expensive</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Will my license expire?
              </h3>
              <p className="text-gray-700">
                Most perpetual licenses (like Windows or Office 2021) don't
                expire - they're yours forever. Subscription products (like
                Microsoft 365) are different and renew periodically. The product
                page will clearly state if it's perpetual or subscription-based.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do I get free updates?
              </h3>
              <p className="text-gray-700">
                Depends on the product. Windows licenses typically get security
                updates and minor patches. Office perpetual licenses don't get
                new features but do get security updates. Subscription products
                get everything. Check the product description for details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Which version of Windows do I need?
              </h3>
              <p className="text-gray-700">
                <strong>Windows Home:</strong> Good for personal use, gaming,
                basic stuff.
                <br />
                <strong>Windows Pro:</strong> Includes business features like
                BitLocker encryption, Remote Desktop, domain joining. Get this
                if you need work features or more control.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Support */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Technical Support
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do you provide technical support?
              </h3>
              <p className="text-gray-700">
                We help with license activation issues and delivery problems.
                For actual software problems (crashes, bugs, how-to questions),
                contact Microsoft support directly - they're the experts on
                their software.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The software isn't working properly. Can you help?
              </h3>
              <p className="text-gray-700">
                If it's an activation or licensing issue, yes. If it's a bug or
                compatibility problem with the software itself, that's
                Microsoft's area. We can point you to Microsoft support
                resources.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How do I contact Microsoft support?
              </h3>
              <p className="text-gray-700">
                Visit{" "}
                <a
                  href="https://support.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  support.microsoft.com
                </a>{" "}
                or call their support line. Make sure you have your product key
                handy.
              </p>
            </div>
          </div>
        </div>

        {/* Account & Security */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Account & Security
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do I need to create an account to buy?
              </h3>
              <p className="text-gray-700">
                Currently, no. You can checkout as a guest. You just need a
                valid email address to receive your license.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Is my personal information safe?
              </h3>
              <p className="text-gray-700">
                Yes. We use SSL encryption, don't store full credit card
                details, and don't sell your data to anyone. Check our Privacy
                Policy for full details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What do you do with my email address?
              </h3>
              <p className="text-gray-700">
                We use it to send your license and order confirmations. We won't
                spam you with marketing emails unless you specifically opt in.
              </p>
            </div>
          </div>
        </div>

        {/* Business & Bulk Orders */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Business & Bulk Orders
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do you offer volume discounts?
              </h3>
              <p className="text-gray-700">
                Maybe. If you're buying a large quantity (10+ licenses), email
                us at{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline"
                >
                  support@keyversely.com
                </a>{" "}
                and we'll see what we can do.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I get an invoice?
              </h3>
              <p className="text-gray-700">
                Yes. Email us with your order number and we'll send you a proper
                invoice with all the details your accounting department needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do you offer business licenses?
              </h3>
              <p className="text-gray-700">
                Yes, when available. Check our product catalog or email us with
                your specific business licensing needs.
              </p>
            </div>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Can&apos;t find the answer you&apos;re looking for? We&apos;re here
            to help.
          </p>
          <a
            href="mailto:support@keyversely.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            We typically respond within 2-3 business days
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
