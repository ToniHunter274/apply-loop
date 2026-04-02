"use client";

import React, { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Sparkles,
  ShieldCheck,
  FileSearch,
  BadgeCheck,
  Briefcase,
  Bell,
  Send,
  Target,
  Brain,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Search,
  UserCircle2,
  Wand2,
  ChevronUp,
  HelpCircle,
  CalendarDays,
  Package,
  ClipboardList,
  Apple,
  Star,
  Quote,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

type IconType = React.ComponentType<{ className?: string }>;

type FeatureItem = {
  title: string;
  desc: string;
  icon: IconType;
};

type FaqItem = {
  q: string;
  a: string;
  active?: boolean;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type HowStep = {
  title: string;
  icon: IconType;
  className: string;
};

const whatWeDo: FeatureItem[] = [
  {
    title: "Optimize Resume",
    desc: "ATS-friendly and recruiter-approved to increase your chances of getting noticed.",
    icon: FileSearch,
  },
  {
    title: "Job Application",
    desc: "Personalized applications sent daily based on your goals.",
    icon: Briefcase,
  },
  {
    title: "Land Interview",
    desc: "We help you prepare so you show up confident and ready.",
    icon: Target,
  },
];

const companyLogos: string[] = [
  "Deloitte.",
  "Interswitch",
  "Meta",
  "ORACLE",
  "TESLA",
  "Google",
];

const navLinks = [
  { label: "Services", href: "#what-we-do" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faqs", href: "#faqs" },
];

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#what-we-do" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Join us", href: "#join-us" },
  { label: "Become a client", href: "#become-client" },
];

const howSteps: HowStep[] = [
  {
    title: "Schedule a call",
    icon: CalendarDays,
    className: "left-0 top-0",
  },
  {
    title: "Select a package",
    icon: Package,
    className: "right-[20%] top-[22%]",
  },
  {
    title: "Preference Disclosure",
    icon: ClipboardList,
    className: "left-[14%] top-[52%]",
  },
  {
    title: "Application Begins",
    icon: Briefcase,
    className: "right-[14%] bottom-[8%]",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
  {
    name: "Olukemi David T.",
    role: "UX Designer",
    quote:
      "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I got from Mike Fifer.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How does Applyloop work?",
    a: "Applyloop starts with a quick consultation, aligns your goals, optimizes your application materials, and then manages tailored submissions on your behalf.",
  },
  {
    q: "Will I still have control over my job applications?",
    a: "Yes. You stay in control of your preferences, target roles, and final direction while Applyloop handles the heavy lifting.",
  },
  {
    q: "Are the applications customized for each job?",
    a: "Yes. Every application is tailored for the role, using optimized keywords, recruiter-friendly positioning, and context-specific edits.",
  },
  {
    q: "How many jobs will you apply to for me?",
    a: "This depends on your subscription plan. Each plan includes a set number of applications per week, which you can adjust or upgrade anytime.",
    active: true,
  },
];

const marqueeItems = [...companyLogos, ...companyLogos];

function SectionReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}

function GridGlow({ dark }: { dark: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: dark
          ? "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)"
          : "linear-gradient(to right, rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(circle at center, black 55%, transparent 100%)",
      }}
    />
  );
}

function Pill({
  children,
  dark,
}: {
  children: ReactNode;
  dark: boolean;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em]",
        dark
          ? "border-white/10 bg-[#2b5fd8] text-white"
          : "border-blue-200 bg-blue-50 text-blue-700",
      ].join(" ")}
    >
      <span
        className={[
          "h-2 w-2 rounded-full",
          dark ? "bg-white" : "bg-blue-600",
        ].join(" ")}
      />
      {children}
    </div>
  );
}

