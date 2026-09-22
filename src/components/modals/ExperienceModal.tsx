"use client";

import { useState } from "react";

type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  workMode: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  isCurrent?: boolean;
};

const experienceData: ExperienceItem[] = [
  {
    id: "arefin-tech",
    period: "Sep 2026 — Present",
    role: "Web Developer & AI Automation Specialist",
    company: "Arefin Tech",
    location: "Gazipur, Bangladesh",
    workMode: "Remote",
    isCurrent: true,
    summary:
      "Architecting and delivering practical digital solutions utilizing modern full-stack web technologies, bespoke generative AI workflows, and end-to-end business automation pipelines.",
    responsibilities: [
      "Developing responsive, high-performance web applications and architectures",
      "Building and deploying AI-assisted digital workflows and LLM agent pipelines",
      "Implementing operational automation for real-world enterprise use cases",
      "Integrating cloud databases, REST APIs, and modern frontend engines",
      "Creating AI-powered digital assets and automated content systems",
    ],
    skills: ["Web Development", "AI Automation", "JavaScript", "Python", "AI Workflows", "API Integration"],
  },
  {
    id: "manarul-huda",
    period: "Feb 2022 — Jan 2023",
    role: "General Teacher",
    company: "Madrasah Manarul Huda",
    location: "Gazipur, Bangladesh",
    workMode: "On-site",
    summary:
      "Taught English and Mathematics across multiple academic tiers, developing foundational problem-solving frameworks, pedagogy, and interpersonal leadership.",
    responsibilities: [
      "Instructing structured courses in English and foundational Mathematics",
      "Designing comprehensive lesson plans and interactive learning modules",
      "Mentoring and monitoring academic benchmarks and student progress",
      "Managing collaborative classroom sessions and communication with stakeholders",
    ],
    skills: ["Pedagogy", "Mathematics", "English", "Communication", "Classroom Leadership"],
  },
  {
    id: "future-starr",
    period: "Jan 2022 — Jun 2022",
    role: "Email Marketing Specialist",
    company: "Future Starr",
    location: "Bangladesh",
    workMode: "Remote",
    summary:
      "Managed targeted audience outreach and digital marketing campaigns focused on subscriber retention, structured copy, and campaign analytics.",
    responsibilities: [
      "Preparing and scheduling targeted email marketing campaigns",
      "Crafting conversion-oriented copy and digital outreach content",
      "Monitoring campaign analytics, open rates, and subscriber segmentation",
      "Supporting cross-functional digital marketing operations",
    ],
    skills: ["Email Marketing", "Digital Outreach", "Copywriting", "Audience Analytics"],
  },
  {
    id: "avash-coaching",
    period: "Apr 2018 — Dec 2021",
    role: "English Teacher",
    company: "Avash Coaching Center",
    location: "Bangladesh",
    workMode: "Part-time",
    summary:
      "Mentored secondary and higher-secondary students in communicative English, structural grammar systems, and rigorous academic examination preparation.",
    responsibilities: [
      "Delivering interactive lectures on English grammar, vocabulary, and composition",
      "Formulating examination preparatory curricula and evaluation criteria",
      "Assessing individual student performance metrics and offering feedback",
    ],
    skills: ["English Linguistics", "Public Speaking", "Instructional Design", "Student Assessment"],
  },
  {
    id: "e-haque-coaching",
    period: "Jan 2017 — Feb 2018",
    role: "Math Teacher",
    company: "E Haque Coaching",
    location: "Dhaka, Bangladesh",
    workMode: "Part-time",
    summary:
      "Taught foundational Mathematics for classes 6–10, establishing strong logical thinking, problem decomposition, and arithmetic analytical skills.",
    responsibilities: [
      "Teaching fundamental algebra, geometry, and arithmetic concepts",
      "Conducting problem-solving workshops to develop algorithmic thinking",
      "Designing test papers and evaluating conceptual understanding",
    ],
    skills: ["Mathematics", "Logical Reasoning", "Problem Decomposition", "Mentoring"],
  },
];

