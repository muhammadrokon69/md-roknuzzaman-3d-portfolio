"use client";

import { useState } from "react";

export default function ContactModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    details: "",
    budget: "Not decided",
    timeline: "Flexible",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // WhatsApp-এ গোছানো ফরম্যাটেড মেসেজ পাঠানোর লজিক
  const handleWhatsAppDispatch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      alert("Please fill in your Name, Email, and Project Details.");
      return;
    }

    const message = `*NEW PROJECT INQUIRY VIA PORTFOLIO*
----------------------------------
*Client Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType}
*Budget Range:* ${formData.budget}
*Timeline:* ${formData.timeline}

*Project Details:*
${formData.details}
----------------------------------
_Sent from Digital Portfolio System_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8801401269616?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.45em] text-emerald-400">
            05 · TRANSMISSION // COMM-LINK
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-light tracking-tight text-white">
            Let&apos;s Build Something <span className="text-emerald-400 font-normal">Together</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/50 max-w-xl">
            Have a project, business idea, or digital solution in mind? Connect directly or submit an inquiry to engineer your product.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase">
            Channels Open
          </span>
        </div>
      </div>

      {/* ================= 2-COLUMN LAYOUT: CONTACT CARDS + FORM ================= */}
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        
        {/* বাম পাশের কলাম: DIRECT CONTACT DIRECTORY (5 কলাম) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/[0.06] p-6 backdrop-blur-md shadow-[0_0_35px_rgba(52,211,153,0.08)] space-y-5">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
                DIRECT DIRECTORY
              </span>
              <h3 className="text-lg font-light text-white mt-1">Get In Touch Directly</h3>
            </div>

            {/* 1. Work Email */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-emerald-400/40">
              <div className="text-[9px] font-mono text-white/40 uppercase tracking-wider">
                Work Email // Primary
              </div>
              <div className="text-xs sm:text-sm font-mono text-white mt-1">
                rokon@arefintech.com
              </div>
              <a
                href="mailto:rokon@arefintech.com"
                className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
              >
                <span>Send Email</span>
                <span>→</span>
              </a>
            </div>

            {/* 2. WhatsApp & Phone */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-emerald-400/40">
              <div className="text-[9px] font-mono text-white/40 uppercase tracking-wider">
                Instant Chat & Direct Call
              </div>
              <div className="text-xs sm:text-sm font-mono text-white mt-1">
                +880 1401-269616
              </div>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://wa.me/8801401269616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-emerald-300 hover:bg-emerald-500/30 hover:text-white transition-all"
                >
                  WhatsApp Me →
                </a>
                <a
                  href="tel:+8801401269616"
                  className="rounded-full bg-white/[0.03] border border-white/10 px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-white/60 hover:border-white/30 hover:text-white transition-all"
                >
                  Call Me
                </a>
              </div>
            </div>

            {/* 3. Professional Socials */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/md-roknuzzaman-813241154/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center transition-all hover:border-emerald-400/40 hover:bg-white/[0.04]"
              >
                <div className="text-[9px] font-mono text-white/40 uppercase">LinkedIn</div>
                <div className="text-xs font-mono text-white mt-1">View Profile →</div>
              </a>

              <a
                href="https://github.com/muhammadrokon69"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center transition-all hover:border-emerald-400/40 hover:bg-white/[0.04]"
              >
                <div className="text-[9px] font-mono text-white/40 uppercase">GitHub</div>
                <div className="text-xs font-mono text-white mt-1">Explore Code →</div>
              </a>
            </div>

            {/* 4. Base Location */}
            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 text-[10px] font-mono text-white/50">
              <span>LOCATION:</span>
              <span className="text-white/80">Gazipur, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* ডান পাশের কলাম: INTERACTIVE INQUIRY FORM (7 কলাম) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleWhatsAppDispatch}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 backdrop-blur-md space-y-4"
          >
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
                TRANSMISSION FORM
              </span>
              <h3 className="text-xl font-light text-white mt-0.5">Start A Project</h3>
              <p className="text-xs text-white/50 mt-1">
                Fill out the specifications below. It will format and dispatch directly to WhatsApp for real-time discussion.
              </p>
            </div>

            {/* Name & Email */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/60 uppercase">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-emerald-400 focus:bg-black/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/60 uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-emerald-400 focus:bg-black/60"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-white/60 uppercase">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-emerald-400 focus:bg-black/60"
              >
                <option value="Web Development" className="bg-[#020512]">Web Development</option>
                <option value="E-Commerce Platform" className="bg-[#020512]">E-Commerce</option>
                <option value="Business Software / POS" className="bg-[#020512]">Business Software / POS</option>
                <option value="AI Solution / LLM" className="bg-[#020512]">AI Solution</option>
                <option value="Workflow Automation" className="bg-[#020512]">Automation</option>
                <option value="Mobile Application" className="bg-[#020512]">Mobile App</option>
                <option value="Data & Analytics" className="bg-[#020512]">Data / Analytics</option>
                <option value="Other Digital Product" className="bg-[#020512]">Other</option>
              </select>
            </div>

            {/* Budget & Timeline */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/60 uppercase">
                  Budget Range (Optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-emerald-400 focus:bg-black/60"
                >
                  <option value="Not decided" className="bg-[#020512]">Not decided</option>
                  <option value="Under $500" className="bg-[#020512]">Under $500</option>
                  <option value="$500 – $1,000" className="bg-[#020512]">$500 – $1,000</option>
                  <option value="$1,000 – $3,000" className="bg-[#020512]">$1,000 – $3,000</option>
                  <option value="$3,000+" className="bg-[#020512]">$3,000+</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/60 uppercase">
                  Timeline (Optional)
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-emerald-400 focus:bg-black/60"
                >
                  <option value="ASAP" className="bg-[#020512]">ASAP</option>
                  <option value="1 – 4 weeks" className="bg-[#020512]">1 – 4 weeks</option>
                  <option value="1 – 3 months" className="bg-[#020512]">1 – 3 months</option>
                  <option value="Flexible" className="bg-[#020512]">Flexible</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-white/60 uppercase">
                Project Details *
              </label>
              <textarea
                name="details"
                required
                rows={3}
                placeholder="Tell me briefly about your goals, features, or requirements..."
                value={formData.details}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-emerald-400 focus:bg-black/60"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/20 py-3 text-xs font-mono uppercase tracking-widest text-emerald-200 transition-all hover:bg-emerald-500/35 hover:text-white hover:shadow-[0_0_30px_rgba(52,211,153,0.35)] active:scale-[0.99]"
              >
                <span>Dispatch To WhatsApp</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* ================= BOTTOM FOOTER STATEMENT ================= */}
      <div className="border-t border-white/[0.08] pt-4 text-center">
        <p className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
          Available for freelance projects, technical consulting & digital product development.
        </p>
      </div>
    </div>
  );
}