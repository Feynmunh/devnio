import Link from "next/link";

export default function ContactPage() {
  const contacts = [
    { label: "Email", value: "projects@devnio.studio" },
    { label: "Headquarters", value: "Remote-first across NYC · London" },
    { label: "Response time", value: "Under 24 hours on weekdays" },
  ];

  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Tell us about the product you need to launch.
        </h1>
        <p className="text-white/60">
          Share the outcome you are chasing, key dates, and links to anything existing. We
          will reply with a tailored sprint plan and transparent quote.
        </p>

        <dl className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex flex-col gap-1">
              <dt className="text-white/50">{contact.label}</dt>
              <dd className="text-white">{contact.value}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="mailto:projects@devnio.studio"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
        >
          Email the partners
        </Link>
      </div>

      <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div>
          <label className="block text-xs uppercase tracking-[0.3em] text-white/50" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none focus:border-white"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.3em] text-white/50" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none focus:border-white"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.3em] text-white/50" htmlFor="timeline">
            Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            placeholder="Q1 pilot, Q2 rollout, etc."
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none focus:border-white"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.3em] text-white/50" htmlFor="message">
            Project summary
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="What should we build together?"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/80"
        >
          Send request
        </button>
        <p className="text-xs text-white/40">
          This form is non-functional in this demo. Replace with your preferred CRM or form
          endpoint before launch.
        </p>
      </form>
    </section>
  );
}
