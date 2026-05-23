import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import SocialProof from '../app/components/SocialProof';
import Features from '../app/components/Features';
import ThemeCatalog from '../app/components/ThemeCatalog';
import Pricing from '../app/components/Pricing';
import FAQ from '../app/components/FAQ';
import RecentBlog from '../app/components/RecentBlog';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <ThemeCatalog />
      <Pricing />
      <FAQ />
      <RecentBlog />
      <Footer />
    </main>
  );
}