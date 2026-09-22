import Image from "next/image";

export default function AboutModal() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-sky-400">
            01 · Who I Am
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-light text-white">
            MD. Roknuzzaman
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-mono text-sky-300/80">
            AI, Web, App & Automation Specialist
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-sky-200 uppercase">
            Currently: Arefin Tech
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12 items-start">
        <div className="md:col-span-5 space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-sky-400/25 bg-black/50 p-2 shadow-2xl group">
            <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-sky-400" />
            <div className="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r-2 border-b-2 border-sky-400" />

            <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden rounded-xl">
              <Image
                src="/Rokon.webp"
                alt="MD. Roknuzzaman - AI & Web Automation Specialist"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top filter grayscale contrast-110 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020512] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="text-[8px] font-mono tracking-widest text-sky-200/90 uppercase">
                  ID: ROKON // VERIFIED
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs font-mono space-y-2">
            <div className="flex justify-between border-b border-white/[0.04] pb-2">
              <span className="text-white/40">FOCUS:</span>
              <span className="text-sky-300 text-right">AI · Web · Automation</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-2">
              <span className="text-white/40">TECH:</span>
              <span className="text-white/80 text-right">Python, SQL, Next.js</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-white/40">STATUS:</span>
              <span className="text-emerald-400">Available For Projects</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-4">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-sky-400/80">
              My Approach & Mission
            </span>
            <blockquote className="mt-2 text-base sm:text-lg font-light italic text-white/90 leading-snug">
              &ldquo;Technology should solve real problems—not simply look impressive.&rdquo;
            </blockquote>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/60">
              I build practical digital solutions that help businesses, startups, and individuals turn ideas into scalable, useful products.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-sky-400/80">
              My Background
            </span>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/55">
              My journey combines education, agriculture, digital marketing, and technology. This diverse experience has helped me develop a practical approach to understanding problems and building technology-driven solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-sky-400/80 block mb-3">
              What I Do // Core Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "AI-Powered Solutions",
                "Web Development",
                "Mobile Applications",
                "Business Automation",
                "AI Content Creation",
                "Custom Digital Solutions",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.015] px-3 py-2 text-xs text-white/80 transition-all hover:border-sky-400/30 hover:bg-sky-500/[0.04]"
                >
                  <span className="text-sky-400 text-xs">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}