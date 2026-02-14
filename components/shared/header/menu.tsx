import type { Metadata } from "next";

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About KEYVERSELY
          </h1>
          <p className="text-xl text-blue-100">
            Legit Microsoft Software. No Nonsense.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-6xl py-12">
        {/* Who We Are */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hey there! We're KEYVERSELY, a small digital products business based
            out of Wyoming. We started in late 2025 because we saw too many
            people getting burned by shady software sellers online. You know the
            ones - unrealistic prices, sketchy keys that stop working, no
            support when things go wrong.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We specialize in Microsoft software licenses, and here's our
            promise: everything we sell is legitimate and properly licensed. No
            grey market stuff, no stolen keys, no BS. We work directly with
            authorized channels to make sure you're getting the real deal at
            fair prices.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our goal is simple - help people get the software they need without
            overpaying or worrying about whether their license is legit. We're
            here to make this whole process straightforward and stress-free.
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
                100% Genuine Microsoft Licenses
              </h3>
              <p className="text-gray-700">
                Every license we sell is authentic and properly sourced. You'll
                get real product keys that work with Microsoft's activation
                systems - no workarounds, no hacks, just legitimate software.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Instant Delivery
              </h3>
              <p className="text-gray-700">
                Once your payment clears, you'll get your license key via email
                within minutes. No waiting for packages or dealing with shipping
                - it's all digital and instant.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-700">
                We're not trying to compete with those "too good to be true"
                prices you see around the web. Our prices are fair for genuine
                licenses - you get what you pay for.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Real Support
              </h3>
              <p className="text-gray-700">
                Got questions? Running into issues? We actually respond. No
                automated nonsense - just real help when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What You Can Expect From Us
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  No Fake or Pirated Software
                </h3>
                <p className="text-gray-700">
                  Look, the internet is full of sketchy software sellers. We're
                  not one of them. Every single license we sell is genuine and
                  properly sourced. If it's not legit, we don't sell it. Period.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  We're Upfront About Everything
                </h3>
                <p className="text-gray-700">
                  We'll tell you exactly what type of license you're getting
                  (OEM, retail, whatever), any restrictions that apply, and what
                  to expect. No fine print tricks or surprises after you buy.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  We Actually Care
                </h3>
                <p className="text-gray-700">
                  Your satisfaction matters to us. If something goes wrong,
                  we'll work with you to fix it. We're building a business here,
                  not just making quick sales and disappearing.
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
            Why Trust Us?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We get it - buying software online can feel sketchy. There are a lot
            of scammers out there. Here's what makes us different:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                We're a real registered business with a physical address (not
                some P.O. box in a random country)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                We tell you exactly what you're getting before you buy - no bait
                and switch
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                You can actually reach us if something goes wrong (and we'll
                respond)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                We follow the rules - all the boring legal stuff that legitimate
                businesses do
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Your payment info is secure - we use standard security measures
                to keep your data safe
              </span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions? Just Ask</h2>
          <p className="text-lg text-blue-100 mb-6">
            Not sure which Microsoft license you need? Want to know if a key
            will work for your situation? Hit us up - we're happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/products"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white"
            >
              See What We Sell
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
