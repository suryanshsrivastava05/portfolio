'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-background">
      <Scene />
    </main>
  );
}
