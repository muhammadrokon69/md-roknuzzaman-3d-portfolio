"use client";

import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";

type PlanetId = "about" | "skills" | "experience" | "projects" | "contact";

type PlanetData = {
  id: PlanetId;
  title: string;
  subtitle: string;
  position: [number, number, number];
  size: number;
  color: string;
  glowColor: string;
  ringTilt?: [number, number, number];
  phase: number;
};

type PlanetProps = PlanetData & {
  onSelect: (id: PlanetId) => void;
};

/* =========================================================
   PLANET DATA
========================================================= */

const planets: PlanetData[] = [
  {
    id: "about",
    title: "ABOUT",
    subtitle: "Who I am",
    position: [-3.3, 1.45, 0],
    size: 0.6,
    color: "#38bdf8",
    glowColor: "#0284c7",
    ringTilt: [Math.PI * 0.35, Math.PI * 0.1, 0],
    phase: 0,
  },
  {
    id: "skills",
    title: "SKILLS",
    subtitle: "Tech stack",
    position: [3.3, 1.45, -0.2],
    size: 0.64,
    color: "#818cf8",
    glowColor: "#4f46e5",
    ringTilt: [Math.PI * 0.2, Math.PI * 0.4, 0],
    phase: 1.2,
  },
  {
    id: "experience",
    title: "EXPERIENCE",
    subtitle: "Timeline",
    position: [-3.2, -1.45, 0.1],
    size: 0.65,
    color: "#fbbf24",
    glowColor: "#d97706",
    ringTilt: [Math.PI * 0.4, Math.PI * 0.15, 0.2],
    phase: 2.1,
  },
  {
    id: "projects",
    title: "PROJECTS",
    subtitle: "Things I've built",
    position: [3.2, -1.45, 0.2],
    size: 0.68,
    color: "#c084fc",
    glowColor: "#9333ea",
    ringTilt: [Math.PI * 0.3, -Math.PI * 0.2, 0],
    phase: 3.2,
  },
  {
    id: "contact",
    title: "CONTACT",
    subtitle: "Let's connect",
    position: [0, -2.55, 0.3],
    size: 0.56,
    color: "#34d399",
    glowColor: "#059669",
    ringTilt: [Math.PI * 0.25, 0, Math.PI * 0.1],
    phase: 4.1,
  },
];

/* =========================================================
   CENTRAL CORE: ROKON'S UNIVERSE
========================================================= */

function CentralCore() {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (!coreRef.current) return;

    // পালসিং ও ঘূর্ণন
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.6) * 0.05;
    coreRef.current.scale.setScalar(pulse);
    coreRef.current.rotation.y += delta * 0.15;

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0.05, 0]}>
      {/* সেন্ট্রাল লাইট সোর্স */}
      <pointLight color="#60a5fa" intensity={3} distance={8} />

      {/* নেবুলা গ্লো লেয়ার */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.06}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* গ্লোয়িং কোর বডি */}
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial
          color="#1e40af"
          emissive="#60a5fa"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* কোরের চারপাশের সুক্ষ্ম অর্বিট রিং */}
      <mesh ref={ringRef} rotation={[Math.PI * 0.45, 0, 0]}>
        <torusGeometry args={[0.65, 0.008, 12, 64]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.4} />
      </mesh>

      {/* ROKON'S UNIVERSE লেবেল */}
      <Html
        center
        distanceFactor={8.5}
        style={{ pointerEvents: "none", whiteSpace: "nowrap" }}
      >
        <div className="flex flex-col items-center justify-center select-none">
          <div className="rounded-full border border-blue-400/30 bg-[#020b22]/70 px-3.5 py-1 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <div className="text-[8px] sm:text-[9px] font-semibold tracking-[0.35em] text-blue-200/90">
              ROKON&apos;S
            </div>
          </div>
          <div className="mt-1 text-[10px] sm:text-[11px] font-light tracking-[0.25em] text-white">
            UNIVERSE
          </div>
        </div>
      </Html>
    </group>
  );
}

/* =========================================================
   PLANET COMPONENT
========================================================= */

