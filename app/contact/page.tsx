import React from "react";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">
          We're here to help with your digital product purchases and licensing
          questions
        </p>
      </section>

      {/* Customer Info */}
      <section className="bg-muted/50 dark:bg-muted/30 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Customer Service</h2>
        <ul className="space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-300">
          <li>
            <strong>Business Name:</strong> KEYVERSELY LLC
          </li>
          <li>
            <strong>Legal Address:</strong> 63 N Burritt Ave Rm 100 PMB 1180,
            Buffalo, Wyoming 82834, United States
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              support@keyversely.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (307) 785-6160
            {/* Add your phone number */}
          </li>
          <li>
            <strong>EIN:</strong> 61-2315882
          </li>
          <li>
            <strong>Business Hours:</strong> Monday–Friday, 9:00 AM – 6:00 PM
            EST
          </li>
          <li>
            <strong>Response Time:</strong> We typically respond within 2-3
            business days
          </li>
        </ul>
        <p className="text-xs text-muted-foreground mt-4">
          <strong>Note:</strong> We are a digital products business. The address
          above is our registered business location, not a physical retail
          store.
        </p>
      </section>

      {/* Multiple Contact Methods (GMC likes to see options) */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="bg-muted/50 dark:bg-muted/30 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Email Support</h3>
          <p className="text-sm text-muted-foreground mb-3">
            For order issues, activation help, or general inquiries
          </p>
          <a
            href="mailto:support@keyversely.com"
            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Email Us
          </a>
        </div>

        <div className="bg-muted/50 dark:bg-muted/30 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Help Center</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Find answers to common questions about orders and activation
          </p>
          <a
            href="/help"
            className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
          >
            Visit Help Center
          </a>
        </div>
      </section>

      {/* What We Can Help With */}
      <section className="bg-muted/50 dark:bg-muted/30 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">What We Can Help With</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-gray-800 dark:text-gray-300">
            <li>✓ Order status and delivery issues</li>
            <li>✓ Product key activation problems</li>
            <li>✓ Refund requests (see our refund policy)</li>
            <li>✓ Product questions before purchase</li>
          </ul>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300">
            <li>✓ Bulk/business order inquiries</li>
            <li>✓ Invoice requests</li>
            <li>✓ License type clarifications</li>
            <li>✓ Account and billing questions</li>
          </ul>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          <strong>Note:</strong> For technical support with Microsoft software
          (bugs, how-to, features), please contact Microsoft Support directly at{" "}
          <a
            href="https://support.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            support.microsoft.com
          </a>
        </p>
      </section>

      {/* Need Help Note */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Need Help?</h2>
        <p className="text-muted-foreground">
          Use the form below to send us a message. For faster support, include
          your order number if you have one. We typically respond within 2-3
          business days.
        </p>
      </section>

      {/* Contact Form */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Send Us a Message</h2>
        <div className="bg-background p-6 rounded-xl shadow">
          <ContactForm />
        </div>
      </section>

      {/* Additional Trust Signals for GMC */}
      <section className="bg-muted/50 dark:bg-muted/30 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Our Commitment</h2>
        <div className="text-sm text-gray-800 dark:text-gray-300 space-y-2">
          <p>
            At KEYVERSELY, we take customer service seriously. Every license we
            sell is genuine and properly sourced. If you have any issues with
            your purchase, we'll work with you to make it right.
          </p>
          <p>
            We're a registered business based in Wyoming, USA. All purchases are
            backed by our{" "}
            <a
              href="/refund-policy"
              className="text-blue-600 underline hover:text-blue-700"
            >
              refund policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              className="text-blue-600 underline hover:text-blue-700"
            >
              terms of service
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
