import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";

// 메인 화면 컴포넌트를 분리했습니다.
function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <ProjectGrid />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        {/* 주소에 따라 바뀌는 메인 영역 */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* :id 부분에 peace-cat 같은 주소가 들어옵니다 */}
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        <footer className="py-10 text-center text-gray-400 text-xs border-t border-gray-100 mt-10">
          © 2026 Sanghyuk. Built with React & Tailwind CSS.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;