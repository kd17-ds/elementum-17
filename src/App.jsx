import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MeetPeople from './components/MeetPeople/MeetPeople';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <MeetPeople />
        <Services />
        <Testimonial />
      </main>
    </div>
  );
}
