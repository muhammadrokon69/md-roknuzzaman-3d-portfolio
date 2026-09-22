"use client";

import { useState } from "react";
import UniverseScene from "@/components/3d/UniverseScene";
import IntroScreen from "@/components/3d/IntroScreen";
import OrbitalNavigation from "@/components/navigation/OrbitalNavigation";

// নতুন তৈরি করা মডালগুলো ইমপোর্ট করুন:
import AboutModal from "@/components/modals/AboutModal";
import SkillsModal from "@/components/modals/SkillsModal";
import ExperienceModal from "@/components/modals/ExperienceModal";
import ProjectsModal from "@/components/modals/ProjectsModal";
import ContactModal from "@/components/modals/ContactModal";

type UniverseMode = "globe" | "planets";
type PlanetId = "about" | "skills" | "experience" | "projects" | "contact";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [universeMode, setUniverseMode] = useState<UniverseMode>("globe");
  const [activePlanet, setActivePlanet] = useState<PlanetId | null>(null);

  const handleEnter = () => {
    setEntered(true);
    setUniverseMode("globe");
    setActivePlanet(null);
  };

  const handleExplore = () => {
    setActivePlanet(null);
    setUniverseMode("planets");
  };

  const handleBackToGlobe = () => {
    setUniverseMode("globe");
    setActivePlanet(null);
  };

  const handlePlanetNavigate = (id: PlanetId) => {
    setActivePlanet(id);
  };

  const handleCloseModal = () => {
    setActivePlanet(null);
  };

  const planetAccents: Record<PlanetId, { glow: string; border: string; text: string }> = {
    about: { glow: "rgba(56,189,248,0.18)", border: "border-sky-500/30", text: "text-sky-400" },
    skills: { glow: "rgba(129,140,248,0.18)", border: "border-indigo-500/30", text: "text-indigo-400" },
    experience: { glow: "rgba(251,191,36,0.18)", border: "border-amber-500/30", text: "text-amber-400" },
    projects: { glow: "rgba(192,132,252,0.18)", border: "border-purple-500/30", text: "text-purple-400" },
    contact: { glow: "rgba(52,211,153,0.18)", border: "border-emerald-500/30", text: "text-emerald-400" },
  };

  const currentTheme = activePlanet ? planetAccents[activePlanet] : planetAccents.about;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white select-none">
      {!entered && <IntroScreen onEnter={handleEnter} />}

      {/* 3D GLOBE VIEW */}
      <section
        id="home"
        className={`relative h-full w-full overflow-hidden transition-opacity duration-1000 ${
          entered ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            universeMode === "globe"
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[0.96] opacity-0"
          }`}
        >
          <UniverseScene />
        </div>

        {/* TOP BRAND */}
        <div className="pointer-events-none absolute left-[3%] top-[4%] z-30">
          <div className="text-[18px] font-semibold tracking-tight text-white">
            Rokon<span className="text-blue-400">.</span>
          </div>
          <div className="mt-1 text-[7px] uppercase tracking-[0.45em] text-white/35">
            Digital Portfolio
          </div>
        </div>

        {/* ORBITAL NAVIGATION */}
        <OrbitalNavigation
          universeMode={universeMode}
          onBackToGlobe={handleBackToGlobe}
          onPlanetNavigate={handlePlanetNavigate}
        />

        {/* EXPLORE THE UNIVERSE BUTTON */}
        <div
          className={`pointer-events-none absolute inset-0 z-[50] flex items-center justify-center transition-all duration-[800ms] ${
            universeMode === "globe"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <button
            type="button"
            aria-label="Explore the Universe"
            onClick={handleExplore}
            className="group pointer-events-auto relative flex h-[170px] w-[170px] cursor-pointer items-center justify-center rounded-full border border-blue-300/70 bg-[#020b22]/60 shadow-[0_0_35px_rgba(40,120,255,0.35),inset_0_0_35px_rgba(30,100,255,0.2)] backdrop-blur-md outline-none transition-all duration-500 hover:scale-105 hover:border-blue-200 hover:shadow-[0_0_55px_rgba(40,120,255,0.5),inset_0_0_40px_rgba(30,100,255,0.3)]"
          >
            <div className="pointer-events-none absolute inset-[-9px] rounded-full border border-blue-400/20 shadow-[0_0_24px_rgba(40,120,255,0.18)] transition-all duration-500 group-hover:border-blue-300/40" />
            <div className="pointer-events-none absolute inset-[10px] rounded-full border border-blue-300/20" />

            <div className="pointer-events-none relative z-10 text-center">
              <div className="text-[17px] font-light uppercase tracking-[0.34em] text-white">
                Explore
              </div>
              <div className="mt-2 text-[8px] uppercase tracking-[0.42em] text-blue-100/75">
                The Universe
              </div>
              <div className="mx-auto mt-5 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-blue-300/70 bg-blue-500/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* ================= MODAL SHELL ================= */}
      {activePlanet && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 p-3 sm:p-6 md:p-8 backdrop-blur-2xl transition-all duration-500">
          <div
            className="pointer-events-none absolute h-[600px] w-[600px] rounded-full blur-[160px] transition-all duration-700"
            style={{ backgroundColor: currentTheme.glow }}
          />

          <div
            className={`relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border ${currentTheme.border} bg-[#020512]/95 p-5 sm:p-8 md:p-10 shadow-[0_0_90px_rgba(0,0,0,0.85)] scrollbar-thin scrollbar-thumb-white/10`}
          >
            {/* কোণার স্টাইলিশ সাইবার ব্র্যাকেট */}
            <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-white/20 rounded-tl-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-white/20 rounded-tr-3xl" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
              <div className="flex items-center gap-2.5">
                <span className={`inline-block h-2 w-2 rounded-full animate-ping ${currentTheme.text} bg-current`} />
                <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/50">
                  SYSTEM // TERMINAL DATA LOADED
                </span>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* কম্পোনেন্ট অনুযায়ী ডায়নামিক রেন্ডার (Clean Architecture) */}
            {activePlanet === "about" && <AboutModal />}
            {activePlanet === "skills" && <SkillsModal />}
            {activePlanet === "experience" && <ExperienceModal />}
            {activePlanet === "projects" && <ProjectsModal />}
            {activePlanet === "contact" && <ContactModal />}

            {/* রিটার্ন বাটন */}
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="text-[9px] font-mono tracking-widest text-white/30 hidden sm:block">
                NODE STATUS: SYNCHRONIZED
              </span>
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-full border border-white/10 px-6 py-2 text-[9px] font-mono uppercase tracking-[0.25em] text-white/50 transition-all hover:border-white/30 hover:text-white"
              >
                ← Return to Planet Universe
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}