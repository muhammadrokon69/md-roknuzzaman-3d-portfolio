"use client";

import { useState } from "react";

type ProjectCategory = "ALL" | "WEB" | "BUSINESS" | "E-COMMERCE" | "AI & CREATIVE";

type ProjectItem = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: ProjectCategory[];
  categoryLabel: string;
  description: string;
  features: string[];
  techStack: string[];
  isFlagship?: boolean;
  demoUrl?: string;
  viewUrl?: string;
};

const projectsData: ProjectItem[] = [
  {
    id: "wafadev",
    number: "01",
    title: "WafaDev",
    tagline: "Business Management & POS Solution",
    category: ["ALL", "WEB", "BUSINESS"],
    categoryLabel: "Business Software / POS",
    isFlagship: true,
    description:
      "A comprehensive, enterprise-grade digital architecture built to empower businesses with sales tracking, dynamic inventory control, multi-register invoicing, and real-time operational analytics.",
    features: [
      "Sales & Register Tracking",
      "Inventory Management",
      "Barcode & Dynamic Billing",
      "Customer Ledgers & CRM",
      "Real-time Analytics Dashboard",
    ],
    techStack: ["Next.js", "React", "Node.js", "SQL Database", "REST APIs"],
    demoUrl: "https://wafa-dev.vercel.app/",
  },
  {
    id: "boipokastore",
    number: "02",
    title: "BoipokaStore",
    tagline: "Digital Book & E-Commerce Platform",
    category: ["ALL", "WEB", "E-COMMERCE"],
    categoryLabel: "E-Commerce / Digital Platform",
    isFlagship: true,
    description:
      "A modern digital book commerce ecosystem engineered for seamless reader onboarding, secure PDF digital access control, instant checkout pipelines, and comprehensive catalog indexing.",
    features: [
      "Digital Asset Delivery",
      "Curated Indexing by Genre",
      "Automated Cart & Checkout",
      "Protected PDF Preview Engine",
      "Responsive Reader UI",
    ],
    techStack: ["Next.js", "React", "Supabase", "Prisma", "Tailwind CSS"],
    demoUrl: "https://boipoka-store.vercel.app/",
  },
  {
    id: "madrasah",
    number: "03",
    title: "Madrasah Manarul Huda",
    tagline: "Institutional Portal & Academic Hub",
    category: ["ALL", "WEB"],
    categoryLabel: "Education / Web Portal",
    description:
      "A complete real-world web platform providing comprehensive institutional information, admission registries, academic curriculum schedules, and centralized administrative notices.",
    features: [
      "Academic Program Portals",
      "Digital Admissions System",
      "Institutional Notice Board",
      "Faculty & Staff Directory",
      "Multi-device Responsive UI",
    ],
    techStack: ["Web Platform", "Responsive UI", "CMS Backend", "Cloud Hosting"],
    demoUrl: "https://madrasahweb.netlify.app/",
  },
  {
    id: "wafaperfume",
    number: "04",
    title: "Wafa Perfume",
    tagline: "Luxury Brand Commerce Showcase",
    category: ["ALL", "WEB", "BUSINESS", "E-COMMERCE"],
    categoryLabel: "E-Commerce / Brand Platform",
    description:
      "A luxury boutique commerce experience designed around high-conversion sensory storytelling, refined fragrance collections, interactive product viewports, and seamless order dispatching.",
    features: [
      "Bespoke Product Showcase",
      "Conversion-focused Checkout",
      "Dynamic Note Profiles",
      "Interactive Brand Storytelling",
      "Mobile-first Layout",
    ],
    techStack: ["E-Commerce Architecture", "Modern Web", "Tailwind CSS", "Brand UI"],
    demoUrl: "https://wafaperfume.lovable.app/",
  },
  {
    id: "littlemuslimstar",
    number: "05",
    title: "Little Muslim Star",
    tagline: "Interactive Islamic Learning Experience",
    category: ["ALL", "WEB", "AI & CREATIVE"],
    categoryLabel: "Creative Tech / EdTech",
    description:
      "An engaging, gamified educational interface engineered to deliver Islamic ethics, Arabic foundational literacy, and interactive knowledge modules for young digital learners.",
    features: [
      "Gamified Learning Flows",
      "Child-safe Modern Interface",
      "Audio-Visual Learning Modules",
      "Parental Progress Tracking",
      "Engaging Micro-interactions",
    ],
    techStack: ["React", "Creative Web Engine", "Vector Art", "Audio APIs"],
    demoUrl: "https://littlemuslimstar.lovable.app/",
  },
  {
    id: "pippip",
    number: "06",
    title: "PipPip Explorers",
    tagline: "Digital Media & Narrative Animation Hub",
    category: ["ALL", "AI & CREATIVE"],
    categoryLabel: "Digital Media / YouTube Channel",
    description:
      "A multi-channel digital video production pipeline utilizing generative AI workflows, script ideation systems, and episodic educational storytelling for global audiences.",
    features: [
      "AI-assisted Storyboarding",
      "Automated Editing Workflows",
      "Audience Retention Strategy",
      "Sound Design & Visual Identity",
      "Cross-platform Content Scaling",
    ],
    techStack: ["AI Video Systems", "Premiere Pro", "CapCut", "YouTube Analytics"],
    demoUrl: "https://www.youtube.com/@PipPipExplorers",
  },
];

