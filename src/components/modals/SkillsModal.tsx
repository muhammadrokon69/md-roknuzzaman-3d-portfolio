"use client";

export default function SkillsModal() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.45em] text-indigo-400">
            02 · SYSTEM ARSENAL // ARCHITECTURE
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-light tracking-tight text-white">
            Technical Stack & <span className="text-indigo-400 font-normal">Engines</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-mono text-white/50">
            Constellation-based capability matrix: AI, Full-Stack & Autonomous Operations.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-indigo-300 uppercase">
            CONSTELLATION ACTIVE
          </span>
        </div>
      </div>

      {/* ================= CONSTELLATION NODE MATRIX (1 → 2 → 1 → 2) ================= */}
      <div className="relative mx-auto max-w-4xl space-y-6 sm:space-y-8">
        {/* Background Vertical Constellation Line (Desktop only) */}
        <div className="pointer-events-none absolute left-1/2 top-10 bottom-10 hidden w-px -translate-x-1/2 border-l border-dashed border-indigo-500/20 sm:block" />

        {/* ----------------- ROW 1: 01 - AI & GEN AI (TOP CENTER - 1 CARD) ----------------- */}
        <div className="relative z-10 flex justify-center">
          <div className="group relative w-full sm:max-w-xl rounded-2xl border border-indigo-400/40 bg-[#04081c]/90 p-5 sm:p-6 backdrop-blur-md shadow-[0_0_35px_rgba(99,102,241,0.15)] transition-all duration-300 hover:border-indigo-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]">
            {/* Connection Node Pin */}
            <div className="pointer-events-none absolute -bottom-3 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-indigo-400 bg-indigo-500 shadow-[0_0_10px_#6366f1] sm:block" />

            <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2 mb-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                NODE 01 // CORE FLAGSHIP
              </span>
              <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[8px] font-mono text-indigo-200">
                PRIMARY DRIVER
              </span>
            </div>

            <h3 className="text-xl font-light text-white group-hover:text-indigo-200 transition-colors">
              AI & Generative Systems
            </h3>
            <p className="mt-1 text-xs text-white/60">
              Autonomous AI workflows, custom LLM solutions, intelligent prompt systems, and generative tools integration.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "Prompt Engineering",
                "Generative AI",
                "AI Automation",
                "AI Workflow Design",
                "AI-assisted Dev",
                "LLM Applications",
                "AI Content Creation",
                "AI Tools Integration",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-mono text-indigo-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2.5 text-[10px] font-mono text-white/40">
              <span className="text-indigo-400/80">TOOLKIT: </span>
              ChatGPT • Gemini • Claude • NotebookLM • Google AI Studio
            </div>
          </div>
        </div>

        {/* ----------------- ROW 2: WEB & AUTOMATION (2 CARDS) ----------------- */}
        <div className="relative z-10 grid gap-5 sm:grid-cols-2">
          {/* 02. WEB DEVELOPMENT */}
          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400">
                NODE 02 // WEB PLATFORMS
              </span>
              <span className="text-[8px] font-mono text-white/30">FRONTEND & BACKEND</span>
            </div>

            <h3 className="text-lg font-light text-white group-hover:text-indigo-200 transition-colors">
              Modern Web Development
            </h3>
            <p className="mt-1 text-xs text-white/50">
              High-performance reactive web frontend, headless architectures, API integrations, and cloud databases.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "Next.js",
                "React",
                "JavaScript",
                "HTML5 / CSS3",
                "API Integration",
                "SQL / Supabase",
                "PostgreSQL",
                "WordPress / Elementor",
                "Responsive Design",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2 text-[9px] font-mono text-white/35">
              PIPELINE: HTML/CSS/JS → React/Next.js → APIs & Databases
            </div>
          </div>

          {/* 03. AUTOMATION & BUSINESS SOLUTIONS */}
          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400">
                NODE 03 // AUTOMATION
              </span>
              <span className="text-[8px] font-mono text-white/30">SOLUTIONS</span>
            </div>

            <h3 className="text-lg font-light text-white group-hover:text-indigo-200 transition-colors">
              Automation & Business Systems
            </h3>
            <p className="mt-1 text-xs text-white/50">
              End-to-end workflow automation, data pipelines, CRM synchronization, and bespoke business tool development.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "AI Workflows",
                "Workflow Automation",
                "Business Process Auto",
                "API Pipelines",
                "Data Processing",
                "CRM Workflows",
                "Custom POS / SaaS",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2 text-[9px] font-mono text-white/35">
              FOCUS: Operational Efficiency, Accuracy & Scalability
            </div>
          </div>
        </div>

        {/* ----------------- ROW 3: PROGRAMMING & DATA (CENTER - 1 CARD) ----------------- */}
        <div className="relative z-10 flex justify-center">
          <div className="group relative w-full sm:max-w-xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.03]">
            {/* Connection Node Pins */}
            <div className="pointer-events-none absolute -top-3 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-indigo-400/60 bg-indigo-950 sm:block" />
            <div className="pointer-events-none absolute -bottom-3 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-indigo-400/60 bg-indigo-950 sm:block" />

            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400">
                NODE 04 // FOUNDATION
              </span>
              <span className="text-[8px] font-mono text-white/30">LOGIC & ANALYTICS</span>
            </div>

            <h3 className="text-lg font-light text-white group-hover:text-indigo-200 transition-colors">
              Programming & Data Analytics
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Algorithmic problem-solving, relational queries, structured data cleaning, and statistical visualizations.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "Python",
                "SQL",
                "C",
                "OOP Principles",
                "Data Analysis",
                "Data Cleaning",
                "Data Visualization",
                "Exploratory Analysis (EDA)",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2 text-[10px] font-mono text-white/40">
              <span className="text-indigo-400/80">LIBRARIES & ENGINES: </span>
              Pandas • NumPy • Matplotlib • SQL Engine
            </div>
          </div>
        </div>

        {/* ----------------- ROW 4: MOBILE & CREATIVE (2 CARDS) ----------------- */}
        <div className="relative z-10 grid gap-5 sm:grid-cols-2">
          {/* 05. MOBILE & APPS */}
          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400">
                NODE 05 // MOBILE
              </span>
              <span className="text-[8px] font-mono text-white/30">APPLICATIONS</span>
            </div>

            <h3 className="text-lg font-light text-white group-hover:text-indigo-200 transition-colors">
              Mobile App Development
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Mobile-first user interfaces, cross-platform layouts, API integration, and cloud backend communication.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "Mobile App Development",
                "Android Development",
                "Mobile UI/UX",
                "API Integration",
                "App Backend Integration",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2 text-[9px] font-mono text-white/35">
              FOCUS: Responsive, Intuitive & Connected Mobile Experiences
            </div>
          </div>

          {/* 06. DIGITAL & CREATIVE TECHNOLOGY */}
          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400">
                NODE 06 // CREATIVE
              </span>
              <span className="text-[8px] font-mono text-white/30">MEDIA SYSTEMS</span>
            </div>

            <h3 className="text-lg font-light text-white group-hover:text-indigo-200 transition-colors">
              Digital Creative & AI Media
            </h3>
            <p className="mt-1 text-xs text-white/50">
              AI-generated video and imagery, automated multi-channel content pipelines, and brand asset production.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "AI Video Generation",
                "AI Image Generation",
                "Content Automation",
                "Digital Content Creation",
                "Video Editing",
                "Visual Design",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2 text-[10px] font-mono text-white/40">
              <span className="text-indigo-400/80">CREATIVE TOOLS: </span>
              Canva • CapCut • Adobe Premiere Pro • Photoshop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}