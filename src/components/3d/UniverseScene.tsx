"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";


/* =========================================================
   GLOBE
========================================================= */

function Globe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.028;
    groupRef.current.rotation.x += delta * 0.004;
  });

  return (
    <Float
      speed={0.65}
      rotationIntensity={0.06}
      floatIntensity={0.12}
    >
      <group
        ref={groupRef}
        position={[0, 0.35, 0]}
        scale={0.7}
      >
        {/* =================================================
            MAIN GLOBE
        ================================================== */}

        <mesh>
          <sphereGeometry args={[2.35, 64, 64]} />

          <meshStandardMaterial
            color="#061743"
            emissive="#04133d"
            emissiveIntensity={0.52}
            roughness={0.7}
            metalness={0.2}
            transparent
            opacity={0.97}
          />
        </mesh>

        {/* =================================================
            PRIMARY DIGITAL WIREFRAME
        ================================================== */}

        <mesh scale={1.002}>
          <sphereGeometry args={[2.35, 32, 32]} />

          <meshBasicMaterial
            color="#3985ff"
            wireframe
            transparent
            opacity={0.34}
          />
        </mesh>

        {/* =================================================
            SECONDARY WIREFRAME
        ================================================== */}

        <mesh scale={1.014}>
          <sphereGeometry args={[2.35, 20, 20]} />

          <meshBasicMaterial
            color="#72aaff"
            wireframe
            transparent
            opacity={0.14}
          />
        </mesh>

        {/* =================================================
            ATMOSPHERE
        ================================================== */}

        <mesh scale={1.035}>
          <sphereGeometry args={[2.35, 64, 64]} />

          <meshBasicMaterial
            color="#2d7dff"
            transparent
            opacity={0.06}
            side={THREE.BackSide}
          />
        </mesh>

        {/* =================================================
            OUTER GLOW
        ================================================== */}

        <mesh scale={1.055}>
          <sphereGeometry args={[2.35, 64, 64]} />

          <meshBasicMaterial
            color="#2670ff"
            transparent
            opacity={0.028}
            side={THREE.BackSide}
          />
        </mesh>

        {/* =================================================
            INTERNAL ORBIT RINGS
        ================================================== */}

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry
            args={[2.39, 0.012, 8, 160]}
          />

          <meshBasicMaterial
            color="#4b8cff"
            transparent
            opacity={0.2}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry
            args={[2.39, 0.009, 8, 160]}
          />

          <meshBasicMaterial
            color="#6ba4ff"
            transparent
            opacity={0.13}
          />
        </mesh>

        <mesh
          rotation={[
            Math.PI * 0.25,
            Math.PI * 0.12,
            Math.PI * 0.15,
          ]}
        >
          <torusGeometry
            args={[2.43, 0.008, 8, 160]}
          />

          <meshBasicMaterial
            color="#75adff"
            transparent
            opacity={0.1}
          />
        </mesh>

        {/* =================================================
            GLOWING DATA POINTS
        ================================================== */}

        <mesh position={[1.25, 0.95, 1.72]}>
          <sphereGeometry args={[0.048, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        <mesh position={[-1.65, 0.25, 1.25]}>
          <sphereGeometry args={[0.033, 16, 16]} />
          <meshBasicMaterial color="#8bc2ff" />
        </mesh>

        <mesh position={[0.75, -1.45, 1.45]}>
          <sphereGeometry args={[0.058, 16, 16]} />
          <meshBasicMaterial color="#5797ff" />
        </mesh>

        <mesh position={[-1.2, -1.15, 1.7]}>
          <sphereGeometry args={[0.027, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        <mesh position={[1.75, -0.4, 0.85]}>
          <sphereGeometry args={[0.027, 16, 16]} />
          <meshBasicMaterial color="#9bc8ff" />
        </mesh>

        {/* =================================================
            BLUE CORE LIGHT
        ================================================== */}

        <pointLight
          position={[1.2, 1.1, 2.8]}
          intensity={4.5}
          distance={5.5}
          color="#4f8dff"
        />
      </group>
    </Float>
  );
}

/* =========================================================
   SCENE CONTENT
========================================================= */

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.28} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.45}
        color="#dce9ff"
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={1.1}
        distance={10}
        color="#165cff"
      />

      <Stars
        radius={75}
        depth={50}
        count={2600}
        factor={1.15}
        saturation={0}
        fade
        speed={0.22}
      />

      <Globe />

      {/* ===================================================
          IMPORTANT:
          Explore button is intentionally NOT inside Canvas.

          It is now handled by normal HTML outside R3F.
      ==================================================== */}
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function UniverseScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#00030a]">
      {/* ===================================================
          DEEP SPACE BACKGROUND
      ==================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left nebula */}

        <div
          className="absolute left-[-16%] top-[16%] h-[600px] w-[600px] rounded-full bg-blue-700/[0.055] blur-[145px]"
          style={{
            animation:
              "nebulaLeft 20s ease-in-out infinite",
          }}
        />

        {/* Right nebula */}

        <div
          className="absolute right-[-14%] top-[30%] h-[620px] w-[620px] rounded-full bg-blue-600/[0.05] blur-[150px]"
          style={{
            animation:
              "nebulaRight 23s ease-in-out infinite",
          }}
        />

        {/* Top atmosphere */}

        <div
          className="absolute left-[35%] top-[-20%] h-[450px] w-[450px] rounded-full bg-indigo-500/[0.035] blur-[130px]"
          style={{
            animation:
              "nebulaTop 17s ease-in-out infinite",
          }}
        />

        {/* Central glow */}

        <div
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.025] blur-[130px]"
          style={{
            animation:
              "spaceBreath 7s ease-in-out infinite",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(0,0,0,0.18)_65%,rgba(0,0,0,0.72)_100%)]" />
      </div>

      {/* ===================================================
          CANVAS
      ==================================================== */}

      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{
            position: [0, 0, 8.5],
            fov: 42,
          }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          <SceneContent />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>

      {/* ===================================================
          GLOBAL ANIMATIONS
      ==================================================== */}

      <style jsx global>{`
        @keyframes nebulaLeft {
          0%,
          100% {
            transform: translate3d(-20px, 0, 0)
              scale(1);
            opacity: 0.4;
          }

          50% {
            transform: translate3d(65px, -35px, 0)
              scale(1.12);
            opacity: 0.85;
          }
        }

        @keyframes nebulaRight {
          0%,
          100% {
            transform: translate3d(20px, 10px, 0)
              scale(1);
            opacity: 0.35;
          }

          50% {
            transform: translate3d(-65px, 25px, 0)
              scale(1.13);
            opacity: 0.8;
          }
        }

        @keyframes nebulaTop {
          0%,
          100% {
            transform: translate3d(0, 0, 0)
              scale(0.9);
            opacity: 0.3;
          }

          50% {
            transform: translate3d(-35px, 45px, 0)
              scale(1.12);
            opacity: 0.7;
          }
        }

        @keyframes spaceBreath {
          0%,
          100% {
            transform: translate(-50%, -50%)
              scale(0.9);
            opacity: 0.3;
          }

          50% {
            transform: translate(-50%, -50%)
              scale(1.08);
            opacity: 0.65;
          }
        }

        @keyframes explorePulse {
          0%,
          100% {
            transform: scale(0.98);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.025);
            opacity: 0.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}