export default function ProjectsModal() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("ALL");

  const filteredProjects = projectsData.filter((project) =>
    project.category.includes(activeFilter)
  );

  const filterTabs: ProjectCategory[] = [
    "ALL",
    "WEB",
    "BUSINESS",
    "E-COMMERCE",
    "AI & CREATIVE",
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ================= HEADER & NARRATIVE ================= */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.45em] text-purple-400">
            04 · DEPLOYED ARTIFACTS // SYSTEMS
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-light tracking-tight text-white">
            Things I&apos;ve <span className="text-purple-400 font-normal">Built</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/50 max-w-xl">
            From enterprise business software to digital commerce platforms — here are some of the practical solutions I have architected and deployed.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-purple-200 uppercase">
            6 Live Deployments
          </span>
        </div>
      </div>

      {/* ================= FILTER TABS ================= */}
      <div className="flex flex-wrap gap-2 pt-1">
        {filterTabs.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
              activeFilter === filter
                ? "border border-purple-400/80 bg-purple-500/20 text-white shadow-[0_0_15px_rgba(192,132,252,0.3)]"
                : "border border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ================= PROJECT CARDS GRID ================= */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group relative flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${
              project.isFlagship
                ? "border-purple-400/40 bg-purple-950/[0.08] shadow-[0_0_30px_rgba(192,132,252,0.1)] hover:border-purple-300 hover:shadow-[0_0_45px_rgba(192,132,252,0.22)]"
                : "border-white/[0.08] bg-white/[0.02] hover:border-purple-400/40 hover:bg-white/[0.03]"
            }`}
          >
            <div>
              {/* Card Sub-header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-purple-400/80 font-bold">
                    PROJ // {project.number}
                  </span>
                  {project.isFlagship && (
                    <span className="rounded-full bg-purple-500/20 border border-purple-400/30 px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider text-purple-200">
                      ★ Flagship
                    </span>
                  )}
                </div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-purple-200 transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-mono text-purple-300/80">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                {project.description}
              </p>

              {/* Feature Highlights */}
              <div className="mt-4 border-t border-white/[0.05] pt-3">
                <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block mb-2">
                  Core Architecture Highlights:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-white/70">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-purple-400 text-[10px]">▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Tech Stack & Action Links */}
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[9px] font-mono text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider text-purple-200 transition-all hover:border-purple-300 hover:bg-purple-500/25 hover:text-white hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]"
                  >
                    <span>
                      {project.id === "pippip" ? "Visit Channel" : "Live Demo"}
                    </span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                ) : (
                  <span />
                )}

                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                  Live // Verified
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= SEPARATE SHOWCASE: AI WITH ROKON ================= */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-950/30 via-[#03091e]/80 to-purple-950/20 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_40px_rgba(56,189,248,0.1)]">
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-sky-400">
                Independent Initiative // Personal Brand Ecosystem
              </span>
            </div>

            <h3 className="text-2xl font-light text-white">
              AI with Rokon
            </h3>
            <p className="text-xs font-mono text-sky-300/80">
              AI Education, Automation Protocols & Bangla Content Ecosystem
            </p>

            <p className="text-xs leading-relaxed text-white/60 pt-1">
              A personal initiative dedicated to demystifying modern artificial intelligence, prompt engineering paradigms, and practical workflow automation for learners and businesses.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Artificial Intelligence",
                "Prompt Engineering",
                "AI Workflow Design",
                "Educational Media",
                "Technical Tutorials",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-sky-400/20 bg-sky-500/10 px-2 py-0.5 text-[9px] font-mono text-sky-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="https://web.facebook.com/AIwithRokon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-6 py-3 text-xs font-mono uppercase tracking-widest text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all hover:bg-sky-500/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-105"
            >
              <span>Explore Initiative</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}