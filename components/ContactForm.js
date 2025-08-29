import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message || "Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus("Failed to send. Try again later.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="rounded-lg bg-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal"
          placeholder="Your name"
          value={form.name}
          onChange={(e)=>setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="rounded-lg bg-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e)=>setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <textarea
        rows={6}
        className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal"
        placeholder="Tell us about your goals..."
        value={form.message}
        onChange={(e)=>setForm({ ...form, message: e.target.value })}
        required
      />
      <button className="btn btn-primary" type="submit">Send Message</button>
      {status && <p className="text-sm text-slate-300">{status}</p>}
    </form>
  );
}