import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
