export default function AboutPage() {
  const pillars = [
    {
      title: "Small, senior squads",
      body: "Every engagement is led by partners with 10+ years at product-led companies.",
    },
    {
      title: "Systems over polish",
      body: "We leave behind the frameworks that keep your team shipping quickly.",
    },
    {
      title: "Velocity with rigor",
      body: "Tight sprints, measurable outcomes, and obsessive QA keep momentum high.",
    },
  ];

  const milestones = [
    { year: "2019", note: "Launched Devnio to build for founders in stealth." },
    { year: "2021", note: "Partnered with three unicorns on product strategy." },
    { year: "2023", note: "Expanded into global growth teams across EU & APAC." },
    { year: "2025", note: "120+ launches, 18 venture-backed exits supported." },
  ];

  return (
    <section className="mx-auto max-w-5xl space-y-16 px-6 py-20">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
          About Devnio
        </p>
        <h1 className="text-4xl font-semibold text-white">
          A distributed studio designing confident, high-performing digital products.
        </h1>
        <p className="max-w-3xl text-lg text-white/60">
          We combine strategy, design, and engineering into a single autonomous unit. No
          bloated account teams—just the experts who can uncover opportunity and ship it
          live.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm text-white/60">{pillar.body}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">Milestones</h2>
        <ul className="space-y-4">
          {milestones.map((item) => (
            <li
              key={item.year}
              className="flex flex-col gap-2 border-b border-white/10 pb-4 last:border-none last:pb-0 md:flex-row md:items-center md:justify-between"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                {item.year}
              </span>
              <p className="text-white/70">{item.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
