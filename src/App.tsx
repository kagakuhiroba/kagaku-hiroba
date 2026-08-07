import Hero from './components/Hero';
import ScrollGallery from './components/ScrollGallery';
import SiteFooter from './components/SiteFooter';
import SiteNav from './components/SiteNav';

export default function App() {
  return (
    <div className="site" id="top">
      <SiteNav />
      <main>
        <Hero />
        <ScrollGallery />
      </main>
      <SiteFooter />
    </div>
  );
}
