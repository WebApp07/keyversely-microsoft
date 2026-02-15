import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Privacy Policy - KEYVERSELY LLC",
  description:
    "Privacy Policy for KEYVERSELY LLC - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            The Short Version
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We take your privacy seriously. Here's the quick summary:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>We only collect info we actually need to process your order</li>
            <li>We don't sell your data to anyone</li>
            <li>
              We don't spam you with marketing emails (unless you ask us to)
            </li>
            <li>We keep your payment info secure</li>
            <li>You can request to see or delete your data anytime</li>
          </ul>
          <p className="text-gray-700">Keep reading for the full details.</p>
        </div>

        {/* Who We Are */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            This privacy policy is for KEYVERSELY LLC, a digital products
            reseller based in Wyoming, USA.
          </p>
          <div className="text-gray-700">
            <p className="mb-2">
              <strong>Legal Name:</strong> KEYVERSELY LLC
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 63 N Burritt Ave Rm 100 PMB 1180,
              Buffalo, Wyoming 82834, USA
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-blue-600 hover:underline"
              >
                support@keyversely.com
              </a>
            </p>
            <p>
              <strong>EIN:</strong> 61-2315882
            </p>
          </div>
        </div>

        {/* What We Collect */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Information You Give Us
          </h3>
          <p className="text-gray-700 mb-4">
            When you buy from us, we collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Email address:</strong> So we can send you your product
              license
            </li>
            <li>
              <strong>Name:</strong> For billing purposes and order records
            </li>
            <li>
              <strong>Payment information:</strong> Credit card or payment
              details (processed securely by our payment provider)
            </li>
            <li>
              <strong>Billing address:</strong> Required for payment processing
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Information We Collect Automatically
          </h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we automatically collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>IP address:</strong> To prevent fraud and understand where
              our customers are from
            </li>
            <li>
              <strong>Browser type and device info:</strong> To make sure our
              site works properly for you
            </li>
            <li>
              <strong>Pages you visit:</strong> To improve our website
            </li>
            <li>
              <strong>Cookies:</strong> Small files that help our site function
              (more on this below)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Information We DON'T Collect
          </h3>
          <p className="text-gray-700 mb-4">We don't collect:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Social security numbers or government IDs</li>
            <li>
              Sensitive personal information beyond what's needed for purchases
            </li>
            <li>
              Information about children (our services are for adults 18+)
            </li>
          </ul>
        </div>

        {/* How We Use It */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How We Use Your Information
          </h2>

          <p className="text-gray-700 mb-4">We use your information to:</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Process Your Orders
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Send you your product license keys</li>
            <li>Process payments</li>
            <li>Send order confirmations and receipts</li>
            <li>Handle refunds or issues with your order</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Communicate With You
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Respond to your questions or support requests</li>
            <li>Send important updates about your order</li>
            <li>Notify you of any issues with your purchase</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Prevent Fraud
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Detect and prevent fraudulent transactions</li>
            <li>Verify your identity if needed</li>
            <li>Protect our business and other customers</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Improve Our Service
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Understand how customers use our website</li>
            <li>Fix technical problems</li>
            <li>Make our site easier to use</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Legal Compliance
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Keep records for tax and accounting purposes</li>
            <li>Comply with legal requirements</li>
            <li>Respond to legal requests or court orders</li>
          </ul>
        </div>

        {/* Marketing */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Marketing Emails
          </h2>

          <p className="text-gray-700 mb-4">
            We're not big on spam. Here's our approach:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Transactional Emails (Required)
          </h3>
          <p className="text-gray-700 mb-4">
            We'll send you emails about your actual purchases (order
            confirmations, license delivery, etc.). You can't opt out of these
            because they're necessary for the service.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Marketing Emails (Optional)
          </h3>
          <p className="text-gray-700 mb-4">
            We might occasionally send promotional emails about deals or new
            products, but ONLY if you explicitly agree to receive them. You can
            unsubscribe anytime by clicking the unsubscribe link in any
            marketing email.
          </p>
        </div>

        {/* Who We Share With */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who We Share Your Information With
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Payment Processors
          </h3>
          <p className="text-gray-700 mb-4">
            We use third-party payment processors (like Stripe, PayPal, etc.) to
            handle credit card payments. They get the information needed to
            process your payment. We never store your full credit card details
            on our servers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Email Service Providers
          </h3>
          <p className="text-gray-700 mb-4">
            We use email services to send you your product licenses and order
            confirmations. They only get your email address and the content we
            need to send you.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Analytics Services
          </h3>
          <p className="text-gray-700 mb-4">
            We might use services like Google Analytics to understand how people
            use our website. This data is anonymized and aggregated.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Legal Requirements
          </h3>
          <p className="text-gray-700 mb-4">
            We may share your information if:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Required by law or legal process</li>
            <li>Necessary to prevent fraud or illegal activity</li>
            <li>Needed to protect our rights or property</li>
            <li>Part of a business sale or merger (we'd notify you first)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Who We DON'T Share With
          </h3>
          <p className="text-gray-700 mb-4">We don't:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Sell your data to advertisers or data brokers</li>
            <li>
              Share your info with unrelated third parties for their marketing
            </li>
            <li>Give your email to spammers</li>
          </ul>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Cookies & Tracking
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            What Are Cookies?
          </h3>
          <p className="text-gray-700 mb-4">
            Cookies are small text files stored on your device that help
            websites remember you and work properly.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            How We Use Cookies
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Essential cookies:</strong> Required for the site to
              function (like keeping items in your cart)
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how people
              use our site
            </li>
            <li>
              <strong>Security cookies:</strong> Protect against fraud and
              unauthorized access
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Managing Cookies
          </h3>
          <p className="text-gray-700 mb-4">
            You can disable cookies in your browser settings, but some parts of
            our site might not work properly if you do. Essential cookies are
            necessary for the site to function.
          </p>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How We Protect Your Information
          </h2>

          <p className="text-gray-700 mb-4">
            We take reasonable steps to protect your data:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>We use SSL/TLS encryption for data transmission</li>
            <li>
              Payment information is processed by PCI-compliant payment
              processors
            </li>
            <li>We limit employee access to customer data</li>
            <li>We use secure servers and databases</li>
            <li>We regularly update our security measures</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <p className="text-gray-800">
              <strong>Reality Check:</strong> No system is 100% secure. While we
              do our best to protect your information, we can't guarantee
              absolute security. If we discover a data breach, we'll notify
              affected customers as required by law.
            </p>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How Long We Keep Your Information
          </h2>

          <p className="text-gray-700 mb-4">
            We keep your information for different periods depending on what it
            is:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Order records:</strong> At least 7 years for tax and legal
              purposes
            </li>
            <li>
              <strong>Email address:</strong> Until you ask us to delete it (or
              we stop doing business)
            </li>
            <li>
              <strong>Payment details:</strong> We don't store full credit card
              info - that's handled by payment processors
            </li>
            <li>
              <strong>Website analytics:</strong> Typically 26 months, then
              aggregated or deleted
            </li>
          </ul>

          <p className="text-gray-700 mb-4">
            After the retention period, we'll either delete your data or
            anonymize it so it can't be linked back to you.
          </p>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Privacy Rights
          </h2>

          <p className="text-gray-700 mb-4">
            Depending on where you live, you may have the following rights:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Access Your Data
          </h3>
          <p className="text-gray-700 mb-4">
            You can request a copy of the personal information we have about
            you.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Correct Your Data
          </h3>
          <p className="text-gray-700 mb-4">
            If we have incorrect information about you, you can ask us to fix
            it.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Delete Your Data
          </h3>
          <p className="text-gray-700 mb-4">
            You can request that we delete your personal information, except
            for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              Information we're legally required to keep (like tax records)
            </li>
            <li>
              Information needed to resolve disputes or enforce agreements
            </li>
            <li>Information necessary to prevent fraud</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Opt Out of Marketing
          </h3>
          <p className="text-gray-700 mb-4">
            You can unsubscribe from marketing emails anytime.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            How to Exercise Your Rights
          </h3>
          <p className="text-gray-700 mb-4">
            Email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 hover:underline"
            >
              support@keyversely.com
            </a>{" "}
            with your request. We'll respond within 30 days. We may need to
            verify your identity before processing certain requests.
          </p>
        </div>

        {/* International Users */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            International Users
          </h2>

          <p className="text-gray-700 mb-4">
            We're based in the United States. If you're outside the US:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              Your information will be transferred to and processed in the US
            </li>
            <li>US privacy laws may be different from your country's laws</li>
            <li>By using our service, you consent to this transfer</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            For EU/UK Users (GDPR)
          </h3>
          <p className="text-gray-700 mb-4">
            If you're in the EU or UK, you have additional rights under GDPR:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              Right to data portability (get your data in a readable format)
            </li>
            <li>Right to object to processing</li>
            <li>Right to restrict processing</li>
            <li>
              Right to lodge a complaint with your data protection authority
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            For California Users (CCPA)
          </h3>
          <p className="text-gray-700 mb-4">
            California residents have specific rights under CCPA, including the
            right to know what personal information we collect and how we use
            it, and the right to request deletion of your information.
          </p>
        </div>

        {/* Third Party Links */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Links to Other Websites
          </h2>

          <p className="text-gray-700 mb-4">
            Our website might link to other sites (like Microsoft's download
            pages). We're not responsible for their privacy practices. When you
            click on external links, you're subject to their privacy policies,
            not ours.
          </p>
        </div>

        {/* Children */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Children's Privacy
          </h2>

          <p className="text-gray-700 mb-4">
            Our services are not intended for anyone under 18. We don't
            knowingly collect information from children. If you're a parent and
            think your child has given us their information, contact us and
            we'll delete it.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Changes to This Privacy Policy
          </h2>

          <p className="text-gray-700 mb-4">
            We might update this policy occasionally. If we make significant
            changes, we'll:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Update the "Last Updated" date at the top</li>
            <li>Notify you via email if the changes are major</li>
            <li>Post a notice on our website</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Continued use of our service after changes means you accept the
            updated policy.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Questions or Concerns?
          </h2>

          <p className="text-gray-700 mb-4">
            If you have questions about this privacy policy or how we handle
            your data, reach out:
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
              <strong>Mail:</strong> KEYVERSELY LLC, 63 N Burritt Ave Rm 100 PMB
              1180, Buffalo, Wyoming 82834, USA
            </p>
          </div>

          <p className="text-gray-700 mt-4">
            We'll do our best to respond to your questions within a reasonable
            timeframe (usually within 2-3 business days).
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
