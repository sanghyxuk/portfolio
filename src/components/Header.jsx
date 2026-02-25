import { useState } from 'react';
import { Link } from 'react-router-dom'; // 👈 홈 이동을 위해 Link 기능 추가
import { projectData } from "../data/projects";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* ✨ 로고 클릭 시 메인('/')으로 부드럽게 이동합니다 */}
        <Link to="/" className="font-extrabold text-2xl text-black tracking-tighter hover:text-gray-600 transition-colors">
          Sanghyuk.log
        </Link>
        
        <div className="flex gap-8 text-sm font-semibold text-gray-500">
          {/* About을 누르면 메인 페이지의 이력 섹션으로 가도록 주소(/#about)를 수정했습니다 */}
          <a href="/#about" className="hover:text-black transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </a>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`hover:text-black transition-colors flex items-center gap-1 ${isDropdownOpen ? 'text-black' : ''}`}>
              Projects
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* 드롭다운 메뉴 */}
            <div className={`absolute top-full right-0 pt-2 w-56 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
              <div className="bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden p-2">
                {projectData.map(p => (
                  // ✨ 드롭다운 메뉴의 항목을 클릭해도 각 상세페이지로 바로 이동하도록 Link로 변경했습니다!
                  <Link key={p.id} to={`/project/${p.id}`} className="block px-4 py-2.5 hover:bg-gray-100 rounded-lg text-sm text-gray-700 hover:text-black transition-colors truncate">
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;