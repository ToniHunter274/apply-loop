'use client';

import React, { useMemo, useState } from "react";
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
} from "lucide-react";

const processSteps = [
  { title: "AI Resume Optimization", icon: Wand2 },
  { title: "Human Specialist Review", icon: Users },
  { title: "ATS Compliance", icon: ShieldCheck },
  { title: "Final QA", icon: BadgeCheck },
];

const ourRole = [
  {
    title: "Collect data on client preference",
    desc: "We gather your role, location, experience, and career goals to guide every application.",
    icon: FileSearch,
  },
  {
    title: "Job search & matching",
    desc: "We find roles that align with your profile using smart AI and human review.",
    icon: Search,
  },
  {
    title: "Application submission",
    desc: "Applications are submitted on your behalf — optimized, accurate, and ATS-compliant.",
    icon: Send,
  },
];

const yourRole = [
  {
    title: "Receive notifications",
    desc: "Stay updated with alerts on applications, responses, and interview requests.",
    icon: Bell,
  },
  {
    title: "Follow up on applications",
    desc: "We track progress and follow up where appropriate to keep things moving.",
    icon: Target,
  },
  {
    title: "Interview Readiness",
    desc: "Get guidance and tips to help you show up confident and prepared.",
    icon: Briefcase,
  },
];

const companyLogos = ["Deloitte.", "Interswitch", "Meta", "ORACLE", "TESLA", "Google"];

const navLinks = ["Services", "Testimonials", "FAQs", "Careers"];
const footerLinks = ["Home", "Services", "Testimonials", "FAQs", "Join us", "Become a client"];

function SectionReveal({ children, delay = 0 }) {
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

function GridGlow({ dark }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: dark
          ? "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)"
          : "linear-gradient(to right, rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(circle at center, black 55%, transparent 100%)",
      }}
    />
  );
}

function Pill({ children, dark }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase",
        dark
          ? "border-white/10 bg-white/5 text-white/90"
          : "border-blue-200 bg-blue-50 text-blue-700",
      ].join(" ")}
    >
      <span className={[
        "h-2 w-2 rounded-full",
        dark ? "bg-blue-400" : "bg-blue-600",
      ].join(" ")} />
      {children}
    </div>
  );
}

