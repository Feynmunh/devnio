'use client';

import Link from "next/link";
import Image from "next/image";
import Squares from "./sqaures";
import { ThemeToggle } from "@/components/theme-toggle";
import MobileNav from "@/components/mobile-nav";
import { useEffect, useState } from "react";
import { 
  ThreeDScrollTriggerContainer, 
  ThreeDScrollTriggerRow 
} from './reviews';

const services = [
  {
    title: "Product Strategy",
    body: "Discovery sprints, research, and positioning frameworks that anchor the roadmap.",
    deliverables: ["Customer mapping", "Messaging kit", "Launch sequencing"],
  },
  {
    title: "Experience Design",
    body: "Interface, motion, and system design for web and native platforms.",
    deliverables: ["Hi-fi systems", "Design tokens", "Prototype library"],
  },
  {
    title: "Engineering",
    body: "Production-ready builds leveraging Next.js, server components, and edge compute.",
    deliverables: ["Composable UI", "CMS integration", "Performance hardening"],
  },
];

const pricing = [
  {
    name: "Basic",
    price: "$19.99",
    cadence: "/monthly",
    description: "Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.",
    features: [
      "Manage, 1,000+ subscribers",
      "10 landing pages",
      "Customizable domain",
      "15+ integrations",
      "Basic support",
    ],
    highlight: false,
    ctaLabel: "Upgrade to Basic",
    ctaVariant: "dark",
  },
  {
    name: "Pro",
    price: "$49.99",
    cadence: "/monthly",
    description: "Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.",
    features: [
      "Manage, 2,500+ subscribers",
      "50 landing pages",
      "Customizable domain",
      "25+ integrations",
      "Normal support",
    ],
    highlight: true,
    ctaLabel: "Upgrade to Pro",
    ctaVariant: "light",
  },
  {
    name: "Premium",
    price: "$99.99",
    cadence: "/monthly",
    description: "Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.",
    features: [
      "Unlimited subscribers",
      "Unlimited landing pages",
      "Customizable domain",
      "150+ integrations",
      "Personalized support",
    ],
    highlight: false,
    ctaLabel: "Select Plan",
    ctaVariant: "dark",
  },
];

const projects = [
  {
    name: "Hotel Website",
    summary: "Navigation OS for electric mobility fleets.",
    result: "+38% conversion on paid pilots",
    previewUrl: "https://hotelportfolio.devnio.tech/",
    previewImage: "/hotel.jpeg",
  },
  {
    name: "Gym Website",
    summary: "AI-native collaboration suite for design-forward startups.",
    result: "Seed round closed in 9 weeks",
    previewUrl: "https://gymportfolio.devnio.tech/",
    previewImage: "/gym.jpeg",
  },
  { 
    name: "Law Portfolio",
    summary: "Patient onboarding surfaces with realtime care routing.",
    result: "4x faster intake and zero-touch triage",
    previewUrl: "https://lawyerportfolio.devnio.tech/",
    previewImage: "/Law.jpeg"
  },
  {
    name: "Car Service",
    summary: "Executive cockpit for revenue orgs operating globally.",
    result: "$12M ARR unlocked via upsell moments",
    previewUrl: "https://carportfolio.devnio.tech/",
    previewImage: "/cars.jpeg",
  },
];

const faqs = [
  {
    q: "How fast can we start?",
    a: "Kickoffs happen within 10 business days once scope and deposit are locked.",
  },
  {
    q: "Do you partner with in-house teams?",
    a: "Yes. Most engagements embed alongside internal design and engineering for co-building.",
  },
  {
    q: "What stack do you use?",
    a: "Next.js, Vercel, and a component system built on Tailwind + Radix for speed.",
  },
  {
    q: "Can we book a one-off sprint?",
    a: "The Launch package is perfect for intense, outcomes-focused delivery windows.",
  },
];

const stats = [
  { label: "Products shipped", value: "120+" },
  { label: "Avg time to launch", value: "21 days" },
  { label: "NPS", value: "74" },
];

const reviewsRowOne = [
  {
    quote: "Outstanding work from start to finish.",
    client: "Client 1",
  },
  {
    quote: "Transformed our digital presence completely.",
    client: "Client 2",
  },
  {
    quote: "Highly professional and creative team.",
    client: "Client 3",
  },
];

