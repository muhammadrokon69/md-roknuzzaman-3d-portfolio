"use client";

import Image from "next/image";

interface ExecutiveCVModalProps {
  onClose: () => void;
}

export default function ExecutiveCVModal({ onClose }: ExecutiveCVModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[200000] overflow-y-auto bg-slate-900/90 backdrop-blur-xl p-3 sm:p-6 md:p-10 animate-fadeIn">
      {/* অ্যাকশন কন্ট্রোল বার (প্রিন্ট করার সময় হাইড থাকবে) */}
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-4 mb-6 print:hidden">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-mono uppercase tracking-wider text-white transition-all hover:bg-white/20 hover:scale-105 cursor-pointer"
        >
          <span>← Return to 3D Universe</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest hidden sm:inline">
            Executive Document Mode
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-xs font-mono uppercase tracking-wider text-black font-semibold shadow-lg transition-all hover:bg-emerald-400 hover:scale-105 cursor-pointer"
          >
            <span>🖨️ Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* মূল লাইট-থিম ডকুমেন্ট পেপার (A4 স্টাইল) */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-white text-slate-900 shadow-2xl p-6 sm:p-12 print:shadow-none print:p-0 print:m-0 print:max-w-none print:rounded-none">
        
        {/* ডক হেডার: ছবি + নাম ও পরিচিতি + কন্ট্যাক্ট মেটা */}
        <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          
          {/* প্রোফাইল ছবি ও আইডেন্টিটি */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-xl border-2 border-slate-200 shadow-md print:border-slate-300">
              <Image
                src="/Rokon.webp"
                alt="MD. Roknuzzaman"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                MD. Roknuzzaman
              </h1>
              <p className="mt-1 text-sm sm:text-base font-semibold text-sky-700">
                AI, Web, App & Automation Specialist
              </p>
              <p className="mt-2 text-xs text-slate-600 max-w-md leading-relaxed">
                Designing and building practical digital solutions across full-stack web applications, autonomous LLM workflows, and enterprise business automation.
              </p>
            </div>
          </div>

          {/* কন্ট্যাক্ট ডিরেক্টরি */}
          <div className="text-xs font-mono text-slate-600 space-y-1.5 text-center sm:text-right shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 w-full sm:w-auto">
            <div>📍 Gazipur, Bangladesh</div>
            <div>✉️ rokon@arefintech.com</div>
            <div>📞 +880 1401-269616</div>
            <div>🔗 linkedin.com/in/md-roknuzzaman-813241154</div>
            <div>💻 github.com/muhammadrokon69</div>
          </div>
        </div>

        {/* সেকশন ১: CORE TECHNICAL SKILLS */}
        <div className="mt-6 border-b border-slate-200 pb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
            Core Competencies & Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-slate-800">AI & Workflow Architecture:</span>
              <p className="text-slate-600 mt-0.5">Prompt Engineering, Generative AI, LLM Integration, ChatGPT, Claude, Gemini, NotebookLM.</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Full-Stack Web Development:</span>
              <p className="text-slate-600 mt-0.5">Next.js, React, JavaScript, HTML5, CSS3, Tailwind CSS, Supabase, PostgreSQL, REST APIs, WordPress.</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Automation & Business Operations:</span>
              <p className="text-slate-600 mt-0.5">Workflow Automation, API Integration Pipelines, CRM Data Sync, POS Systems, Custom SaaS Tools.</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Programming & Data Foundations:</span>
              <p className="text-slate-600 mt-0.5">Python, SQL, C, Data Cleaning & Analysis, Data Visualization (Pandas, Matplotlib).</p>
            </div>
          </div>
        </div>

        {/* সেকশন ২: PROFESSIONAL WORK EXPERIENCE */}
        <div className="mt-6 border-b border-slate-200 pb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Professional Experience
          </h2>
          <div className="space-y-5">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900">
                  Web Developer & AI Automation Specialist — <span className="font-normal text-sky-700">Arefin Tech</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">Sep 2026 – Present | Remote</span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Architecting high-performance web applications and reactive frontend systems using Next.js and modern APIs.</li>
                <li>Designing autonomous LLM workflows and business automation pipelines for operational efficiency.</li>
                <li>Developing bespoke digital content systems and scalable client database integrations.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900">
                  General Teacher — <span className="font-normal text-sky-700">Madrasah Manarul Huda</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">Feb 2022 – Jan 2023 | Gazipur</span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Taught English and Mathematics, cultivating strong problem-solving and interpersonal leadership skills.</li>
                <li>Structured academic curricula and conducted collaborative learning sessions.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900">
                  Email Marketing Specialist — <span className="font-normal text-sky-700">Future Starr</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">Jan 2022 – Jun 2022 | Remote</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Managed subscriber outreach, copy ideation, campaign segmentation, and digital communication analytics.
              </p>
            </div>
          </div>
        </div>

        {/* সেকশন ৩: NOTABLE DEPLOYED PROJECTS */}
        <div className="mt-6 border-b border-slate-200 pb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
            Featured Projects & Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-bold text-slate-900">WafaDev (Business Management & POS)</div>
              <p className="text-slate-600 mt-0.5">Enterprise inventory, sales tracking, barcode billing, and operational analytics dashboard.</p>
              <span className="font-mono text-[10px] text-sky-700">wafa-dev.vercel.app</span>
            </div>
            <div>
              <div className="font-bold text-slate-900">BoipokaStore (Digital Commerce Platform)</div>
              <p className="text-slate-600 mt-0.5">Full-stack digital book platform with secure reader access, payment pipelines, and book indexing.</p>
              <span className="font-mono text-[10px] text-sky-700">boipoka-store.vercel.app</span>
            </div>
            <div>
              <div className="font-bold text-slate-900">Madrasah Manarul Huda (Institutional Portal)</div>
              <p className="text-slate-600 mt-0.5">Academic curriculum hub, admissions workflow, and centralized notice engine.</p>
              <span className="font-mono text-[10px] text-sky-700">madrasahweb.netlify.app</span>
            </div>
            <div>
              <div className="font-bold text-slate-900">AI with Rokon (Educational Brand)</div>
              <p className="text-slate-600 mt-0.5">Bangla-first educational content ecosystem for artificial intelligence and prompt engineering.</p>
              <span className="font-mono text-[10px] text-sky-700">facebook.com/AIwithRokon</span>
            </div>
          </div>
        </div>

        {/* সেকশন ৪: EDUCATION & PHILOSOPHY */}
        <div className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
            Educational Background & Philosophy
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Multi-disciplinary background spanning Agriculture, Education, Digital Outreach, and Computer Science. Believes firmly that <strong>&ldquo;Technology should solve real problems—not simply look impressive.&rdquo;</strong>
          </p>
        </div>

      </div>
    </div>
  );
}