function FeatureCard({ item, dark }) {
  const Icon = item.icon;
  return (
    <div className="text-left">
      <div
        className={[
          "mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border shadow-[0_10px_40px_-18px_rgba(59,130,246,0.65)]",
          dark
            ? "border-white/10 bg-blue-500/15 text-blue-300"
            : "border-blue-200 bg-blue-50 text-blue-700",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </div>
      <h3 className={[
        "mb-2 text-xl font-medium leading-tight",
        dark ? "text-white" : "text-slate-900",
      ].join(" ")}>
        {item.title}
      </h3>
      <p className={[
        "max-w-xs text-sm leading-7",
        dark ? "text-white/65" : "text-slate-600",
      ].join(" ")}>
        {item.desc}
      </p>
    </div>
  );
}

export default function ApplyLoopLandingPage() {
  const [dark, setDark] = useState(true);

  const theme = useMemo(
    () => ({
      page: dark
        ? "bg-[#071226] text-white"
        : "bg-[#f3f4f6] text-slate-900",
      panel: dark
        ? "bg-[radial-gradient(circle_at_top,_rgba(40,94,255,0.18),_transparent_32%),linear-gradient(180deg,#06101f_0%,#081529_55%,#071226_100%)]"
        : "bg-[linear-gradient(180deg,#f8f9fb_0%,#f3f4f6_100%)]",
      muted: dark ? "text-white/65" : "text-slate-600",
      line: dark ? "border-white/8" : "border-slate-200",
      card: dark
        ? "border-white/10 bg-white/[0.03]"
        : "border-slate-200 bg-white/80",
      button: dark
        ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-[0_20px_60px_-20px_rgba(59,130,246,0.9)]"
        : "bg-blue-600 text-white shadow-[0_20px_60px_-20px_rgba(37,99,235,0.7)]",
      soft: dark ? "bg-white/5" : "bg-blue-50",
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
    <div className={["min-h-screen w-full transition-colors duration-500", theme.page].join(" ")}>
      <div className={["relative overflow-hidden", theme.panel].join(" ")}>
        <GridGlow dark={dark} />

        <header className={[
          "sticky top-0 z-50 backdrop-blur-xl",
          dark ? "bg-[#071226]/65" : "bg-white/70",
          "border-b",
          theme.line,
        ].join(" ")}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <div className="text-sm font-medium tracking-tight">Applyloop</div>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className={["text-sm transition-opacity hover:opacity-70", theme.muted].join(" ")}
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className={[
                  "hidden rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 md:inline-flex",
                  theme.button,
                ].join(" ")}
              >
                Schedule a call
              </button>
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
                  We use AI + human experts to apply to jobs for you, optimize every
                  application for ATS screening, and shape each submission around your goals.
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                  <button
                    className={[
                      "rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5",
                      theme.button,
                    ].join(" ")}
                  >
                    Schedule a call
                  </button>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <div className="relative mt-16 lg:mt-20">
                <div
                  className={[
                    "absolute left-0 right-0 top-1/2 hidden border-t border-dashed lg:block",
                    dark ? "border-white/10" : "border-slate-300",
                  ].join(" ")}
                />
                <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {processSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.title}
                        className={[
                          "mx-auto flex w-full max-w-[270px] items-center gap-3 rounded-2xl border px-5 py-5 shadow-[0_20px_60px_-35px_rgba(59,130,246,0.8)]",
                          theme.card,
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                            dark ? "bg-blue-500/15 text-blue-300" : "bg-blue-50 text-blue-700",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-medium">{step.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>
          </section>

          <section className={[
            "border-y",
            theme.line,
            dark ? "bg-[#0a1730]/80" : "bg-white/60",
          ].join(" ")}>
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
              <SectionReveal>
                <p className={["text-center text-sm", theme.muted].join(" ")}>
                  Companies we can help you apply to and get hired
                </p>
                <div className="mt-8 grid grid-cols-2 items-center gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
                  {companyLogos.map((logo, idx) => (
                    <div
                      key={logo}
                      className={[
                        "text-3xl font-semibold tracking-tight",
                        dark
                          ? idx === 2
                            ? "text-blue-400"
                            : idx === 3
                              ? "text-red-400"
                              : "text-white/80"
                          : idx === 2
                            ? "text-blue-600"
                            : idx === 3
                              ? "text-red-500"
                              : idx === 5
                                ? "text-blue-500"
                                : "text-slate-700",
                      ].join(" ")}
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <SectionReveal>
                <Pill dark={dark}>What We Do</Pill>
                <h2 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Job applications are exhausting. We fixed that.
                </h2>
                <p className={["mt-8 max-w-xl text-base leading-8", theme.muted].join(" ")}>
                  Job searching can be time consuming, repetitive and often overwhelming.
                  Apply Loop reduces the burden of the application process, so you can focus
                  on career growth and getting the right visibility in your field.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.08}>
                <div className="relative mx-auto h-[360px] w-full max-w-[520px]">
                  <div
                    className={[
                      "absolute right-20 top-8 rounded-2xl px-5 py-4 shadow-xl",
                      dark ? "bg-amber-300 text-slate-900" : "bg-amber-300 text-slate-900",
                    ].join(" ")}
                  >
                    <div className="mb-2 h-1.5 w-20 rounded-full bg-white/90" />
                    <div className="h-1.5 w-28 rounded-full bg-white/70" />
                  </div>
                  <div
                    className={[
                      "absolute left-12 top-24 rounded-2xl px-5 py-4 shadow-xl",
                      dark ? "bg-sky-400 text-white" : "bg-sky-400 text-white",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <div className="h-1.5 w-24 rounded-full bg-white/90" />
                    </div>
                    <div className="mt-2 h-1.5 w-20 rounded-full bg-white/65" />
                  </div>
                  <div className="absolute right-8 top-36 flex items-center gap-2 rounded-full bg-pink-400 px-4 py-2 text-white shadow-xl">
                    <div className="h-2 w-2 rounded-full bg-white/90" />
                    <div className="h-1.5 w-20 rounded-full bg-white/80" />
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <div className="relative h-52 w-52 rounded-full border-[10px] border-blue-950/70 bg-blue-200/80 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.85)]">
                      <div className="absolute inset-4 rounded-full border-[6px] border-blue-900/70 bg-gradient-to-b from-blue-50 to-blue-200" />
                      <div className="absolute inset-[34%] flex items-center justify-center rounded-full bg-blue-300">
                        <UserCircle2 className="h-12 w-12 text-blue-700" />
                      </div>
                      <div className="absolute -bottom-20 left-1/2 h-24 w-5 -translate-x-1/2 rotate-[40deg] rounded-full bg-blue-950 shadow-2xl" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className={["relative overflow-hidden", theme.sectionBlue].join(" ")}>
            <GridGlow dark={dark} />
            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <SectionReveal>
                <div className="text-center">
                  <Pill dark={dark}>How Apply Loop Works</Pill>
                  <h2 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl">Our role</h2>
                </div>
              </SectionReveal>

              <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {ourRole.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 0.07}>
                    <FeatureCard item={item} dark={dark || !dark} />
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal>
                <div className="mt-20 text-center">
                  <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                    Your own responsibility
                  </h3>
                </div>
              </SectionReveal>

              <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {yourRole.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 0.07}>
                    <FeatureCard item={item} dark={dark || !dark} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              <SectionReveal>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className={dark ? "text-white/90" : "text-slate-700"}>Optimized for ATS.</span>
                  <br />
                  <span className={dark ? "text-blue-400" : "text-blue-600"}>Reviewed by humans.</span>
                </h2>
                <p className={["mt-8 max-w-xl text-base leading-8", theme.muted].join(" ")}>
                  We do not just spam job boards. Applyloop uses a hybrid model to make every
                  application technologically optimized and contextually precise.
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
                            dark
                              ? "border-white/10 bg-blue-500/15 text-blue-300"
                              : "border-blue-200 bg-blue-50 text-blue-700",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-lg font-medium">{feature.title}</div>
                          <div className={["mt-1 max-w-xl text-sm leading-7", theme.muted].join(" ")}>
                            {feature.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SectionReveal>

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
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
            <SectionReveal>
              <div className={[
                "relative overflow-hidden rounded-[34px] border px-8 py-12 sm:px-12 sm:py-14",
                dark
                  ? "border-white/10 bg-[linear-gradient(180deg,rgba(73,98,180,0.55),rgba(57,82,160,0.62))]"
                  : "border-blue-200 bg-[#2e56c6] text-white",
              ].join(" ")}>
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
                    Ready to transform your Job search?
                  </h2>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-700 transition-transform hover:-translate-y-0.5">
                      Become a client
                    </button>
                    <button className="rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
                      Join Us
                    </button>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </section>
        </main>
      </div>

      <footer className={["relative overflow-hidden border-t", theme.line, theme.footer].join(" ")}>
        <GridGlow dark={dark || !dark} />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="text-sm font-medium text-white/90">Apply Loop</div>
            <div className="grid grid-cols-2 gap-4 sm:max-w-sm sm:justify-self-end">
              {footerLinks.map((link) => (
                <a key={link} href="#" className="text-sm text-white/75 transition hover:text-white">
                  {link}
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
