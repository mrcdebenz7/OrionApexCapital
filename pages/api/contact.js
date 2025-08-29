import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, message } = req.body || {};
  const to = process.env.CONTACT_TO_EMAIL || "contact@orionapexcapital.com";
  try {
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Orion Apex <no-reply@orionapexcapital.com>",
        to: [to],
        reply_to: email || undefined,
        subject: `New message from ${name || "Website Visitor"}`,
        html: `<h2>New Contact</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${(message||"").replace(/\n/g, "<br/>")}</p>`,
      });
    } else {
      console.log("[CONTACT] >>", { name, email, message });
    }
    return res.json({ message: "Thanks! We received your message." });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Failed to send message." });
  }
}