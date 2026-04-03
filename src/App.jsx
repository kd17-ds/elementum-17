import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MeetPeople from './components/MeetPeople/MeetPeople';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MeetPeople />
      </main>
    </div>
  );
}
