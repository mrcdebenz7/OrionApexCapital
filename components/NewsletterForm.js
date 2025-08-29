import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Loading...");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.message || "Subscribed!");
      setEmail("");
    } catch (e) {
      setStatus("Subscription failed. Try again later.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal"
      />
      <button className="btn btn-primary w-full sm:w-auto" type="submit">Get Insights</button>
      {status && <p className="text-sm text-slate-300">{status}</p>}
    </form>
  );
}