const reviewsRowTwo = [
  {
    quote: "The only partner who understood the brief on day one.",
    client: "Client 4",
  },
  {
    quote: "Launch velocity doubled after their systems landed.",
    client: "Client 5",
  },
  {
    quote: "They think in business outcomes, not just pixels.",
    client: "Client 6",
  },
];

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const heroAscii = `
░███████                                    ░██              
░██   ░██                                                    
░██    ░██  ░███████  ░██    ░██ ░████████  ░██ ░███████     
░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██░██    ░██    
░██    ░██ ░█████████  ░██  ░██  ░██    ░██ ░██░██    ░██    
░██   ░██  ░██          ░██░██   ░██    ░██ ░██░██    ░██    
░███████    ░███████     ░███    ░██    ░██ ░██ ░███████     
                                                             
                                                             
                                                             `;

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(!document.documentElement.classList.contains('light'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const navContainerClasses = `flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-xl transition-colors duration-300 ${
    isDark ? 'border border-white/10 bg-black/50' : 'border border-black/10 bg-white/90'
  }`;

  const logoBadgeClasses = `flex h-11 w-11 items-center justify-center rounded-full text-[0.6rem] font-bold tracking-[0.3em] transition-colors duration-300 ${
    isDark ? 'border border-white/20 bg-white/5 text-white' : 'border border-black/10 bg-white text-black'
  }`;

  const brandTitleClasses = `text-sm font-semibold tracking-[0.4em] transition-colors duration-300 ${
    isDark ? 'text-white' : 'text-black'
  }`;

  const brandSubtitleClasses = `text-[0.5rem] tracking-[0.5em] transition-colors duration-300 ${
    isDark ? 'text-white/40' : 'text-black/50'
  }`;

  const navLinkClasses = `text-[0.65rem] font-medium tracking-[0.3em] transition-colors duration-300 ${
    isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
  }`;

  const ctaClasses = `flex items-center gap-2 rounded-full border px-5 py-2.5 text-[0.6rem] font-semibold tracking-[0.3em] transition-colors duration-300 ${
    isDark
      ? 'border-white/20 text-white hover:border-white'
      : 'border-black/20 text-black hover:border-black'
  }`;

  return (
    <>
      {isDark && (
        <div className="fixed inset-0 z-0">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal'
            borderColor='#353434b0'
            hoverFillColor='#222'
          />
        </div>
      )}
      <header className="relative z-10 mx-auto mt-6 max-w-5xl px-4 sm:px-6">
        <nav
          className={navContainerClasses}
          aria-label="Primary navigation"
        >
          <Link href="/" className="flex items-center gap-3">
            <span className={logoBadgeClasses}>
              DN
            </span>
            <div className="flex flex-col">
              <span className={brandTitleClasses}>DEVNIO</span>
              <span className={brandSubtitleClasses}>DIGITAL STUDIO</span>
            </div>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={navLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`${ctaClasses} hidden sm:flex`}
            >
              <span className="text-[0.5rem]">●</span> START A PROJECT
            </Link>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <MobileNav links={navLinks} isDark={isDark} />
          </div>
        </nav>
      </header>
      <section aria-labelledby="hero-heading" className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-12 text-white sm:gap-12 sm:px-6 sm:pb-16 sm:pt-20 lg:flex-row lg:items-end">
        <div className="flex-1 space-y-4 sm:space-y-6">
          <div aria-label="Devnio brand logo">
            <h1 id="hero-heading" className="sr-only">
              Devnio - We build stark, confident digital experiences that feel inevitable.
            </h1>
            <pre
              aria-hidden="true"
              className="font-['Courier_New','Courier',monospace] text-teal-400 w-full max-w-full overflow-hidden leading-[1.2] whitespace-pre text-[clamp(0.34rem,1.25vw,1.1rem)]"
            >
              {heroAscii}
            </pre>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
        

Devnio turns your ideas, vision, and business into powerful, modern websites. We work closely with startups, creators, and brands to bring their digital presence to life with one team and one clear outcome.

          </p>
          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-4" role="group" aria-label="Call to action buttons">
            <Link
              href="/contact"
                className="rounded-full border border-white/30 bg-black/90 px-6 py-3 text-center font-semibold text-white transition hover:border-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Schedule an introductory meeting with Devnio"
            >
              Book an intro
            </Link>
            <Link
              href="#pricing"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="View our pricing and retainer packages"
            >
              View retainers
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-3 pb-10 sm:gap-4 sm:pb-14">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            Our Services
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-white sm:max-w-3xl sm:text-3xl">
              Full-stack capability without the agency fog.
            </h2>
            <p className="text-xs text-white/50 sm:max-w-sm sm:text-sm">
              Everything is delivered as modular playbooks and systems so your team keeps shipping after we leave.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 text-sm sm:rounded-3xl sm:p-6">
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
                <p className="text-xs text-white/60 sm:text-sm">{service.body}</p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-white/70 sm:mt-6 sm:text-sm">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <header className="flex flex-col gap-2 pb-8 sm:gap-3 sm:pb-12">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            Our Prices
          </p>
          <h2 id="pricing-heading" className="text-2xl font-semibold text-white sm:text-3xl">
            Simple retainers with zero surprise fees.
          </h2>
          <p className="max-w-2xl text-xs text-white/60 sm:text-sm">
            Choose the engagement model that matches your pace. Every package includes a
            dedicated pod, async updates, and weekly retros.
          </p>
        </header>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((plan) => {
            const planId = `plan-${plan.name.toLowerCase().replace(/\s+/g, "-")}`;
            const isHighlight = plan.highlight;
            const baseCard = "bg-white text-black shadow-[0_35px_90px_rgba(0,0,0,0.18)] light:bg-white light:text-black";
            const topPanel = isHighlight
              ? "rounded-[28px] border border-black/5 bg-[#f6f6f6] light:bg-[#f6f6f6] p-8 text-left"
              : "rounded-[28px] border border-black/5 bg-white light:bg-white p-8 text-left";
            const featureBg = "rounded-[28px] border border-black/5 bg-[#f9f9f9] light:bg-[#f9f9f9] text-black/70 light:text-black/70";
            const badgeColor = "bg-black text-white light:bg-black light:text-white";
            const ctaStyle = isHighlight
              ? "border border-black/25 bg-transparent text-black hover:border-black focus-visible:outline-black light:border-black/25 light:text-black"
              : "border border-black/10 bg-white text-black hover:bg-black/5 focus-visible:outline-black light:border-black/10 light:bg-white light:text-black";
            const labelColor = "text-black/45 light:text-black/45";
            const priceColor = "text-black light:text-black";
            const cadenceColor = "text-black/50 light:text-black/50";
            const descriptionColor = "text-black/60 light:text-black/60";

            return (
              <article
                key={plan.name}
                aria-labelledby={planId}
                className={`flex h-full flex-col gap-4 rounded-[28px] p-4 sm:gap-6 sm:rounded-[36px] sm:p-6 ${baseCard}`}
              >
                <div className={topPanel}>
                  <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.4em] sm:text-xs ${labelColor}`}>
                    {plan.name}
                  </p>
                  <p className={`mt-4 text-3xl font-semibold sm:mt-6 sm:text-4xl ${priceColor}`}>
                    {plan.price}
                    <span className={`ml-2 text-sm font-medium sm:text-base ${cadenceColor}`}>{plan.cadence}</span>
                  </p>
                  <p className={`mt-3 text-xs sm:mt-4 sm:text-sm ${descriptionColor}`}>{plan.description}</p>
                </div>

                <div className={`${featureBg} px-5 py-4 sm:px-8 sm:py-6`}>
                  <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${badgeColor}`}>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`rounded-full px-4 py-2.5 text-center text-xs font-semibold tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-5 sm:py-3 sm:text-sm ${ctaStyle}`}
                  aria-label={`Contact Devnio to ${plan.ctaLabel.toLowerCase()}`}
                >
                  {plan.ctaLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-2 pb-8 sm:gap-3 sm:pb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            Portfolio
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Proof we obsess over outcomes.</h2>
        </div>
        <div className="grid gap-4 sm:gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const host = project.previewUrl
              .replace(/^https?:\/\//, "")
              .replace(/\/$/, "");

            return (
              <div key={project.name} className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 sm:rounded-3xl sm:p-6">
                <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.4em] text-white/40 sm:text-xs">
                  <span>Case Study</span>
                  <span>Launch</span>
                </div>

                <Link
                  href={project.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block overflow-hidden rounded-2xl border border-white/5 bg-white/5"
                  aria-label={`Open visual preview of ${project.name}`}
                >
                  <Image
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    width={640}
                    height={360}
                    sizes="(min-width: 768px) 460px, 100vw"
                    className="h-48 w-full object-cover object-top"
                  />
                </Link>

                <h3 className="mt-4 text-xl font-semibold sm:mt-5 sm:text-2xl">{project.name}</h3>
                <p className="mt-2 text-xs text-white/60 sm:text-sm">{project.summary}</p>
                <p className="mt-4 text-xs font-semibold text-white sm:mt-6 sm:text-sm">{project.result}</p>
                <Link
                  href={project.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white hover:text-white"
                  aria-label={`Open live preview of ${project.name}`}
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[0.55rem] font-medium tracking-[0.4em] text-white/40">Preview</span>
                    <span className="text-sm tracking-[0.2em] text-white">{host}</span>
                  </div>
                  <span className="text-base">↗</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-2 pb-8 sm:gap-3 sm:pb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            Reviews
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">What our clients say.</h2>
        </div>
        <ThreeDScrollTriggerContainer className="space-y-6">
          <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
            {reviewsRowOne.map((review) => (
              <div
                key={review.client}
                className="px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl min-w-[300px] sm:min-w-[350px]"
              >
                <p className="text-white/80 text-sm mb-2 whitespace-normal leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-white/40 text-xs">— {review.client}</p>
              </div>
            ))}
          </ThreeDScrollTriggerRow>
          <ThreeDScrollTriggerRow baseVelocity={6} direction={-1}>
            {reviewsRowTwo.map((review) => (
              <div
                key={review.client}
                className="px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl min-w-[300px] sm:min-w-[350px]"
              >
                <p className="text-white/80 text-sm mb-2 whitespace-normal leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-white/40 text-xs">— {review.client}</p>
              </div>
            ))}
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="flex flex-col gap-2 pb-8 sm:gap-3 sm:pb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Transparent answers before we start.</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 text-white/70 sm:rounded-3xl sm:p-6"
            >
              <summary className="cursor-pointer text-base font-semibold text-white sm:text-lg">
                {item.q}
              </summary>
              <p className="mt-3 text-xs sm:text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
