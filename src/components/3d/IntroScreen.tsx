"use client";

import { useEffect, useState } from "react";

type IntroScreenProps = {
  onEnter: () => void;
};

type Stage = {
  progress: number;
  status: string;
  duration: number;
};

const STAGES: Stage[] = [
  {
    progress: 0,
    status: "INITIALIZING",
    duration: 250,
  },
  {
    progress: 20,
    status: "ALIGNING ORBITS",
    duration: 350,
  },
  {
    progress: 60,
    status: "IGNITING CORE",
    duration: 400,
  },
  {
    progress: 100,
    status: "UNIVERSE ONLINE",
    duration: 550,
  },
];

const RING_RADIUS = 96;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ProgressRing({ progress }: { progress: number }) {
  const dashOffset =
    RING_CIRCUMFERENCE -
    (progress / 100) * RING_CIRCUMFERENCE;

  const angle = (progress / 100) * 360 - 90;

  const radians = (angle * Math.PI) / 180;

  const dotX =
    115 + RING_RADIUS * Math.cos(radians);

  const dotY =
    115 + RING_RADIUS * Math.sin(radians);

  return (
    <svg
      viewBox="0 0 230 230"
      className="absolute inset-0 h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* Progress gradient */}
        <linearGradient
          id="progressGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#4f8cff"
          />

          <stop
            offset="55%"
            stopColor="#5da9ff"
          />

          <stop
            offset="100%"
            stopColor="#8fd3ff"
          />
        </linearGradient>

        {/* Progress glow */}
        <filter
          id="progressGlow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur
            stdDeviation="3.5"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Endpoint glow */}
        <filter
          id="dotGlow"
          x="-300%"
          y="-300%"
          width="600%"
          height="600%"
        >
          <feGaussianBlur
            stdDeviation="4"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* =====================================================
          BACKGROUND FULL RING
      ====================================================== */}

      <circle
        cx="115"
        cy="115"
        r={RING_RADIUS}
        fill="none"
        stroke="rgba(70,130,220,0.10)"
        strokeWidth="2"
      />

      {/* =====================================================
          OUTER SUBTLE RING
      ====================================================== */}

      <circle
        cx="115"
        cy="115"
        r={RING_RADIUS + 8}
        fill="none"
        stroke="rgba(60,120,220,0.045)"
        strokeWidth="1"
      />

      {/* =====================================================
          ACTIVE PROGRESS RING
      ====================================================== */}

      <circle
        cx="115"
        cy="115"
        r={RING_RADIUS}
        fill="none"
        stroke="url(#progressGradient)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeDasharray={RING_CIRCUMFERENCE}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 115 115)"
        filter="url(#progressGlow)"
        style={{
          transition:
            "stroke-dashoffset 320ms cubic-bezier(.4,0,.2,1)",
        }}
      />

      {/* =====================================================
          GLOWING END POINT
      ====================================================== */}

      {progress > 0 && (
        <g>
          <circle
            cx={dotX}
            cy={dotY}
            r="7"
            fill="rgba(70,150,255,0.25)"
            filter="url(#dotGlow)"
          />

          <circle
            cx={dotX}
            cy={dotY}
            r="2.8"
            fill="#e5f7ff"
            filter="url(#dotGlow)"
          />
        </g>
      )}
    </svg>
  );
}

