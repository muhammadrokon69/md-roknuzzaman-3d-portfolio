"use client";

import { useEffect, useRef } from "react";
import PlanetUniverse from "@/components/3d/PlanetUniverse";

/* =========================================================
   TYPES
========================================================= */

type PlanetId =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

type UniverseMode = "globe" | "planets";

type NavItem = {
  id: PlanetId;
  label: string;
  angle: number;
};

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navItems: NavItem[] = [
  {
    id: "about",
    label: "ABOUT",
    angle: 0,
  },
  {
    id: "skills",
    label: "SKILLS",
    angle: 72,
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    angle: 144,
  },
  {
    id: "projects",
    label: "PROJECTS",
    angle: 216,
  },
  {
    id: "contact",
    label: "CONTACT",
    angle: 288,
  },
];

const ORBIT_DURATION = 68;

/* =========================================================
   PROPS
========================================================= */

type OrbitalNavigationProps = {
  universeMode: UniverseMode;
  onBackToGlobe: () => void;
  onPlanetNavigate: (id: PlanetId) => void;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function OrbitalNavigation({
  universeMode,
  onBackToGlobe,
  onPlanetNavigate,
}: OrbitalNavigationProps) {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const orbitSizeRef = useRef({
    width: 520,
    height: 375,
  });

  /* =======================================================
     RESPONSIVE ORBIT SIZE
  ======================================================= */

  useEffect(() => {
    const updateOrbitSize = () => {
      const viewportWidth = window.innerWidth;
      const width = Math.min(Math.max(viewportWidth * 0.37, 390), 620);
      const height = width * 0.72;

      orbitSizeRef.current = {
        width,
        height,
      };
    };

    updateOrbitSize();
    window.addEventListener("resize", updateOrbitSize);

    return () => {
      window.removeEventListener("resize", updateOrbitSize);
    };
  }, []);

  /* =======================================================
     ORBIT ANIMATION
  ======================================================= */

  useEffect(() => {
    if (universeMode !== "globe") {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      startTimeRef.current = null;
      return;
    }

    const animate = (time: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }

      const elapsed = (time - startTimeRef.current) / 1000;
      const rotation = (elapsed / ORBIT_DURATION) * 360;

      const { width, height } = orbitSizeRef.current;
      const radiusX = width / 2;
      const radiusY = height / 2;

      navItems.forEach((item) => {
        const element = itemRefs.current[item.id];
        if (!element) return;

        const angle = ((item.angle + rotation) * Math.PI) / 180;
        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        element.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      startTimeRef.current = null;
    };
  }, [universeMode]);

  const isGlobe = universeMode === "globe";

  return (
    <>
      {/* 1. গ্লোবের চারপাশের অরবিট ও ঘূর্ণায়মান টেক্সট */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isGlobe ? "scale-100 opacity-100" : "scale-[1.035] opacity-0"
        }`}
      >
        <div className="relative h-[72vw] max-h-[446px] min-h-[280px] w-[74vw] max-w-[620px] min-w-[390px]">
          {/* OUTER ORBIT */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/[0.13]" />

          {/* SECOND ORBIT */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[61%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-300/[0.08]" />

          {/* THIRD SUBTLE ORBIT */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.025]" />

          {/* CENTRAL GUIDE RING */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.045]" />

          {/* ঘূর্ণায়মান লেবেলসমূহ */}
          {navItems.map((item) => (
            <div
              key={item.id}
              ref={(element) => {
                itemRefs.current[item.id] = element;
              }}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 whitespace-nowrap select-none will-change-transform"
            >
              <div className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-blue-400/75 shadow-[0_0_10px_rgba(70,145,255,0.7)]" />
                <span className="text-[8px] uppercase tracking-[0.38em] text-white/40">
                  {item.label}
                </span>
              </div>
            </div>
          ))}

          {/* ডেকোরেটিভ নোডস */}
          <div className="pointer-events-none absolute left-[10%] top-1/2 h-[3px] w-[3px] rounded-full bg-blue-400/25" />
          <div className="pointer-events-none absolute right-[10%] top-1/2 h-[3px] w-[3px] rounded-full bg-blue-400/20" />
          <div className="pointer-events-none absolute left-1/2 top-[8%] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-blue-400/20" />
          <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-blue-400/20" />
        </div>

        <div className="pointer-events-none absolute bottom-[3.2%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[6px] uppercase tracking-[0.48em] text-white/20">
          MOVE THROUGH THE ORBIT
        </div>
      </div>

      {/* 2. PLANET UNIVERSE: শুধুমাত্র planets মোডেই রেন্ডার হবে যাতে গ্লোবে বাটন ব্লক না হয় */}
      {!isGlobe && (
        <PlanetUniverse
          visible={!isGlobe}
          onBack={onBackToGlobe}
          onNavigate={onPlanetNavigate}
        />
      )}
    </>
  );
}