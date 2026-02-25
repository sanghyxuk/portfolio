// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <ProjectGrid />
      </main>
      <footer className="py-10 text-center text-slate-400 text-xs border-t border-slate-100 mt-10">
        © 2026 Sanghyuk. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;