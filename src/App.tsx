import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <main className="page-main">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
