import dynamic from 'next/dynamic';

const DrawComponentNoSSR = dynamic(() => import('@/components/draw'), {
  ssr: false
});

export default function Home() {
  return (
    <main>
      <DrawComponentNoSSR />
    </main>
  );
}
