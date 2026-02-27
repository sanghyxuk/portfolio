import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams(); 
  const project = projectData.find(p => p.id === id);
  
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

        {/* 🎬 시연 동영상 (영상이 있는 경우 최상단에 나타남) */}
        {project.video && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black">
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              controls 
              className="w-full h-auto object-contain max-h-[600px]" 
            />
          </div>
        )}

        {/* 📝 상세 설명 영역 */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-bold text-black mb-4 border-b border-gray-200 pb-2">프로젝트 소개</h3>
          <p className="mb-10">{project.description}</p>
        </div>

        {/* 🖼️ 상세페이지 사진 갤러리 */}
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
                  onClick={() => setSelectedImage(imgUrl)}
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

      {/* 🔍 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-8 text-white text-4xl font-light hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
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