function Planet({
  id,
  title,
  subtitle,
  position,
  size,
  color,
  glowColor,
  ringTilt = [Math.PI * 0.35, Math.PI * 0.1, 0],
  phase,
  onSelect,
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const baseY = position[1];

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.22;
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.05;
    }

    groupRef.current.position.y =
      baseY + Math.sin(clock.elapsedTime * 0.75 + phase) * 0.09;

    const targetScale = hovered ? 1.15 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* গ্লো লেয়ার */}
      <mesh>
        <sphereGeometry args={[size * 1.35, 32, 32]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={hovered ? 0.25 : 0.08}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* প্ল্যানেট বডি */}
      <mesh>
        <sphereGeometry args={[size, 48, 48]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.6 : 0.22}
          roughness={0.4}
          metalness={0.25}
        />
      </mesh>

      {/* রিং */}
      <mesh ref={ringRef} rotation={ringTilt}>
        <torusGeometry args={[size * 1.45, size * 0.02, 16, 90]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.8 : 0.35}
        />
      </mesh>

      {/* লেবেল */}
      <Html
        center
        distanceFactor={8.5}
        style={{ pointerEvents: "none", whiteSpace: "nowrap" }}
      >
        <div
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            hovered ? "scale-105" : "scale-100 opacity-80"
          }`}
        >
          <div className="rounded-full border border-white/10 bg-black/60 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/40">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-white">
              {title}
            </div>
          </div>
          <div className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-white/50">
            {subtitle}
          </div>
        </div>
      </Html>
    </group>
  );
}

/* =========================================================
   ORBITAL TRACKS
========================================================= */

function OrbitalTrack({ radius }: { radius: number }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.008, 90]} />
      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.06}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* =========================================================
   PLANET FIELD
========================================================= */

function PlanetField({ onSelect }: { onSelect: (id: PlanetId) => void }) {
  const { viewport } = useThree();
  const responsiveScale = Math.min(1, viewport.width / 9.5);

  return (
    <group scale={responsiveScale}>
      {/* সেন্ট্রাল কোর যুক্ত করা হয়েছে */}
      <CentralCore />

      {/* ব্যাকগ্রাউন্ড অর্বিট রিং */}
      <OrbitalTrack radius={2.2} />
      <OrbitalTrack radius={3.6} />

      {planets.map((planet) => (
        <Planet key={planet.id} {...planet} onSelect={onSelect} />
      ))}
    </group>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

type PlanetUniverseProps = {
  visible: boolean;
  onBack: () => void;
  onNavigate: (id: PlanetId) => void;
};

export default function PlanetUniverse({
  visible,
  onBack,
  onNavigate,
}: PlanetUniverseProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#00030a] transition-all duration-700 ease-out ${
        visible
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-105 opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.6)_0%,rgba(0,3,10,0.98)_100%)]" />

      {/* টপ বার */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-6 sm:px-12 sm:py-8">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] sm:text-xs tracking-[0.2em] text-white/60 backdrop-blur-sm transition-all hover:border-blue-400/40 hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          BACK TO GLOBE
        </button>

        <div className="text-[9px] tracking-[0.35em] text-white/30 hidden sm:block">
          ROKON&apos;S UNIVERSE
        </div>
      </div>

      {/* হেডিং */}
      <div className="pointer-events-none absolute left-1/2 top-[10%] z-10 -translate-x-1/2 text-center">
        <span className="text-[9px] uppercase tracking-[0.4em] text-blue-400/80">
          Exploration Mode
        </span>
        <h2 className="mt-2 text-xl font-light tracking-[0.2em] text-white sm:text-3xl">
          CHOOSE A DESTINATION
        </h2>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 6, 4]} intensity={1.4} />

        <Stars
          radius={50}
          depth={40}
          count={2200}
          factor={2}
          saturation={0}
          fade
          speed={0.4}
        />

        <PlanetField onSelect={onNavigate} />
      </Canvas>

      {/* ফুটার টেক্সট */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
        <div className="text-[8px] uppercase tracking-[0.3em] text-white/30">
          Click any planet to access terminal
        </div>
      </div>
    </div>
  );
}