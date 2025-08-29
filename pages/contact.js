import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <p className="text-slate-300">
        Tell us about your objectives and constraints. We’ll reply within 1–2 business days.
      </p>
      <ContactForm />
    </section>
  );
}