export default function IntroScreen({
  onEnter,
}: IntroScreenProps) {
  const [stageIndex, setStageIndex] = useState(0);
  const [showWelcome, setShowWelcome] =
    useState(false);
  const [showEnter, setShowEnter] =
    useState(false);

  const currentStage = STAGES[stageIndex];

  useEffect(() => {
    if (stageIndex < STAGES.length - 1) {
      const timer = window.setTimeout(() => {
        setStageIndex(
          (previous) => previous + 1
        );
      }, currentStage.duration);

      return () => {
        window.clearTimeout(timer);
      };
    }

    /*
      100% reached.
      Give the final ring a short moment,
      then transition to Welcome.
    */

    const welcomeTimer = window.setTimeout(() => {
      setShowWelcome(true);
    }, 450);

    const enterTimer = window.setTimeout(() => {
      setShowEnter(true);
    }, 1250);

    return () => {
      window.clearTimeout(welcomeTimer);
      window.clearTimeout(enterTimer);
    };
  }, [stageIndex, currentStage.duration]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#010208] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(25,70,180,0.12),transparent_30%,rgba(0,0,0,0)_70%)]" />

      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[110px]" />

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="absolute inset-0">
        {[
          [8, 18],
          [14, 67],
          [21, 34],
          [28, 79],
          [35, 15],
          [42, 88],
          [49, 26],
          [57, 72],
          [64, 17],
          [70, 84],
          [77, 33],
          [84, 63],
          [91, 20],
          [94, 78],
          [5, 46],
          [32, 52],
          [67, 48],
        ].map(([left, top], index) => (
          <span
            key={index}
            className="absolute h-[1px] w-[1px] rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity:
                0.15 + (index % 4) * 0.1,
              animation: `starPulse ${
                2.5 + (index % 3)
              }s ease-in-out infinite`,
              animationDelay: `${
                index * 0.15
              }s`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">

          {/* =================================================
              WAKING UP / THE UNIVERSE
          ================================================= */}

          <div
            className={`absolute bottom-[calc(50%+170px)] left-1/2 w-full -translate-x-1/2 transition-all duration-1000 ${
              showWelcome
                ? "translate-y-[-15px] opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/30 sm:w-12" />

              <p className="text-[10px] font-medium uppercase tracking-[0.55em] text-white/65 sm:text-xs">
                Waking Up
              </p>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/30 sm:w-12" />
            </div>

            <p className="mt-2 text-[9px] uppercase tracking-[0.5em] text-blue-300/45 sm:text-[10px]">
              The Universe
            </p>
          </div>

          {/* =================================================
              CENTRAL ENERGY SYSTEM
          ================================================= */}

          <div
            className={`relative h-[230px] w-[230px] transition-all duration-[1400ms] ${
              showWelcome
                ? "scale-90 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            {/* =================================================
                PROGRESS RING
            ================================================== */}

            <ProgressRing
              progress={currentStage.progress}
            />

            {/* =================================================
                TILTED ORBIT
            ================================================== */}

            <div
              className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08]"
              style={{
                transform:
                  "translate(-50%, -50%) rotateX(68deg)",
                animation:
                  "orbitTilt 10s linear infinite",
              }}
            />

            {/* =================================================
                INNER ORBIT
            ================================================== */}

            <div
              className="absolute left-1/2 top-1/2 h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.07]"
              style={{
                transform:
                  "translate(-50%, -50%) rotateY(65deg)",
                animation:
                  "orbitVertical 8s linear infinite",
              }}
            />

            {/* =================================================
                OUTER ORBIT
            ================================================== */}

            <div
              className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.045]"
              style={{
                animation:
                  "orbitSpin 16s linear infinite",
              }}
            />

            {/* =================================================
                CORE GLOW
            ================================================== */}

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[30px]" />

            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[18px]" />

            {/* =================================================
                CORE LIGHT
            ================================================== */}

            <div
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
              style={{
                boxShadow:
                  "0 0 8px #fff, 0 0 25px rgba(90,150,255,.95), 0 0 60px rgba(40,100,255,.65)",
                animation:
                  "corePulse 1.6s ease-in-out infinite",
              }}
            />

            {/* =================================================
                PERCENTAGE
            ================================================== */}

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[62px] flex-col items-center">
              <div className="flex items-baseline">
                <span
                  key={currentStage.progress}
                  className="text-4xl font-light tracking-[-0.06em] text-white/75 sm:text-5xl"
                  style={{
                    animation:
                      "numberReveal 280ms ease-out",
                  }}
                >
                  {currentStage.progress}
                </span>

                <span className="ml-1 text-[10px] text-blue-300/50">
                  %
                </span>
              </div>

              <p
                key={currentStage.status}
                className="mt-2 text-[7px] uppercase tracking-[0.4em] text-white/30 sm:text-[8px]"
                style={{
                  animation:
                    "statusReveal 300ms ease-out",
                }}
              >
                {currentStage.status}
              </p>
            </div>
          </div>

          {/* =================================================
              WELCOME SCREEN
          ================================================== */}

          <div
            className={`absolute left-1/2 top-[43%] w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center transition-all duration-[1100ms] ${
              showWelcome
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-105 opacity-0"
            }`}
          >
            <p className="text-[9px] uppercase tracking-[0.65em] text-white/40 sm:text-[10px]">
              Welcome to
            </p>

            <h1 className="mt-4 text-4xl font-light tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Rokon&apos;s{" "}
              <span className="text-blue-300">
                Universe
              </span>
            </h1>

            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            <p className="mt-5 text-[7px] uppercase tracking-[0.5em] text-white/25 sm:text-[8px]">
              A digital journey begins
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          ENTER BUTTON
      ====================================================== */}

      <div
        className={`absolute bottom-[12%] left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          showEnter
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onEnter}
          aria-label="Enter Rokon&apos;s Universe"
          className="group flex flex-col items-center"
        >
          {/* =================================================
              GLOWING ENTER BUTTON
          ================================================== */}

          <span
            className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-blue-400/70 bg-blue-500/[0.06] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-blue-300 group-hover:bg-blue-500/[0.12] group-hover:shadow-[0_0_55px_rgba(50,130,255,0.55)]"
            style={{
              animation:
                "enterGlow 2s ease-in-out infinite",
            }}
          >
            {/* Outer glow ring */}

            <span
              className="absolute inset-[-8px] rounded-full border border-blue-400/20"
              style={{
                animation:
                  "enterRing 2s ease-in-out infinite",
              }}
            />

            {/* Second subtle glow */}

            <span
              className="absolute inset-[-15px] rounded-full border border-blue-400/[0.06]"
              style={{
                animation:
                  "enterRingOuter 2s ease-in-out infinite",
              }}
            />

            <span className="relative z-10 text-[9px] font-medium uppercase tracking-[0.3em] text-white/90">
              Enter
            </span>
          </span>

          {/* =================================================
              ENTER SUBTITLE
          ================================================== */}

          <span className="mt-4 text-[7px] uppercase tracking-[0.5em] text-blue-300/55 transition-colors duration-300 group-hover:text-blue-200">
            Begin the journey
          </span>
        </button>
      </div>

      {/* =====================================================
          SKIP INTRO
      ====================================================== */}

      <button
        type="button"
        onClick={onEnter}
        className={`absolute bottom-7 left-1/2 -translate-x-1/2 text-[7px] uppercase tracking-[0.45em] text-white/20 transition-all duration-700 hover:text-white/55 ${
          showEnter
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        Skip Intro
      </button>

      {/* =====================================================
          CORNER BRAND
      ====================================================== */}

      <div className="absolute bottom-7 left-7">
        <p className="text-[7px] uppercase tracking-[0.42em] text-white/15">
          Rokon
        </p>
      </div>

      <div className="absolute bottom-7 right-7">
        <p className="text-[7px] uppercase tracking-[0.42em] text-white/15">
          2026
        </p>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx global>{`
        /* Core */

        @keyframes corePulse {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.75);
            opacity: 0.7;
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.35);
            opacity: 1;
          }
        }

        /* Orbit */

        @keyframes orbitSpin {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes orbitTilt {
          from {
            transform:
              translate(-50%, -50%)
              rotateX(68deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotateX(68deg)
              rotateZ(360deg);
          }
        }

        @keyframes orbitVertical {
          from {
            transform:
              translate(-50%, -50%)
              rotateY(65deg)
              rotateZ(360deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotateY(65deg)
              rotateZ(0deg);
          }
        }

        /* Stars */

        @keyframes starPulse {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.8);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.5);
          }
        }

        /* Number */

        @keyframes numberReveal {
          0% {
            opacity: 0;
            transform:
              translateY(8px)
              scale(0.9);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        /* Status */

        @keyframes statusReveal {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =================================================
           ENTER BUTTON GLOW
        ================================================== */

        @keyframes enterGlow {
          0%,
          100% {
            box-shadow:
              0 0 12px rgba(50, 130, 255, 0.15),
              0 0 28px rgba(50, 130, 255, 0.08);
          }

          50% {
            box-shadow:
              0 0 22px rgba(50, 140, 255, 0.45),
              0 0 55px rgba(50, 120, 255, 0.25),
              0 0 85px rgba(30, 100, 255, 0.10);
          }
        }

        @keyframes enterRing {
          0%,
          100% {
            transform: scale(0.96);
            opacity: 0.25;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.7;
          }
        }

        @keyframes enterRingOuter {
          0%,
          100% {
            transform: scale(0.94);
            opacity: 0.08;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.22;
          }
        }
      `}</style>
    </div>
  );
}