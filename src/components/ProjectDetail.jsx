import { useState } from "react"; // 👈 상태 관리를 위해 추가
import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams(); 
  const project = projectData.find(p => p.id === id);
  
  // 🔍 현재 클릭해서 확대할 이미지 주소를 저장하는 상태 (아무것도 안 눌렀을 땐 null)
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-black">프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/" className="text-gray-500 hover:text-black underline">← 메인으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="inline-block mb-10 text-sm font-bold text-gray-400 hover:text-black transition-colors">
          ← Back to Home
        </Link>
        
        <div className="mb-10">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-3 block">Project Detail</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-gray-100 text-black text-xs rounded-md font-bold uppercase tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 📸 대표 사진 (여기도 클릭하면 커지도록 추가했습니다) */}
        {(project.image || project.video) && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            {project.video ? (
              <video src={project.video} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" 
                onClick={() => setSelectedImage(project.image)} // 클릭 시 이미지 주소 저장
              />
            )}
          </div>
        )}

        {/* 📝 상세 설명 영역 */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-bold text-black mb-4 border-b border-gray-200 pb-2">프로젝트 소개</h3>
          <p className="mb-10">{project.description}</p>
        </div>

        {/* 🖼️ 추가 스크린샷 갤러리 */}
        {project.detailImages && project.detailImages.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-2">기능 상세 스크린샷</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.detailImages.map((imgUrl, index) => (
                <img 
                  key={index} 
                  src={imgUrl} 
                  alt={`${project.title} 스크린샷 ${index + 1}`} 
                  className="w-full h-auto rounded-xl border border-gray-200 shadow-sm hover:shadow-md cursor-zoom-in hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setSelectedImage(imgUrl)} // 클릭 시 이미지 주소 저장
                />
              ))}
            </div>
          </div>
        )}

        {/* 링크 버튼 영역 */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
            GitHub Repository →
          </a>
          {project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 text-black font-bold rounded-lg hover:bg-gray-50 transition-colors">
              Live Demo
            </a>
          )}
        </div>
      </section>

      {/* 🔍 이미지 확대 모달 (selectedImage에 값이 있을 때만 화면에 나타남) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)} // 검은 배경이나 사진을 누르면 다시 null로 만들어서 창을 닫음
        >
          {/* 우측 상단 X 버튼 */}
          <button 
            className="absolute top-6 right-8 text-white text-4xl font-light hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          {/* 확대된 이미지 */}
          <img 
            src={selectedImage} 
            alt="확대된 스크린샷" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

export default ProjectDetail;