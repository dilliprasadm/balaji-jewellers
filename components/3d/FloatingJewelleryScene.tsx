"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface FloatingJewellerySceneProps {
  className?: string;
}

export function FloatingJewelleryScene({ className }: FloatingJewellerySceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const canvas = document.createElement("canvas");
      return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!hasWebGL) return;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd8b46a, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x450006, 1.8);
    fillLight.position.set(-4, -2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xf1d99a, 3, 10);
    rimLight.position.set(0, 4, -2);
    scene.add(rimLight);

    // Group for the jewellery artifact
    const jewelleryGroup = new THREE.Group();
    scene.add(jewelleryGroup);

    // Material: Champagne Gold Metallic
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8b46a,
      metalness: 0.92,
      roughness: 0.22,
      envMapIntensity: 1.5,
    });

    const softGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1d99a,
      metalness: 0.85,
      roughness: 0.18,
    });

    const gemMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 2.4, // Diamond IOR
      metalness: 0.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    // Ring Shank (Torus)
    const shankGeometry = new THREE.TorusGeometry(1.2, 0.14, 32, 100);
    const shank = new THREE.Mesh(shankGeometry, goldMaterial);
    jewelleryGroup.add(shank);

    // Raised Bezel / Collet Mount
    const mountGeometry = new THREE.CylinderGeometry(0.55, 0.4, 0.35, 8);
    const mount = new THREE.Mesh(mountGeometry, softGoldMaterial);
    mount.position.set(0, 1.25, 0);
    mount.rotation.y = Math.PI / 8;
    jewelleryGroup.add(mount);

    // Faceted Solitaire Stone (Octahedron / Brilliant Crown)
    const gemGeometry = new THREE.OctahedronGeometry(0.48, 2);
    const gem = new THREE.Mesh(gemGeometry, gemMaterial);
    gem.position.set(0, 1.38, 0);
    jewelleryGroup.add(gem);

    // Filigree Micro Granules around Collet (8 tiny spheres)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const beadGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const bead = new THREE.Mesh(beadGeo, softGoldMaterial);
      bead.position.set(Math.cos(angle) * 0.52, 1.28, Math.sin(angle) * 0.52);
      jewelleryGroup.add(bead);
    }

    // Default tilt
    jewelleryGroup.rotation.x = 0.45;
    jewelleryGroup.rotation.y = -0.3;

    // Mouse / Touch Interaction
    let targetRotationX = 0.45;
    let targetRotationY = -0.3;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.8;
      targetRotationX = 0.45 - y * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle breathing float
      jewelleryGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      // Smooth inertia rotation following mouse + idle rotation
      jewelleryGroup.rotation.y += (targetRotationY + elapsedTime * 0.25 - jewelleryGroup.rotation.y) * 0.04;
      jewelleryGroup.rotation.x += (targetRotationX - jewelleryGroup.rotation.x) * 0.04;

      // Gentle gem shimmer
      gem.rotation.y = elapsedTime * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      shankGeometry.dispose();
      mountGeometry.dispose();
      gemGeometry.dispose();
      goldMaterial.dispose();
      softGoldMaterial.dispose();
      gemMaterial.dispose();
    };
  }, [hasWebGL]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] flex items-center justify-center ${className || ""}`}
    >
      {!hasWebGL && (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-[#260003]/80 border border-champagne-gold/30">
          <span className="font-serif text-lg text-soft-gold mb-2">Architectural Jewellery Study</span>
          <span className="text-xs font-sans text-warm-ivory/60 tracking-wider">
            WebGL acceleration unavailable on your device.
          </span>
        </div>
      )}
    </div>
  );
}
