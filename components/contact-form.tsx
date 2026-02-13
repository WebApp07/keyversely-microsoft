"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      setMessage("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        We'd love to hear from you. Fill out the form or reach us directly at{" "}
        <a
          href="mailto:blbig01@hotmail.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          blbig01@hotmail.com
        </a>{" "}
        or via{" "}
        <a
          href="https://wa.me/33758329526"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={50}
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-gray-600 dark:text-white transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-gray-600 dark:text-white transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={1000}
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-gray-600 dark:text-white transition"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 font-semibold rounded-lg text-white transition ${
              status === "sending"
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {status === "sending" ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : null}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
        {status === "success" && (
          <div className="flex items-center justify-center text-green-600 gap-2 text-sm font-medium mt-4">
            <CheckCircle className="h-5 w-5" />
            {message}
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center text-red-600 gap-2 text-sm font-medium mt-4">
            <AlertCircle className="h-5 w-5" />
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
