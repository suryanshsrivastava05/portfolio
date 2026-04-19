'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Float, Text, ContactShadows, PresentationControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import ProjectsGrid from '@/components/sections/projects-grid';
import CtaBanner from '@/components/sections/cta-banner';

// 3D Floating Spatial Node
function SpatialNode({ position, title, subtitle, color }: { position: [number, number, number], title: string, subtitle: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <boxGeometry args={[4, 2.5, 0.2]} />
          <meshPhysicalMaterial 
            color={color}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
        <Text
          position={[0, 0.5, 0.15]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
        <Text
          position={[0, -0.2, 0.15]}
          fontSize={0.15}
          color="#cccccc"
          maxWidth={3.5}
          textAlign="center"
        >
          {subtitle}
        </Text>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 bg-background pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }} className="pointer-events-auto">
        <Suspense fallback={null}>
          <color attach="background" args={['#060608']} />
          
          {/* Ultra-realistic Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />
          <Environment preset="city" />

          <PresentationControls global rotation={[0, 0, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <ScrollControls pages={5} damping={0.2}>
              
              {/* 3D Spatial Environment Nodes */}
              <Scroll>
                {/* Origin / Hero Node */}
                <SpatialNode 
                  position={[0, -1, -2]} 
                  title="Creative Developer" 
                  subtitle="Crafting immersive digital experiences with code, design, and a touch of magic."
                  color="#13131a"
                />
                
                {/* Services Node */}
                <SpatialNode 
                  position={[3, -8, -4]} 
                  title="Engineering" 
                  subtitle="Building fast, scalable, and responsive web applications."
                  color="#6c63ff"
                />

                <SpatialNode 
                  position={[-3, -12, -3]} 
                  title="Design" 
                  subtitle="Creating intuitive and visually stunning user interfaces."
                  color="#ff6584"
                />

                {/* Projects Node */}
                <SpatialNode 
                  position={[0, -18, -5]} 
                  title="The Gallery" 
                  subtitle="A curated collection of web development and UI/UX projects."
                  color="#00f5d4"
                />
              </Scroll>

              {/* DOM Overlays (HTML Layer) */}
              <Scroll html style={{ width: '100vw' }}>
                <div className="relative z-10 w-full pointer-events-none [&>*]:pointer-events-auto">
                  <HeroSection />
                  <div className="pt-[20vh]" />
                  <AboutSection />
                  <div className="pt-[20vh]" />
                  <ServicesSection />
                  <div className="pt-[20vh]" />
                  <ProjectsGrid />
                  <div className="pt-[20vh]" />
                  <CtaBanner />
                </div>
              </Scroll>
            </ScrollControls>
          </PresentationControls>

          {/* Shadows floor */}
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
