"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  MeshReflectorMaterial,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Hero WebGL scene.
 *
 * A faceted gold solid suspended over a mirror-polished floor — the floor is
 * the point, given what this company does. Everything is generated in-scene:
 * no HDR files, no GLTF, nothing fetched at runtime.
 */
export default function HeroScene({
  reduced = false,
  active = true,
}: {
  reduced?: boolean;
  /** False when the hero is scrolled out of view — halts the render loop. */
  active?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 1.1, 6.4], fov: 42 }}
      frameloop={!active ? "never" : reduced ? "demand" : "always"}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#f4f0e8"]} />
      <fog attach="fog" args={["#f4f0e8", 7, 17]} />

      <Suspense fallback={null}>
        <Scene reduced={reduced} />
        <Lighting />
      </Suspense>
    </Canvas>
  );
}

function Scene({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  // Gentle camera parallax toward the pointer.
  useFrame((state, delta) => {
    if (reduced || !group.current) return;
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.85 - camera.position.x) * Math.min(delta * 2, 0.1);
    camera.position.y +=
      (1.1 + pointer.y * 0.32 - camera.position.y) * Math.min(delta * 2, 0.1);
    camera.lookAt(0, 0.35, 0);
    group.current.rotation.y += delta * 0.11;
  });

  return (
    <>
      <Floor />
      <group ref={group} position={[0, 0.45, 0]}>
        <Gem />
        <Ring radius={2.35} tilt={-0.42} color="#0f8a7b" opacity={0.55} />
        <Ring radius={3.05} tilt={0.55} color="#b8862b" opacity={0.38} />
      </group>
      <Shards reduced={reduced} />
    </>
  );
}

/** The polished floor. Mirror finish, exactly what we sell. */
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.55, 0]}>
      <planeGeometry args={[52, 52]} />
      <MeshReflectorMaterial
        resolution={512}
        mixBlur={0.8}
        mixStrength={20}
        blur={[220, 70]}
        roughness={0.88}
        depthScale={1.15}
        minDepthThreshold={0.35}
        maxDepthThreshold={1.45}
        color="#e9e2d4"
        metalness={0.55}
        mirror={0}
      />
    </mesh>
  );
}

/** Faceted gold solid — the "shine" the brand is named for. */
function Gem() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.16;
    mesh.current.rotation.z += delta * 0.09;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.75}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[1.18, 0]} />
        <meshStandardMaterial
          color="#c9962f"
          metalness={1}
          roughness={0.2}
          envMapIntensity={1.35}
          flatShading
        />
      </mesh>
      {/* Wireframe shell gives the facets a drawn, technical edge. */}
      <mesh scale={1.035}>
        <icosahedronGeometry args={[1.18, 0]} />
        <meshBasicMaterial color="#8f6716" wireframe transparent opacity={0.16} />
      </mesh>
    </Float>
  );
}

function Ring({
  radius,
  tilt,
  color,
  opacity = 0.7,
}: {
  radius: number;
  tilt: number;
  color: string;
  opacity?: number;
}) {
  return (
    <mesh rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 12, 180]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

/** Drifting specks — dust catching the light above a freshly polished floor. */
function Shards({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, count } = useMemo(() => {
    const count = 140;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 2.2 + Math.random() * 5.5;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = -1.2 + Math.random() * 4.6;
      positions[i * 3 + 2] = Math.sin(a) * r;
    }
    return { positions, count };
  }, []);

  useFrame((state, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.y += delta * 0.035;
    const t = state.clock.elapsedTime;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      // Each speck bobs on its own phase so the field never pulses in unison.
      arr[i * 3 + 1] += Math.sin(t * 0.6 + i) * delta * 0.045;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#b8862b"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Studio lighting built from lightformers rather than an HDR file — keeps the
 * scene self-contained and the bundle free of a 2 MB environment map.
 */
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={1.3} color="#fff7ea" />
      <directionalLight position={[-5, 2, -4]} intensity={0.7} color="#bfe6df" />
      <pointLight position={[0, 2.4, 0]} intensity={9} color="#d7a744" distance={9} />

      <Environment resolution={256}>
        <Lightformer
          intensity={2.4}
          form="rect"
          position={[0, 4.5, -3]}
          scale={[8, 3, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={1.6}
          form="circle"
          position={[-4, 2, 2]}
          scale={[3, 3, 1]}
          color="#e6cf9a"
        />
        <Lightformer
          intensity={1.2}
          form="circle"
          position={[4.5, 1, 1.5]}
          scale={[3, 3, 1]}
          color="#bfe6df"
        />
        <Lightformer
          intensity={0.8}
          form="rect"
          position={[0, -3, 2]}
          scale={[9, 2, 1]}
          color="#d9cfbc"
        />
      </Environment>
    </>
  );
}
