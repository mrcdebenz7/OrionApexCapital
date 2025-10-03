export function ContactForm() {
  return (
    <form className="space-y-4" method="post" action="/api/contact">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="input"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <textarea
        className="textarea"
        name="message"
        placeholder="Tell us about your goals..."
        required
      ></textarea>
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
    </form>
  );
}