export default function ExperienceModal() {
  // বর্তমান রোলটি ডিফল্টভাবে এক্সপান্ডেড থাকবে
  const [expandedId, setExpandedId] = useState<string>("arefin-tech");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ================= HEADER & NARRATIVE STATEMENT ================= */}
      <div className="border-b border-white/[0.08] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.45em] text-amber-400">
              03 · TRAJECTORY // CAREER CHRONOLOGY
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-light tracking-tight text-white">
              Professional <span className="text-amber-400 font-normal">Journey</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase">
              Active Evolution
            </span>
          </div>
        </div>

        {/* নন-লিনিয়ার ক্যারিয়ারকে শক্তি হিসেবে উপস্থাপনের স্টেটমেন্ট */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-950/[0.08] p-4 backdrop-blur-sm">
          <p className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-1">
            From Education & Communication to Technology & AI
          </p>
          <p className="text-xs leading-relaxed text-white/60">
            My professional journey has evolved across education, digital marketing, and technology—giving me a diverse, multidisciplinary perspective on human communication, analytical problem-solving, and practical software engineering.
          </p>
        </div>
      </div>

      {/* ================= INTERACTIVE ORBIT TIMELINE ================= */}
      <div className="relative pl-6 sm:pl-8 space-y-6">
        {/* ভার্টিক্যাল টাইমলাইন লাইন */}
        <div className="pointer-events-none absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-amber-400 via-amber-500/30 to-white/10" />

        {experienceData.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="relative group">
              {/* টাইমলাইন নোড পিন */}
              <div
                className={`absolute -left-[23px] sm:-left-[27px] top-5 h-3 w-3 rounded-full border transition-all duration-300 ${
                  item.isCurrent
                    ? "border-amber-300 bg-amber-400 shadow-[0_0_12px_#f59e0b]"
                    : "border-white/30 bg-[#020512] group-hover:border-amber-400/80 group-hover:bg-amber-400/20"
                }`}
              />

              {/* এক্সপেরিয়েন্স কার্ড */}
              <div
                className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-md transition-all duration-300 ${
                  item.isCurrent
                    ? "border-amber-400/35 bg-amber-950/[0.08] shadow-[0_0_30px_rgba(251,191,36,0.08)]"
                    : "border-white/[0.07] bg-white/[0.015] hover:border-amber-400/30 hover:bg-white/[0.025]"
                }`}
              >
                {/* কার্ড হেডার (ক্লিক করে টগল করা যাবে) */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="cursor-pointer select-none"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-widest text-amber-400 uppercase font-semibold">
                      {item.period}
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[9px] font-mono text-white/50">
                      {item.location} • {item.workMode}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-white group-hover:text-amber-200 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono text-white/60 mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label="Toggle details"
                      className="shrink-0 h-7 w-7 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 group-hover:border-amber-400/40 group-hover:text-amber-300 transition-all"
                    >
                      {isExpanded ? "−" : "+"}
                    </button>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-white/60">
                    {item.summary}
                  </p>
                </div>

                {/* এক্সপান্ডেড সেকশন: রেসপনসিবিলিটিজ ও স্কিলস */}
                {isExpanded && (
                  <div className="mt-5 border-t border-white/[0.06] pt-4 space-y-4 animate-fadeIn">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400/80 block mb-2">
                        Key Responsibilities & Impact:
                      </span>
                      <ul className="space-y-1.5">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/70 leading-relaxed">
                            <span className="text-amber-400 text-[10px] mt-0.5">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block mb-2">
                        Core Competencies Applied:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[9px] font-mono text-amber-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* বটম ফুটার নোট */}
      <div className="border-t border-white/[0.08] pt-4 flex items-center justify-between text-[9px] font-mono text-white/40 uppercase tracking-widest">
        <span>Continuous Learning Architecture</span>
        <span>Timeline Verified</span>
      </div>
    </div>
  );
}