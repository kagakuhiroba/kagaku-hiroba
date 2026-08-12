import FloatingMascot from './components/FloatingMascot';
import Hero from './components/Hero';
import ScrollGallery from './components/ScrollGallery';

export default function App() {
  return (
    <div className="site" id="top">
      <main>
        <Hero />
        <ScrollGallery />
      </main>
      <FloatingMascot />
    </div>
  );
}