function FeatureCard({ item, dark }: { item: FeatureItem; dark: boolean }) {
  const Icon = item.icon;

  return (
    <div
      className={[
        "rounded-2xl border px-4 py-5 text-left",
        dark ? "border-white/10 bg-[#11204b]/70" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "mb-4 flex h-8 w-8 items-center justify-center rounded-lg",
          dark ? "bg-blue-500/15 text-blue-300" : "bg-blue-50 text-blue-700",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </div>
      <h3 className={["text-lg font-medium", dark ? "text-white" : "text-slate-900"].join(" ")}>
        {item.title}
      </h3>
      <p className={["mt-2 max-w-xs text-sm leading-6", dark ? "text-white/65" : "text-slate-600"].join(" ")}>
        {item.desc}
      </p>
    </div>
  );
}

function LoadingLine({ width, delay = 0 }: { width: string; delay?: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/8">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-400/20 via-blue-300/80 to-blue-400/20"
        style={{ width }}
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "120%"] }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        }}
      />
    </div>
  );
}

function LoadingStepsCard({ dark }: { dark: boolean }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[26px] border p-3 shadow-[0_30px_80px_-25px_rgba(59,130,246,0.35)] sm:p-4",
        dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white/90",
      ].join(" ")}
    >
      <div className="grid gap-3 md:grid-cols-2">
        {[
          { title: "AI Resume Optimization", icon: Wand2, tone: "bg-blue-100 text-blue-700" },
          { title: "Human Specialist Review", icon: Users, tone: "bg-violet-100 text-violet-700" },
        ].map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={[
                "rounded-2xl border p-5",
                dark ? "border-white/8 bg-[#0d1630]/80" : "border-slate-200 bg-slate-50",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div className={["flex h-9 w-9 items-center justify-center rounded-xl", step.tone].join(" ")}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className={["text-sm font-medium", dark ? "text-white" : "text-slate-900"].join(" ")}>{step.title}</div>
                <motion.div
                  className="ml-auto h-2.5 w-2.5 rounded-full bg-blue-400"
                  animate={{ opacity: [0.35, 1, 0.35], scale: [0.95, 1.15, 0.95] }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  }}
                />
              </div>

              <div className="mt-6 space-y-3">
                <LoadingLine width="78%" delay={0.05 + idx * 0.15} />
                <LoadingLine width="92%" delay={0.18 + idx * 0.15} />
                <LoadingLine width="84%" delay={0.3 + idx * 0.15} />
              </div>
            </div>
          );
        })}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-400/0 via-blue-300/10 to-transparent blur-xl"
        animate={{ x: ["-20%", "520%"] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  );
}

function CompanyLogo({ logo, idx, dark }: { logo: string; idx: number; dark: boolean }) {
  return (
    <div
      className={[
        "flex min-w-[180px] items-center justify-center px-6 text-center text-3xl font-semibold tracking-tight",
        dark
          ? idx % 6 === 2
            ? "text-blue-400"
            : idx % 6 === 3
              ? "text-red-400"
              : "text-white/80"
          : idx % 6 === 2
            ? "text-blue-600"
            : idx % 6 === 3
              ? "text-red-500"
              : idx % 6 === 5
                ? "text-blue-500"
                : "text-slate-700",
      ].join(" ")}
    >
      {logo}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="min-w-[300px] rounded-[18px] border border-white/10 bg-[#11204b]/85 p-4 text-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] sm:min-w-[360px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white/90 text-slate-900">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium leading-none">{item.name}</div>
            <div className="mt-1 text-[11px] text-white/65">{item.role}</div>
          </div>
        </div>
        <Apple className="h-4 w-4 text-white" />
      </div>
      <p className="mt-4 text-sm leading-6 text-white/80">{item.quote}</p>
    </div>
  );
}

function FAQCard({ item, index }: { item: FaqItem; index: number }) {
  const bg = item.active
    ? "bg-[#6d9be8]"
    : index === 1
      ? "bg-[#f0aa59]"
      : index === 2
        ? "bg-[#15336b]"
        : "bg-[#3561d3]";

  return (
    <div className={["rounded-t-[18px] px-6 py-4 text-white", bg, item.active ? "rounded-b-[18px] pb-16" : "-mb-1"].join(" ")}>
      <div className="text-sm font-medium">{item.q}</div>
      {item.active ? <p className="mt-3 max-w-2xl text-xs leading-6 text-white/85">{item.a}</p> : null}
    </div>
  );
}

