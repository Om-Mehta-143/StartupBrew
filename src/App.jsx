import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A192F] font-sans text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
