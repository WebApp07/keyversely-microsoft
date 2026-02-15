import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Refund Policy - KEYVERSELY LLC",
  description:
    "Refund and return policy for digital Microsoft software licenses purchased from KEYVERSELY LLC.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-blue-100">
            Last Updated: February 14, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            The Reality of Digital Product Refunds
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Let's be straight with you: refunding digital products is tricky.
            Once we send you a license key and you activate it, we can't "take
            it back" or resell it. That's just how digital licenses work.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            That said, we're not trying to rip anyone off. If there's a
            legitimate problem with your purchase, we'll make it right. Here's
            exactly when you can and can't get a refund.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-gray-800">
              <strong>Bottom line:</strong> If we messed up or the product is
              defective, you'll get a refund. If you changed your mind or bought
              the wrong thing, we probably can't help once the key is used.
            </p>
          </div>
        </div>

        {/* When You CAN Get a Refund */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            When You CAN Get a Refund
          </h2>

          <p className="text-gray-700 mb-4">
            We'll issue a full refund in these situations:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. We Sent the Wrong Product
              </h3>
              <p className="text-gray-700">
                You ordered Windows 11 Pro but we sent you Windows 11 Home?
                That's our mistake. We'll either send you the correct product or
                refund you - your choice.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                2. The Product Key Doesn't Work (And It's Our Fault)
              </h3>
              <p className="text-gray-700 mb-2">If the key we sent you is:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Invalid or already used (before you got it)</li>
                <li>Blocked or blacklisted by Microsoft</li>
                <li>Just doesn't activate despite correct installation</li>
              </ul>
              <p className="text-gray-700 mt-2">
                We'll replace it first. If the replacement doesn't work either,
                we'll refund you.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                3. We Never Delivered Anything
              </h3>
              <p className="text-gray-700">
                If you paid and we completely failed to send you a license
                within 24 hours (and it's not in your spam folder), you'll get a
                full refund.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                4. Duplicate Charge
              </h3>
              <p className="text-gray-700">
                If our system accidentally charged you twice for the same order,
                we'll refund the duplicate immediately.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                5. You Haven't Activated the Key Yet
              </h3>
              <p className="text-gray-700">
                If you realize you made a mistake BEFORE activating, contact us
                immediately. We might be able to refund or exchange it. Once
                activated, this option is off the table.
              </p>
            </div>
          </div>
        </div>

        {/* When You CAN'T Get a Refund */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            When You CAN'T Get a Refund
          </h2>

          <p className="text-gray-700 mb-4">
            We can't issue refunds in these situations:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. You Already Activated the License
              </h3>
              <p className="text-gray-700">
                Once you've activated the product key on your device, it's been
                used. We can't deactivate it or resell it. At that point, it's
                yours - no refunds.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                2. You Bought the Wrong Product By Mistake
              </h3>
              <p className="text-gray-700">
                If you accidentally ordered Office 2021 instead of Office 2024,
                or Home instead of Pro - that's not our error. Once the key is
                activated, we can't refund it. Double-check your order before
                completing checkout.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                3. Changed Your Mind
              </h3>
              <p className="text-gray-700">
                "I don't need this anymore" or "I found it cheaper elsewhere"
                isn't a valid refund reason after activation. Think carefully
                before buying.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                4. You Don't Like the Software
              </h3>
              <p className="text-gray-700">
                We sell licenses, not the software itself. If you don't like how
                Windows or Office works, that's a Microsoft product issue, not
                something we can refund.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                5. Compatibility Issues
              </h3>
              <p className="text-gray-700">
                If the software doesn't work on your specific hardware or
                conflicts with other software you have installed, that's not our
                responsibility. Check system requirements before buying.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                6. Microsoft Deactivated Your License
              </h3>
              <p className="text-gray-700">
                If Microsoft deactivates your license because you violated their
                terms (like trying to use an OEM key on multiple devices,
                pirating software, etc.), that's on you. We can't refund
                licenses that were valid but got deactivated due to misuse.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                7. You Lost or Forgot Your Product Key
              </h3>
              <p className="text-gray-700">
                We'll happily resend it, but losing your key isn't grounds for a
                refund. Keep your license emails somewhere safe.
              </p>
            </div>
          </div>
        </div>

        {/* Refund Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How to Request a Refund
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Step 1: Contact Us Quickly
              </h3>
              <p className="text-gray-700">
                Email{" "}
                <a
                  href="mailto:support@keyversely.com"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  support@keyversely.com
                </a>{" "}
                within
                <strong> 7 days</strong> of your purchase. After 7 days, we
                generally can't process refunds even for valid reasons.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Step 2: Provide Details
              </h3>
              <p className="text-gray-700 mb-2">Include in your email:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Your order number or receipt</li>
                <li>The product you purchased</li>
                <li>Clear explanation of the problem</li>
                <li>Screenshots of any error messages (if applicable)</li>
                <li>Whether you've activated the license yet</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Step 3: We Review Your Request
              </h3>
              <p className="text-gray-700">
                We'll respond within 2-3 business days. We might ask for more
                information to verify the issue. If your refund request
                qualifies based on this policy, we'll approve it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Step 4: Refund Processing
              </h3>
              <p className="text-gray-700">
                Approved refunds are processed within 5-10 business days back to
                your original payment method. Your bank or credit card company
                might take a few additional days to show the credit in your
                account.
              </p>
            </div>
          </div>
        </div>

        {/* Exchanges */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What About Exchanges?
          </h2>

          <p className="text-gray-700 mb-4">
            We don't technically do "exchanges," but here's what we can do:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                If You Haven't Activated Yet
              </h3>
              <p className="text-gray-700">
                Contact us immediately. We might be able to cancel your original
                order and issue a new one for the correct product. This depends
                on how quickly you catch the mistake.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                If You Already Activated
              </h3>
              <p className="text-gray-700">
                We can't take back an activated license. You'd need to purchase
                the correct product separately. No refund on the
                already-activated one.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Defective Product Replacement
              </h3>
              <p className="text-gray-700">
                If your key doesn't work and it's our fault, we'll send you a
                replacement key first. If that doesn't work either, then we'll
                refund you. We try to fix the problem before jumping to refunds.
              </p>
            </div>
          </div>
        </div>

        {/* Partial Refunds */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Partial Refunds
          </h2>

          <p className="text-gray-700 mb-4">
            We don't offer partial refunds. It's either a full refund or no
            refund. You can't use a product for a while and then get a prorated
            refund - digital licenses don't work that way.
          </p>
        </div>

        {/* Chargebacks Warning */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About Chargebacks & Disputes
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-gray-800 font-semibold mb-2">
              Please talk to us before filing a chargeback.
            </p>
            <p className="text-gray-700">
              If you have a legitimate problem, we'll resolve it. Filing a
              chargeback before contacting us makes everything more complicated
              and expensive for both of us.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            Here's what happens if you file a chargeback:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              We'll fight it if it's not justified (this costs us money, and
              we'll pursue it)
            </li>
            <li>
              Your license key may be reported to Microsoft and potentially
              deactivated
            </li>
            <li>You may be banned from making future purchases</li>
            <li>
              We'll provide evidence to your bank showing the product was
              delivered (we keep records)
            </li>
          </ul>

          <p className="text-gray-700 mt-4">
            Fraudulent chargebacks are taken seriously. If you have a valid
            complaint, email us first. We're reasonable people.
          </p>
        </div>

        {/* Special Circumstances */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Special Circumstances
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Bulk/Business Orders
              </h3>
              <p className="text-gray-700">
                If you purchased multiple licenses (10+), we might be able to
                work out a partial refund for unused, unactivated keys. Email us
                to discuss.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                System Errors
              </h3>
              <p className="text-gray-700">
                If our website malfunctioned and charged you incorrectly, or if
                there was a pricing error that we didn't catch, we'll make it
                right. Email us with details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Extreme Cases
              </h3>
              <p className="text-gray-700">
                We're not robots. If you have an extreme or unusual situation,
                explain it to us. We'll consider it on a case-by-case basis. No
                promises, but we'll listen.
              </p>
            </div>
          </div>
        </div>

        {/* What's Not Covered */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What This Policy Doesn't Cover
          </h2>

          <p className="text-gray-700 mb-4">
            This refund policy is specifically for product purchases. It doesn't
            cover:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Shipping costs (we're digital-only, so this doesn't apply anyway)
            </li>
            <li>
              Subscription renewals (if you bought a subscription product,
              cancellation terms are separate)
            </li>
            <li>Third-party services or products not sold by us</li>
            <li>
              Any modifications or customizations you made to the software after
              installation
            </li>
          </ul>
        </div>

        {/* Your Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Responsibilities
          </h2>

          <p className="text-gray-700 mb-4">
            To qualify for a refund, you need to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Request it within 7 days of purchase</li>
            <li>Provide accurate information about the problem</li>
            <li>Work with us to troubleshoot before demanding a refund</li>
            <li>Not have violated Microsoft's terms of use</li>
            <li>Not have used the software in ways that caused the problem</li>
          </ul>
        </div>

        {/* Contact for Refunds */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Need to Request a Refund?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Contact us within 7 days of purchase with your order details and
            explanation of the issue.
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
              <strong>Subject Line:</strong> Refund Request - Order #[Your Order
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
