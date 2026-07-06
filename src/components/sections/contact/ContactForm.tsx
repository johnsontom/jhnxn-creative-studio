"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setStatus("✅ Project enquiry sent successfully!");

      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="Your Name"
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-white outline-none transition focus:border-violet-500"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Email Address"
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-white outline-none transition focus:border-violet-500"
      />

      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        required
        className="w-full rounded-2xl border border-white/10 bg-violet-500 px-6 py-4 text-white outline-none transition focus:border-violet-500"
      >
        <option value="">Select a Service</option>
        <option value="Website Design">Website Design</option>
        <option value="Website Development">
          Website Development
        </option>
        <option value="Music Production">
          Music Production
        </option>
        <option value="Branding">
          Branding
        </option>
      </select>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={6}
        required
        placeholder="Tell me about your project..."
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-white outline-none transition focus:border-violet-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          px-8
          py-4
          font-semibold
          text-white
          transition
          hover:scale-[1.02]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Sending..." : "Start Your Project →"}
      </button>

      {status && (
        <p className="text-center text-sm text-zinc-300">
          {status}
        </p>
      )}
    </form>
  );
}