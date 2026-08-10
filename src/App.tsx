import Header from './components/Header';
import Hero from './sections/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen w-full bg-[#1c1917] text-white overflow-hidden flex flex-col justify-between">
      <Header />
      <main className="w-full flex-grow flex items-center">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;