function HowItWorksDiagram() {
  return (
    <div className="relative h-[420px] w-full max-w-[560px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 420" fill="none">
        <path d="M136 94 H300 V170" stroke="rgba(120,170,255,0.55)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M300 170 H150 V252" stroke="rgba(120,170,255,0.55)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M225 304 H368 V360" stroke="rgba(120,170,255,0.55)" strokeWidth="1.5" strokeDasharray="6 6" />
      </svg>

      {howSteps.map((step) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className={["absolute w-[170px] rounded-2xl border border-white/10 bg-[#11204b]/85 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]", step.className].join(" ")}>
            <div className="flex items-center gap-3">
              <div className="h-12 w-3 rounded-full bg-[#2f5fe0]" />
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 text-sm text-white">{step.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function ApplyLoopLandingPage() {
  const [dark, setDark] = useState(true);

  const theme = useMemo(
    () => ({
      page: dark ? "bg-[#071226] text-white" : "bg-[#f3f4f6] text-slate-900",
      panel: dark
        ? "bg-[radial-gradient(circle_at_top,_rgba(40,94,255,0.18),_transparent_32%),linear-gradient(180deg,#06101f_0%,#081529_55%,#071226_100%)]"
        : "bg-[linear-gradient(180deg,#f8f9fb_0%,#f3f4f6_100%)]",
      muted: dark ? "text-white/65" : "text-slate-600",
      line: dark ? "border-white/8" : "border-slate-200",
      card: dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white/80",
      button: dark
        ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-[0_20px_60px_-20px_rgba(59,130,246,0.9)]"
        : "bg-blue-600 text-white shadow-[0_20px_60px_-20px_rgba(37,99,235,0.7)]",
      sectionBlue: dark
        ? "bg-[radial-gradient(circle_at_center,_rgba(44,95,255,0.16),_transparent_35%),linear-gradient(180deg,#081527_0%,#07101f_50%,#081527_100%)]"
        : "bg-[#2455c9] text-white",
      footer: dark
        ? "bg-[linear-gradient(180deg,#071226_0%,#04101d_100%)]"
        : "bg-[#2d58c6] text-white",
    }),
    [dark]
  );

  return (
    <div id="top" className={[poppins.className, "min-h-screen w-full transition-colors duration-500", theme.page].join(" ")}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className={["relative overflow-hidden", theme.panel].join(" ")}>
        <GridGlow dark={dark} />

        <header
          className={[
            "sticky top-0 z-50 border-b backdrop-blur-xl",
            dark ? "bg-[#071226]/65" : "bg-white/70",
            theme.line,
          ].join(" ")}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <a href="#top" className="flex items-center gap-2.5">
              <img
                src={dark ? "/applyloop-logo-white.png" : "/applyloop-logo-blue.png"}
                alt="Apply Loop icon"
                className="h-7 w-7 object-contain"
              />
              <div
                className={[
                  "text-sm font-semibold tracking-[-0.03em]",
                  dark ? "text-white" : "text-slate-900",
                ].join(" ")}
              >
                ApplyLoop
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={["text-sm transition-opacity hover:opacity-70", theme.muted].join(" ")}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://calendar.app.google/4YV2VJEgkqPegeo59"
                target="_blank"
                rel="noreferrer"
                className={[
                  "hidden rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 md:inline-flex",
                  theme.button,
                ].join(" ")}
              >
                Schedule a call
              </a>
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((v) => !v)}
                className={[
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5",
                  theme.card,
                ].join(" ")}
              >
                {dark ? <Sun className="h-4 w-4 text-white/85" /> : <Moon className="h-4 w-4 text-blue-700" />}
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
            <SectionReveal>
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Spend less time applying.
                </h1>
                <div
                  className={[
                    "mt-2 text-4xl italic sm:text-5xl lg:text-6xl",
                    dark ? "text-blue-400" : "text-blue-600",
                  ].join(" ")}
                  style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                >
                  More time living.
                </div>
                <p className={["mx-auto mt-8 max-w-2xl text-base leading-8 sm:text-lg", theme.muted].join(" ")}>
                  We use AI + human experts to apply to jobs for you, optimize every application for ATS screening, and shape each submission around your goals.
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                  <a
                    href="https://calendar.app.google/4YV2VJEgkqPegeo59"
                    target="_blank"
                    rel="noreferrer"
                    className={[
                      "rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5",
                      theme.button,
                    ].join(" ")}
                  >
                    Schedule a call
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <div className="mt-16 lg:mt-20">
                <LoadingStepsCard dark={dark} />
              </div>
            </SectionReveal>
          </section>

          <section className={["border-y", theme.line, dark ? "bg-[#0a1730]/80" : "bg-white/60"].join(" ")}>
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
              <SectionReveal>
                <p className={["text-center text-sm", theme.muted].join(" ")}>
                  Companies we can help you apply to and get hired
                </p>

                <div className="relative mt-8 overflow-hidden">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a1730] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a1730] to-transparent" />

                  <motion.div
                    className="flex items-center gap-10"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    {marqueeItems.map((logo, idx) => (
                      <CompanyLogo key={`${logo}-${idx}`} logo={logo} idx={idx} dark={dark} />
                    ))}
                  </motion.div>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section id="what-we-do" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 lg:px-10 lg:py-28">
            <SectionReveal>
              <div className="max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400">HOW IT WORKS</div>
                <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  We handle the hard part so you can focus on showing up strong.
                </h2>
                <p className={["mt-5 max-w-xl text-base leading-8", theme.muted].join(" ")}>
                  Your search gets a system: cleaner positioning, more relevant applications, and support when interviews start landing.
                </p>
              </div>
            </SectionReveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whatWeDo.map((item, index) => (
                <SectionReveal key={item.title} delay={index * 0.06}>
                  <FeatureCard item={item} dark={true} />
                </SectionReveal>
              ))}
            </div>
          </section>

          <section className={["relative overflow-hidden", theme.sectionBlue].join(" ")}>
            <GridGlow dark={dark} />
            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <SectionReveal>
                  <div className="max-w-md">
                    <div className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400">HOW IT WORKS</div>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                      We handle the hard part so you can focus on showing up strong.
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/70">
                      Your search gets a system: cleaner positioning, more relevant applications, and support when interviews start landing.
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.08}>
                  <HowItWorksDiagram />
                </SectionReveal>
              </div>
            </div>
          </section>

          <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 lg:px-10 lg:py-28">
            <SectionReveal>
              <div className="max-w-xl">
                <Pill dark={dark}>Testimonials</Pill>
                <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                  What people are saying about Applyloop
                </h2>
              </div>
            </SectionReveal>

            <div className="relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#071226] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#071226] to-transparent" />

              <motion.div
                className="flex gap-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {[...testimonials, ...testimonials].map((item, idx) => (
                  <TestimonialCard key={`${item.name}-${idx}`} item={item} />
                ))}
              </motion.div>
            </div>
          </section>

          <section id="faqs" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <div className="mx-auto max-w-4xl">
                <div className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400">
                  FREQUENTLY ASKED QUESTIONS
                </div>
                <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Need Answers? Here are some you might need
                </h2>

                <div className="mt-10 overflow-hidden rounded-[18px]">
                  {faqs.map((item, index) => (
                    <FAQCard key={item.q} item={item} index={index} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          </section>

          <section id="ats-review" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              <SectionReveal delay={0.1}>
                <div
                  className={[
                    "rounded-[28px] border p-5 shadow-[0_30px_80px_-25px_rgba(59,130,246,0.4)] sm:p-6",
                    dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white/90",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-lg font-medium">Application Pipeline</div>
                    <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                      98% ATS Pass Rate
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        role: "Product Manager at Stripe",
                        status: "AI Parsing...",
                        icon: FileSearch,
                        tone: dark ? "bg-blue-100 text-blue-700" : "bg-blue-50 text-blue-700",
                      },
                      {
                        role: "UX Designer at Linear",
                        status: "Human Review...",
                        icon: Sparkles,
                        tone: "bg-violet-100 text-violet-700",
                      },
                      {
                        role: "Frontend Dev at Vercel",
                        status: "Submitted",
                        icon: CheckCircle2,
                        tone: "bg-emerald-100 text-emerald-700",
                      },
                    ].map((row) => {
                      const Icon = row.icon;
                      return (
                        <div
                          key={row.role}
                          className={[
                            "flex items-center justify-between gap-4 rounded-2xl border px-4 py-4",
                            dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white",
                          ].join(" ")}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className={["flex h-9 w-9 items-center justify-center rounded-xl", row.tone].join(" ")}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="truncate text-sm font-medium sm:text-base">{row.role}</div>
                          </div>
                          <div className={["shrink-0 text-xs sm:text-sm", theme.muted].join(" ")}>{row.status}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className={dark ? "text-white/90" : "text-slate-700"}>Optimized for ATS.</span>
                  <br />
                  <span className={dark ? "text-blue-400" : "text-blue-600"}>Reviewed by humans.</span>
                </h2>
                <p className={["mt-8 max-w-xl text-base leading-8", theme.muted].join(" ")}>
                  We do not just spam job boards. Apply Loop uses a hybrid model to make every application technologically optimized and contextually precise.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      title: "AI Automation",
                      desc: "Scans job descriptions, extracts keywords, and automatically formats your resume to bypass ATS filters.",
                      icon: Brain,
                    },
                    {
                      title: "Human Quality Control",
                      desc: "Trained specialists handle complex application forms, write custom cover letters, and ensure final polish.",
                      icon: Users,
                    },
                  ].map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="flex gap-4">
                        <div
                          className={[
                            "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                            dark ? "border-white/10 bg-blue-500/15 text-blue-300" : "border-blue-200 bg-blue-50 text-blue-700",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-lg font-medium">{feature.title}</div>
                          <div className={["mt-1 max-w-xl text-sm leading-7", theme.muted].join(" ")}>{feature.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SectionReveal>
            </div>
          </section>

          <section id="become-client" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-16 pt-14 lg:px-10 lg:pb-20">
            <SectionReveal>
              <div
                className={[
                  "relative overflow-hidden rounded-[34px] border px-8 py-12 sm:px-12 sm:py-14",
                  dark
                    ? "border-white/10 bg-[linear-gradient(180deg,rgba(73,98,180,0.55),rgba(57,82,160,0.62))]"
                    : "border-blue-200 bg-[#2e56c6] text-white",
                ].join(" ")}
              >
                <GridGlow dark={false} />

                <div className="absolute left-[18%] top-[18%] flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-blue-900/60 text-white shadow-2xl backdrop-blur">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="absolute left-[24%] top-[58%] flex h-14 w-14 -rotate-12 items-center justify-center rounded-2xl bg-blue-300 text-white shadow-2xl">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div className="absolute right-[18%] top-[18%] flex h-16 w-16 rotate-[18deg] items-center justify-center rounded-2xl bg-white text-blue-700 shadow-2xl">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="absolute right-[24%] top-[58%] flex h-16 w-16 -rotate-[14deg] items-center justify-center rounded-2xl bg-blue-300 text-white shadow-2xl">
                  <Users className="h-5 w-5" />
                </div>

                <div className="relative mx-auto max-w-3xl text-center">
                  <div className="text-sm font-medium text-white/85">Apply Loop</div>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Ready to transform your job search?
                  </h2>
                  <div className="mt-4 text-sm leading-7 text-white/80">
                    Let us handle the application work while you focus on landing interviews.
                  </div>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#top"
                      className="rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-700 transition-transform hover:-translate-y-0.5"
                    >
                      Become a client
                    </a>
                    <a
                      id="join-us"
                      href="#testimonials"
                      className="rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </section>
        </main>
      </div>

      <footer className={["relative overflow-hidden border-t", theme.line, theme.footer].join(" ")}>
        <GridGlow dark={true} />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <a href="#top" className="text-sm font-medium text-white/90">
              Apply Loop
            </a>
            <div className="grid grid-cols-2 gap-4 sm:max-w-sm sm:justify-self-end">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10 lg:mt-24 lg:pt-14">
            <div className="overflow-hidden text-[18vw] font-semibold leading-none tracking-[-0.08em] text-white/95 lg:text-[12rem]">
              APPLY LOOP
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div>Copyright © 2026 all rights reserved.</div>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-white">
              Back to top <ChevronUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
